export const useTransformations = (data) => {
  const NUMBER_WORDS = {
    thousand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24,
  };

  function parseNumberString(str) {
    if (typeof str === 'number') return str;

    const parts = str.toLowerCase().split(' ');
    const num = parseFloat(parts[0]);

    if (!isNaN(num)) {
      const unit = parts[1];
      return num * (NUMBER_WORDS[unit] || 1);
    }

    return NaN;
  }

  const sortedData = data
    .map((obj) => ({ ...obj, numericKi: parseNumberString(obj.ki) }))
    .filter((obj) => !isNaN(obj.numericKi))
    .sort((a, b) => a.numericKi - b.numericKi)
    .map(({ numericKi, ...rest }) => rest);

  return sortedData;
};
