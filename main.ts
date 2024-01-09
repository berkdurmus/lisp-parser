#!/usr/bin/env node

import * as util from 'util';
import { parser, tokenizer, removeComments } from './src/index';

export const parseLisp = (input:string) => {
  input = removeComments(input);
  const tokens = tokenizer(input);
  return parser(tokens);
};


const args = process.argv.slice(2);

if(args.length !== 0){

  console.time("Execution Time"); 
  const parsed = parseLisp(args[0]);
  console.timeEnd("Execution Time");

  console.log('input: ',args[0]);
  console.log('output:', util.inspect(parsed, { depth: null }));
}
