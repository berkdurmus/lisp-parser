
# Lisp-Parser

![lisp-parser](https://github.com/berkdurmus/lisp-parser/assets/32547890/5668e207-1193-4309-98fb-5fa37bf1d3ad)



## Introduction
Lisp-Parser is a TypeScript-based parser for LISP code. It provides a means to parse LISP syntax into a structured format, offering insights into the code's structure and components. This tool is particularly useful for developers working with or analyzing LISP code. We could extend this logic to have LISP interpreter in future! I will briefly mention algorithm & data structure after getting started. 

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. **Clone the repository:**
   ```bash
   git clone git@github.com:berkdurmus/lisp-parser.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd lisp-parser
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage
To use Lisp-Parser, run the following command from the terminal with your LISP code as an argument:
```bash
npm run parse "your-lisp-code"
```
This command will parse the provided LISP code and output the result. For example you can run:  ``npm run parse "(first (list 1 (+ 2 3) 9))"``

## Running the Tests
The project uses Jest for testing. To run tests, use the following command:
```bash
npm test
```

## Test Results
I've created 10 test cases. 10/10 passed successfully. Tests are provided below:

   | Test Name                           | Input                        | Expected Output
   |:----------------------------------- |:---------------------------- |:-----------------------------------                                             
   | Basic Parsing                       | input: '(a b c)'             | [['a', 'b', 'c']]
   | Nested Parsing                      | input: '(a (b c) d)'         | [['a', ['b', 'c'], 'd']]
   | Quote Handling                      | input: "'(a b c)"            | [['quote', ['a', 'b', 'c']]]
   | Syntax Error Handling               | input: '(a (b c)'            | Syntax Error: "Unmatched ( in expression"
   | Empty Input                         | input: ''                    | []
   | Deeply Nested Parsing               | input: '(a (b (c d) e) f)'   | [['a', ['b', ['c', 'd'], 'e'], 'f']]
   | Multiple Nested Quotes              | input: "'(a '(b c) d)"       | [['quote', ['a', ['quote', ['b', 'c']], 'd']]]
   | Mixed Quotes and Nested Structures  | input: '(a \'(b c) (d e))'   | [['a', ['quote', ['b', 'c']], ['d', 'e']]]
   | Consecutive Quotes                  | input: "''a"                 | [['quote', ['quote', 'a']]]
   | Unmatched Closing Parenthesis       | input: '(a b ))'             | Syntax Error: "Unmatched ) in expression"
   

Screenshot below shows the test results.
<img width="1494" alt="Screenshot 2024-01-09 at 05 09 17" src="https://github.com/berkdurmus/lisp-parser/assets/32547890/18bb6be3-27df-4991-aca1-9bec34974db6">


Screenshot below shows the npm run parse command output.
<img width="779" alt="Screenshot 2024-01-09 at 05 38 29" src="https://github.com/berkdurmus/lisp-parser/assets/32547890/4e8b56ef-6f2c-4826-b289-dab83a9d64ca">

## Algorithm and Data Structure

### Lisp Parsing Algorithm

1. **Removing Comments:**
   - Scans the code to strip out comments.
   - Complexity: Time - O(n), Space - O(n) if storing the result, otherwise O(1).

2. **Tokenization:**
   - Breaks the input Lisp code into tokens (smallest units like keywords, symbols, operators).
   - Data Structure: Array or list for storing tokens.
   - Complexity: Time - O(n), Space - O(n).

3. **Parsing:**
   - Converts the stream of tokens into a syntax tree (AST - Abstract Syntax Tree).
   - Data Structure: Implemented via Stacks.
   - Complexity: Time - Generally O(n), Space - O(n).



### Application to Lisp-Parser
The `main.ts` file in the project indicates a similar flow: removing comments, tokenization, and parsing into an AST.

### Memory and Time Complexity
- Memory Complexity: Primarily from storing tokens and the AST, both proportional to the input size (O(n)).
- Time Complexity: Generally linear (O(n)) for both tokenization and parsing.



## Development
- **`main.ts`**: The entry point of the application. It includes the logic for parsing LISP code.
- **`src` Directory**: Contains the core logic and modules of the parser. Explore this directory for further development and understanding of the parser's internal workings.

## Contributing
Contributions to Lisp-Parser are welcome. Please ensure to update tests as appropriate.

## License
This project is licensed under the ISC License.
