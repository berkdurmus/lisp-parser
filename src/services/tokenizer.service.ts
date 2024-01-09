/**
 * Tokenizes a string input into an array of individual tokens.
 *
 * This tokenizer is designed for Lisp-like syntax where parentheses and single quotes are used
 * to denote nested structures and quoted expressions, respectively. It ensures that parentheses
 * and single quotes are treated as separate tokens regardless of adjacent characters.
 *
 * @param {string} input - The string input to tokenize.
 * @returns {string[]} An array of tokens extracted from the input.
 */
export const tokenizer = (input: string): string[] => {
  // Check if the input is empty or contains only whitespace, and return an empty array in that case.
  if (input.trim().length === 0) {
    return [];
  }

  // Add space around parentheses and single quotes to ensure they are separated from other characters.
  // Replace every opening parenthesis '(' with ' ( ', closing parenthesis ')' with ' ) ',
  // and single quote '\'' with ' ' ' ' to treat them as separate tokens.
  const spacedInput = input
    .replace(/\(/g, ' ( ')
    .replace(/\)/g, ' ) ')
    .replace(/'/g, " ' ");

  // Trim leading and trailing whitespace and split the string into tokens based on spaces.
  // The regular expression /\s+/ matches any sequence of space characters, splitting the input accordingly.
  return spacedInput.trim().split(/\s+/);
};
