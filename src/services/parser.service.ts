import { Stack, atom } from '../index';

/**
 * Parses a sequence of tokens into a nested array structure.
 * 
 * This function is designed to parse tokens typically found in Lisp-like languages.
 * It handles nested structures marked by parentheses and quoted expressions.
 *
 * @param {string[]} tokens - An array of string tokens to be parsed.
 * @returns {any[]} A nested array representing the structured form of the tokens.
 */
export const parser = (tokens: string[]): any => {
    // Stack to manage nested structures (like parentheses)
    const stack = new Stack<any[]>();
    // Current working array to build up the nested structure
    let current: any[] = [];
    // Token index initializer
    let i = 0;

    // Iterate over each token
    while (i < tokens.length) {
        const token = tokens[i];

        // Handle opening parenthesis
        if (token === '(') {
            // Push current context onto stack and start a new context
            stack.push(current);
            current = [];
        } 
        // Handle closing parenthesis
        else if (token === ')') {
            // Check for unmatched closing parenthesis
            if (stack.isEmpty()) {
                throw new SyntaxError("Unmatched ) in expression");
            }
            // Finalize current context and pop from stack to resume previous context
            const completed = current;
            current = stack.pop()!;
            current.push(completed);
        } 
        // Handle quotes
        else if (token === "'") {
            // Count consecutive quotes for nested quoting
            let quoteCount = 0;
            while (tokens[i] === "'") {
                quoteCount++;
                i++;
            }

            // Check for premature end of input
            if (i >= tokens.length) {
                throw new SyntaxError("Unexpected end of input after quote");
            }

            let quotedContent;
            // Special handling for quoted sections starting with a parenthesis
            if (tokens[i] === '(') {
                let depth = 1;
                let nestedTokens = [];
                i++; // Move past the opening parenthesis

                // Collect tokens until the matching closing parenthesis
                while (i < tokens.length && depth > 0) {
                    if (tokens[i] === '(') {
                        depth++;
                    } else if (tokens[i] === ')') {
                        depth--;
                        if (depth === 0) {
                            // Exit on reaching the closing parenthesis of this level
                            break;
                        }
                    }
                    nestedTokens.push(tokens[i]);
                    i++;
                }

                // Recursively parse the nested quoted section
                quotedContent = parser(nestedTokens);
            } else {
                // Handle a single quoted token
                quotedContent = atom(tokens[i]);
            }

            // Apply quoting for each quote encountered
            for (let j = 0; j < quoteCount; j++) {
                quotedContent = ['quote', quotedContent];
            }

            // Add the quoted content to the current context
            current.push(quotedContent);
        } 
        else {
            // Handle regular tokens
            current.push(atom(token));
        }
        i++; // Move to the next token
    }

    // Check for unmatched opening parenthesis
    if (!stack.isEmpty()) {
        throw new SyntaxError("Unmatched ( in expression");
    }

    return current;
};
