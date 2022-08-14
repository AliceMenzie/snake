import { useRef } from "react";
import Canvas from "../canvas/Canvas";
import draw from "../draw/draw";
import { StyledGame } from "./Game.styles";
import useGameLogic from "./useGameLogic";

type Props = {};
export const Game = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { snakeBody, onKeyDownHandler } = useGameLogic({
    canvasHeight: canvasRef.current?.height,
    canvasWidth: canvasRef.current?.width,
  });

  const drawGame = (context: CanvasRenderingContext2D) => {
    draw({ context, snakeBody });
  };
  return (
    <StyledGame tabIndex={0} onKeyDown={onKeyDownHandler}>
      <Canvas draw={drawGame} ref={canvasRef} />
    </StyledGame>
  );
};
