const rotateArray2D = <T>(
  x: number,
  y: number,
  array: Array<Array<T>>
): Array<Array<T>> => {
  const xRotateArray = array.map(
    (row: Array<T>): Array<T> => row.slice(-x).concat(row.slice(0, -x))
  );
  const xyRotateArray = xRotateArray
    .slice(-y)
    .concat(xRotateArray.slice(0, -y));
  return xyRotateArray;
};

export default rotateArray2D;
