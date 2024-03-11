export function omitToObject<From, To>(from: From, to: To, excludeKeys: { [key: string]: boolean }): To {
  Object.keys(from).forEach((key) => {
    if (excludeKeys[key]) {
      return;
    }
    if (to.hasOwnProperty(key)) {
      to[key] = from[key];
    }
  });

  return to;
}
