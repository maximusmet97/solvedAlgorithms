const deepCopy = (obj) => {
  const retVal = {};

  if (typeof obj !== "object") return obj;

  for (let key in obj) {
    retVal[key] = deepCopy(obj[key]);
  }

  return retVal;
};
