
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
   cd lisp-parsed
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
This command will parse the provided LISP code and output the result.

## Running the Tests
The project uses Jest for testing. To run tests, use the following command:
```bash
npm test
```

## Development
- **`main.ts`**: The entry point of the application. It includes the logic for parsing LISP code.
- **`src` Directory**: Contains the core logic and modules of the parser. Explore this directory for further development and understanding of the parser's internal workings.

## Contributing
Contributions to Lisp-Parser are welcome. Please ensure to update tests as appropriate.

## License
This project is licensed under the ISC License.
