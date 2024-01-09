
# Lisp-Parser Project

## Introduction
Lisp-Parser is a TypeScript-based parser for LISP code. It provides a means to parse LISP syntax into a structured format, offering insights into the code's structure and components. This tool is particularly useful for developers working with or analyzing LISP code.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. **Clone the repository:**
   ```bash
   git clone [git@github.com:berkdurmus/lisp-parser.git]
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

      Test Name                           Input                         Expected Output
   1. Basic Parsing                       input: '(a b c)'              [['a', 'b', 'c']]
   2. Nested Parsing                      input: '(a (b c) d)'          [['a', ['b', 'c'], 'd']]
   3. Quote Handling                      input: "'(a b c)"             [['quote', ['a', 'b', 'c']]]
   4. Syntax Error Handling               input: '(a (b c)'             Syntax Error: "Unmatched ( in expression"
   5. Empty Input                         input: ''                     []
   6. Deeply Nested Parsing               input: '(a (b (c d) e) f)'    [['a', ['b', ['c', 'd'], 'e'], 'f']]
   7. Multiple Nested Quotes              input: "'(a '(b c) d)"        [['quote', ['a', ['quote', ['b', 'c']], 'd']]]
   8. Mixed Quotes and Nested Structures  input: '(a \'(b c) (d e))'    [['a', ['quote', ['b', 'c']], ['d', 'e']]]
   9. Consecutive Quotes                  input: "''a"                  [['quote', ['quote', 'a']]]
  10. Unmatched Closing Parenthesis       input: '(a b ))'              Syntax Error: "Unmatched ) in expression"
   
Screenshot below shows the results.
<img width="1494" alt="Screenshot 2024-01-09 at 05 09 17" src="https://github.com/berkdurmus/lisp-parser/assets/32547890/18bb6be3-27df-4991-aca1-9bec34974db6">

## Development
- **`main.ts`**: The entry point of the application. It includes the logic for parsing LISP code.
- **`src` Directory**: Contains the core logic and modules of the parser. Explore this directory for further development and understanding of the parser's internal workings.

## Contributing
Contributions to Lisp-Parser are welcome. Please ensure to update tests as appropriate.

## License
This project is licensed under the ISC License.
