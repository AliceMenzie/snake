import { useRef } from "react";
import Canvas from "../canvas/Canvas";
import draw from "../draw/draw";
import { StyledGame } from "./Game.styles";
import useGameLogic from "./useGameLogic";

type Props = {};
export const Game = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { snakeBody } = useGameLogic()

  const drawGame = (context: CanvasRenderingContext2D) => {
    draw({context, snakeBody})
  };
  return (
    <StyledGame>
      <Canvas draw={drawGame} ref={canvasRef} />
    </StyledGame>
  );
};
