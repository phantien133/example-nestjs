export function omitToObject<From, To>(from: From, to: To, excludeKeys: string[]): To {
  Object.keys(from).forEach((key) => {
    if (excludeKeys.includes(key)) {
      return;
    }
    if (to.hasOwnProperty(key)) {
      to[key] = from[key];
    }
  });

  return to;
}
