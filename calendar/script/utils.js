// const assert = require('assert');

/**
 * Determines if keyword is found within src, not case sensitive.
 * @param {source string} src 
 * @param {keyword to match} keyword 
 * @returns if both strings exist, and if keyword is found in src - not case sensitive.
 */
function lowerIncludes(src, keyword) {
    return !!(src && keyword && src.toLowerCase().includes(keyword.toLowerCase()));
}

/**
 * Tests lowerIncludes function
 */
// function testLowerIncludes() {
//   assert.strictEqual(lowerIncludes('Hello World', 'hello'), true);
//   assert.strictEqual(lowerIncludes('Hello', 'Hello'), true);
//   assert.strictEqual(lowerIncludes('Hello World', 'JavaScript'), false);
//   assert.strictEqual(lowerIncludes('', 'JavaScript'), false);
// }

// testLowerIncludes();