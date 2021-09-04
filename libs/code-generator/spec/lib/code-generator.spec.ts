import { CodeGenerator } from '../../src/lib/code-generator';

describe('code-generator', () => {
  test('be defined', () => {
    const codeGen = new CodeGenerator();

    expect(codeGen).toBeDefined();
  });
});
