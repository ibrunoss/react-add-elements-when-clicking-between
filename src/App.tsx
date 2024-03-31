import React from "react";
import InputRequirements from "./components/InputRequirements";

function App() {
  const [input, setInput] = React.useState("");
  const resetInput = () => setInput("");
  /*    */

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          resetInput();
        }}
      >
        Reset
      </button>
      <InputRequirements
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
