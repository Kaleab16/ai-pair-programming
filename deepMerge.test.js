#!/usr/bin/env node

const assert = require('assert');
const deepMerge = require('./deepMerge');

console.log('Running deepMerge tests...\n');

// Test 1: Simple non-nested property merging
{
  const target = { a: 1, b: 2 };
  const source = { b: 3, c: 4 };

  const result = deepMerge(target, source);

  assert.deepStrictEqual(result, { a: 1, b: 3, c: 4 });
  console.log('PASS: Simple non-nested property merging');
}

// Test 2: Deeply nested object merging
{
  const target = {
    user: {
      name: 'Alex',
      settings: {
        theme: 'light',
        notifications: true
      }
    },
    version: 1
  };
  const source = {
    user: {
      settings: {
        theme: 'dark'
      },
      role: 'admin'
    }
  };

  const result = deepMerge(target, source);

  assert.deepStrictEqual(result, {
    user: {
      name: 'Alex',
      settings: {
        theme: 'dark',
        notifications: true
      },
      role: 'admin'
    },
    version: 1
  });
  console.log('PASS: Deeply nested object merging');
}

console.log('\nAll tests passed.');
