import React, { InputHTMLAttributes, useEffect, useRef } from "react";

function Input(props: Readonly<InputHTMLAttributes<HTMLInputElement>>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const selectInput = () => inputRef.current?.select();

  const setInputStateEdit = () =>
    inputRef.current?.setAttribute("data-state", "edit");

  const setInputStateIdle = () =>
    inputRef.current?.setAttribute("data-state", "idle");

  const onFocusInput = () => {
    setInputStateEdit();
    selectInput();
  };

  const onBlurInput = () => {
    setInputStateIdle();
  };

  useEffect(() => {
    if (props.value === "-") {
      setInputStateEdit();
      selectInput();
    }
  }, [props.value]);

  return (
    <input
      data-state="idle"
      ref={inputRef}
      className="text-xl bg-transparent cursor-pointer focus:outline-none focus:border-none h-[100px] w-[100px] border data-[state=idle]:border-solid data-[state=edit]:border-dashed outline-none:focus rounded-md border-white text-center"
      type="text"
      onFocus={onFocusInput}
      onBlur={onBlurInput}
      {...props}
    />
  );
}

export default Input;
