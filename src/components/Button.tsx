import { HtmlHTMLAttributes } from "react";

function Button(props: Readonly<HtmlHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      className="w-1 h-[100px] hover:bg-gray-500"
      {...props}
    />
  );
}

export default Button;
