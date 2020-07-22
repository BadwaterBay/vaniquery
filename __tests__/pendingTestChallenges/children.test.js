/**
 * Test function vanilla on case 'children'
 */

const { vanilla } = require('../../lib/vanilla');
const loadFileToBuffer = require('../../lib/loadFileToBuffer');

describe("Test command 'vanilla' on test challenges", () => {
  const testName = 'children';

  test(`Vanillaize '${testName}'`, async () => {
    // Input
    const argv = {
      _: ['vanilla', `./__tests__/testCases/${testName}.js`],
      C: true,
      'no-cache': true,
      noCache: true,
      $0: 'vaniquery',
    };

    // Output
    const output = await vanilla(argv);

    // Answer key
    const answerKeyFile = `./__tests__/testCases/${testName}.answerkey.js`;
    const answerKey = await loadFileToBuffer(answerKeyFile);

    // Expect
    expect(output).toEqual(answerKey);
  });
});