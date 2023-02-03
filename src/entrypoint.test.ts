import process from 'process';
import cp from 'child_process';
import path from 'path';

import dotenv from 'dotenv'
dotenv.config();

test('test runs', () => {
  const ip = path.join(__dirname, '..', 'dist', 'entrypoint.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
})