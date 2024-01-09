/**
 * Converts a token into its corresponding atomic data type.
 * 
 * This function handles the conversion of string tokens into more specific data types:
 * numbers, booleans, strings, or symbols. It is a crucial part of the parsing process,
 * allowing the parser to interpret tokens as their appropriate types rather than just strings.
 *
 * @param {string} token - The token to be converted.
 * @returns {any} The atomic value corresponding to the token.
 */
export const atom = (token: string): any => {
  // Check if the token can be converted to a number and return the number if so.
  if (!isNaN(parseFloat(token))) {
    return parseFloat(token);
  } 
  // Check for boolean 'true' and 'false' literals.
  else if (token === 'true') {
      return true;
  } else if (token === 'false') {
      return false;
  } 
  // Check if the token is a string literal enclosed in double quotes.
  else if (token.startsWith('"') && token.endsWith('"')) {
      // Remove the enclosing double quotes.
      return token.slice(1, -1);
  } 
  // Return the token as is for other cases (like symbols in Lisp).
  else {
      return token;
  }
};

/**
 * Removes comments from a Lisp-like input string.
 * 
 * This function processes each line of the input, removing anything following a semicolon (';'),
 * which denotes a comment in many Lisp-like languages. This is essential for pre-processing the
 * input before tokenization and parsing, as comments should not be interpreted as code.
 *
 * @param {string} input - The string input potentially containing comments.
 * @returns {string} The input string with comments removed.
 */
export const removeComments = (input:string): string => {
  // Split the input into lines, handle each line separately.
  return input.split('\n').map(line => 
    // For each line, split it at the first semicolon (if any) and take the first part,
    // effectively removing the comment.
    line.split(';')[0]
  ).join('\n'); // Rejoin the processed lines back into a single string.
};