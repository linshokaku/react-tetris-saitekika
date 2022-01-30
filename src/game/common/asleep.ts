const asleep = (ms: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });

export default asleep;
