import React, { useState } from "react";
import Block from "./Block";
import Background from "./Background";

import tictactoc from "../lib/tictactoc";

function useToggle(setIsDone, size = 3) {
  const [boards, setBoards] = useState(new Array(size * size).fill(undefined));
  const [next, setNext] = useState(true);

  const toggle = function(index) {
    if (tictactoc.getIsOver()) {
      return;
    }

    const newBoards = boards.map((board, _index) => {
      if (typeof board === "boolean") {
        return board;
      }

      if (_index === index) {
        return next;
      }

      return board;
    });
    const isChanged = newBoards.some((board, index) => boards[index] !== board);

    if (isChanged) {
      setIsDone(_ => tictactoc.getResult(boards, next, index));
      setBoards(newBoards);
      setNext(!next);
    }
  };

  return [boards, next, toggle];
}

function getStatus(boards, isDone, next) {
  let result = "Doing";

  if (isDone) {
    result = `${next ? "X" : "O"} is winner`;
  } else if (!isDone && boards.every(board => typeof board === "boolean")) {
    result = `No Winner`;
  } else if (next) {
    result = `O turn`;
  } else if (!next) {
    result = `X turn`;
  }

  return result;
}

function Board({ size }) {
  const [isDone, setIsDone] = useState(false);
  const [boards, next, toggle] = useToggle(setIsDone, size);
  const status = getStatus(boards, isDone, next);

  return (
    <div>
      <div id="status">{status}</div>
      <div id="board">
        {boards.map((board, index) => {
          return (
            <Block
              marker={board}
              index={index}
              toggle={toggle}
              key={index}
              size={size}
              next={next}
            />
          );
        })}
      </div>
      <Background next={next} />
    </div>
  );
}

export default Board;
