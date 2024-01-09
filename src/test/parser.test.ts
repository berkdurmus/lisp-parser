import { parseLisp } from '../../main';

describe('Parser Service Tests', () => {
  // Test for basic parsing
  test('Basic Parsing', () => {
    const input = '(a b c)';
    const expectedOutput = [['a', 'b', 'c']];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for nested parsing
  test('Nested Parsing', () => {
    const input = '(a (b c) d)';
    const expectedOutput = [['a', ['b', 'c'], 'd']];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for quote handling
  test('Quote Handling', () => {
    const input = "'(a b c)";
    const expectedOutput = [['quote', ['a', 'b', 'c']]];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for syntax error handling
  test('Syntax Error Handling', () => {
    const input = '(a (b c)';
    expect(() => parseLisp(input)).toThrow(SyntaxError);
    expect(() => parseLisp(input)).toThrow("Unmatched ( in expression");
  });

  // Test for empty input
  test('Empty Input', () => {
    const input = '';
    const expectedOutput = [];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for deeply nested parsing
  test('Deeply Nested Parsing', () => {
    const input = '(a (b (c d) e) f)';
    const expectedOutput = [['a', ['b', ['c', 'd'], 'e'], 'f']];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for multiple nested quotes
  test('Multiple Nested Quotes', () => {
    const input = "'(a '(b c) d)";
    const expectedOutput = [['quote', ['a', ['quote', ['b', 'c']], 'd']]];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for mixed quotes and nested structures
  test('Mixed Quotes and Nested Structures', () => {
    const input = '(a \'(b c) (d e))';
    const expectedOutput = [['a', ['quote', ['b', 'c']], ['d', 'e']]];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for consecutive quotes
  test('Consecutive Quotes', () => {
    const input = "''a";
    const expectedOutput = [['quote', ['quote', 'a']]];
    expect(parseLisp(input)).toEqual(expectedOutput);
  });

  // Test for unmatched closing parenthesis
  test('Unmatched Closing Parenthesis', () => {
    const input = '(a b ))';
    expect(() => parseLisp(input)).toThrow(SyntaxError);
    expect(() => parseLisp(input)).toThrow("Unmatched ) in expression");
  });
});
