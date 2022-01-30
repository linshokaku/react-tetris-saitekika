const rotate_array_2d = (x: number, y: number, array: Array<Array<any>>) => {
  const x_rotate_array = array.map((row: Array<any>) =>
    row.slice(-x).concat(row.slice(0, -x))
  );
  const x_y_rotate_array = x_rotate_array
    .slice(-y)
    .concat(x_rotate_array.slice(0, -y));
  return x_y_rotate_array;
};

export default rotate_array_2d;
