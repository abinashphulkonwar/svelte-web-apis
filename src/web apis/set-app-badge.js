let strokes = 0;

export const pointerdown = () => {
  // @ts-ignore
  navigator.setAppBadge(++strokes);
};

export const clearBtn = () => {
  strokes = 0;
  // @ts-ignore
  navigator.setAppBadge(strokes);
};
