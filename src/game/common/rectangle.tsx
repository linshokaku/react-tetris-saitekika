import { Graphics } from 'pixi.js';

type RectangleDraw = (g: Graphics) => void;

const Rectangle = (props: {
  color: number;
  x: number;
  y: number;
  width: number;
  height: number;
}): RectangleDraw => {
  const draw = (g: Graphics): void => {
    g.clear();
    g.beginFill(props.color);
    g.drawRect(props.x, props.y, props.width, props.height);
    g.endFill();
  };

  return draw;
};

const RectangleWithBorder = (props: {
  color: number;
  x: number;
  y: number;
  width: number;
  height: number;
  borderColor: number;
  borderWidth: number;
}): RectangleDraw => {
  const draw = (g: Graphics): void => {
    g.clear();
    g.lineStyle(props.borderWidth, props.borderColor);
    g.beginFill(props.color);
    g.drawRect(props.x, props.y, props.width, props.height);
    g.endFill();
  };

  return draw;
};

export { Rectangle, RectangleWithBorder };
