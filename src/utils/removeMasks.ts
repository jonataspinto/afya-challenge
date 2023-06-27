import { object } from 'yup';

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

export const removeMasks = <T = unknown>(
  data: T,
  maskSymbols: Array<string>,
  ignoreKeys: Array<string>,
) => {
  if (typeof data !== 'object') {
    return data;
  }
  const draft = Object.entries(data as {});

  return draft.reduce<T>((previous, current) => {
    const [key, value] = current;

    if (ignoreKeys.includes(key) || typeof value !== 'string') {
      return {
        ...previous,
        [key]: value,
      };
    }

    return {
      ...previous,
      [key]: regexReplaceAll(value, maskSymbols, ''),
    };
  }, {} as T);
};
