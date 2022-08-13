import { useRef } from "react";
import Canvas from "../canvas/Canvas";
import { StyledGame } from "./Game.styles";

type Props = {};
export const Game = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw = (context: CanvasRenderingContext2D) => {};
  return (
    <StyledGame>
      <Canvas draw={draw} ref={canvasRef} />
    </StyledGame>
  );
};
