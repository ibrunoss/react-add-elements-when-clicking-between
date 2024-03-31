import React from "react";
import { Fragment } from "react";
import {
  Input,
  Footer,
  Header,
  ConditionalRendering,
  Button,
} from "./components";
import useCells from "./hooks/useCells";

function App() {
  const { addCellAfterIndex, cells, cellsValueJoined, updateCellByIndex } =
    useCells();
  return (
    <div className="flex flex-col items-center justify-between h-full min-h-screen text-gray-100 bg-gray-900">
      <Header />
      <main className="flex flex-col items-center gap-4">
        <section className="flex items-center">
          {cells.map((cell, idx) => (
            <Fragment key={idx}>
              <Input
                value={cell}
                onChange={(e) => updateCellByIndex(e.target.value, idx)}
              />
              <ConditionalRendering renderIf={idx < cells.length - 1}>
                <Button onClick={() => addCellAfterIndex(idx)} />
              </ConditionalRendering>
            </Fragment>
          ))}
        </section>
        <p>{cellsValueJoined}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
