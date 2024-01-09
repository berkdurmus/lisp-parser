#!/usr/bin/env node

// Importing utilities and functions from other modules
import * as util from 'util';
import { parser, tokenizer, removeComments } from './src/index';

/**
 * Parses a given LISP string input.
 *
 * This function first removes comments from the input, then tokenizes the input string,
 * and finally uses the parser to parse the tokens into a structured format.
 *
 * @param {string} input - The LISP string input to parse.
 * @returns {Object} The parsed structure of the LISP code.
 */
export const parseLisp = (input:string) => {
  input = removeComments(input);
  const tokens = tokenizer(input);
  return parser(tokens);
};

// Main execution block
/**
 * The main execution block of the script.
 *
 * This block processes command-line arguments to parse LISP code provided as input.
 * It measures and logs the execution time for parsing and displays both input and
 * the parsed output in the console.
 */
(function main() {
  const args = process.argv.slice(2); // Extract command-line arguments, excluding the first two elements

  // Check if there are any arguments passed and process the first argument
  if(args.length !== 0){
    console.time("Execution Time"); // Start timing the execution

    const parsed = parseLisp(args[0]); // Parse the first argument using parseLisp function

    console.timeEnd("Execution Time"); // End timing the execution and log the time taken

    // Logging input and output to the console
    console.log('input: ',args[0]); // Log the input string
    console.log('output:', util.inspect(parsed, { depth: null })); // Log the parsed output, inspecting deeply nested objects
  }
})();