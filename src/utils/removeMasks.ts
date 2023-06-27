export function regexReplaceAll(
  str: string = '',
  find: string[],
  replace: string,
): string {
  let newStr = str;
  for (let i = 0; i < find.length; i++) {
    if (typeof newStr !== 'string') {
      return newStr;
    }
    newStr = newStr?.replace(new RegExp(`[${find[i]}]`, 'g'), replace);
  }
  return newStr;
}

export const removeMasks = (
  data: Record<string, any>,
  ignoreKeys: Array<string>,
) => {
  const draft = Object.entries(data);

  return draft.reduce((previous, current) => {
    const [key, value] = current;

    if (ignoreKeys.includes(key)) {
      return {
        ...previous,
        [key]: value,
      };
    }

    return {
      ...previous,
      [key]: regexReplaceAll(value, ['.', '-'], ''),
    };
  }, {});
};
