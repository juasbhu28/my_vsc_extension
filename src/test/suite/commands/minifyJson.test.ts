import * as assert from 'assert';
import { MinifyJson } from '../../../core/commands/minify-json';

describe('MinifyJson', () => {
  const minifyJson = new MinifyJson();
  
  // Aquí irán los test unitarios
  test('minifyJson should return a string with no white spaces or comments', () => {
    const input = `{
      "foo": "bar", // This is a comment
      "baz": [
        "qux",
        "quux",
        "This text is ok"
      ]
    }`;
  
    const expectedOutput = '{"foo":"bar","baz":["qux","quux","This text is ok"]}';
    assert.strictEqual(minifyJson.minifyJson(input), expectedOutput);
  });
});