import { useState } from "react";

function useCells() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  // High Order Function para auxiliar o uso da HOF splice na atualização do estado das células
  const spliceCellsValue = (
    start: number,
    deleteCount: number,
    ...items: string[]
  ) => {
    return (prevCellsState: string[]) => {
      const _cells = [...prevCellsState];
      _cells.splice(start, deleteCount, ...items);
      return _cells;
    };
  };

  // Atualiza o valor de uma célula determinada pelo seu index
  const updateCellByIndex = (newCellValue: string, indexToUpdate: number) =>
    setCells(
      spliceCellsValue(indexToUpdate, 1, newCellValue[newCellValue.length - 1])
    );

  // Adiciona uma nova célula depois do index
  const addCellAfterIndex = (index: number) =>
    setCells(spliceCellsValue(index + 1, 0, "-"));

  const cellsValueJoined = cells.join("");
  return {
    addCellAfterIndex,
    cells,
    cellsValueJoined,
    updateCellByIndex,
  };
}

export default useCells;
