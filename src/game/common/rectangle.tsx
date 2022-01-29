import { Graphics } from 'pixi.js';
import { useCallback } from 'react';

type RectangleDraw = (g: Graphics) => void;

const Rectangle = (props: {
  color: number | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
}): RectangleDraw => {
  const draw = useCallback(
    (g: Graphics): void => {
      g.clear();
      g.beginFill(props.color);
      g.drawRect(props.x, props.y, props.width, props.height);
      g.endFill();
    },
    [props]
  );

  return draw;
};

export default Rectangle;
