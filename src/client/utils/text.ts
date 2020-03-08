/**
 * Remove punctuation string
 * @param {string} str
 * @return {string} 
 */

  export const removePunctuation = (str: string) => {
    const match = str.match(/\b(.*)\b/g);
    
    if (!match) {
      return str;
    }
    
    return match[0];
  };

/**
 * Truncate string
 * @param {string} str
 * @param {number} length - Maximal length of truncated string. Defaults to 0.
 * @param {boolean} breakWord - Specifies whether words can be broken. Defaults to true.
 * @param {string} end. Custom ellipsis. Defaults to "...".
 * @return {string} Truncated string.
 */

export const truncate = (str: string, length: number = 0, breakWord: boolean = true, end: string = "..."): string => {
  if (str.length > length) {
    if (breakWord === false) {
      str = str.substr(0, length);

      // If there is more then one word, or space, it will not break words      
      if (str.lastIndexOf(" ") > 0) {
        str = str.substr(0, Math.min(str.length, str.lastIndexOf(" ")));
      }
      
      return removePunctuation(str) + end;
    }

    str = str.substr(0, length).trim();
    return removePunctuation(str) + end;
  }

  return str;
};