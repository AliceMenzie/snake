import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import createSnakeMovement from "./movement";

export interface Position {
  x: number;
  y: number;
}

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const MOVEMENT_SPEED = 100;

const useGameLogic = () => {
  const [direction, setDirection] = useState<Direction | undefined>();

  const [snakeBody, setSnakeBody] = useState<Position[]>([
    {
      x: 0,
      y: 0,
    },
  ]);

  const { moveDown, moveLeft, moveRight, moveUp } = createSnakeMovement();

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "KeyS":
        setDirection(Direction.DOWN);
        break;
      case "KeyW":
        setDirection(Direction.UP);
        break;
      case "KeyA":
        setDirection(Direction.LEFT);
        break;
      case "KeyD":
        setDirection(Direction.RIGHT);
        break;
    }

    console.log(event.code);
  };

  const moveSnake = () => {
    let snakeBodyAfterMovement: Position[] | undefined;
    switch (direction) {
      case Direction.UP:
        snakeBodyAfterMovement = moveUp(snakeBody);
        break;
      case Direction.DOWN:
        snakeBodyAfterMovement = moveDown(snakeBody);
        break;
      case Direction.LEFT:
        snakeBodyAfterMovement = moveLeft(snakeBody);
        break;
      case Direction.RIGHT:
        snakeBodyAfterMovement = moveRight(snakeBody);
        break;
    }

    if (snakeBodyAfterMovement) {
      setSnakeBody(snakeBodyAfterMovement);
    }
  };

  useInterval(moveSnake, MOVEMENT_SPEED);

  return {
    snakeBody,
    onKeyDownHandler,
  };
};

export default useGameLogic;
