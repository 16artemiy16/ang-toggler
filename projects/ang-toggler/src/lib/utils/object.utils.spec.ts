import { mergeObjects } from './object.utils';

describe('object.util', () => {
  it('mergeObjects() should work correctly', () => {
    type TestCaseType = {
      firstArg: Record<string, any>,
      secondArg: Record<string, any> | Record<string, any>[],
      expected: Record<string, any>
    };

    const TEST_CASES: TestCaseType[] = [
      {
        firstArg: { a: 'a1', b: 'b1', c: 'c1' },
        secondArg: [],
        expected: { a: 'a1', b: 'b1', c: 'c1' }
      },
      {
        firstArg: { a: 'a1', b: 'b1', c: 'c1' },
        secondArg: [{}],
        expected: { a: 'a1', b: 'b1', c: 'c1' }
      },
      {
        firstArg: { a: 'a1', b: 'b1', c: 'c1' },
        secondArg: {},
        expected: { a: 'a1', b: 'b1', c: 'c1' }
      },
      {
        firstArg: { a: 'a1', b: 'b1', c: 'c1' },
        secondArg: { b: 'b2', d: 'd2' },
        expected: { a: 'a1', b: 'b2', c: 'c1' , d: 'd2' }
      },
      {
        firstArg: { a: 'a1', b: 'b1', c: 'c1' },
        secondArg: [{ b: 'b2', d: 'd2' }],
        expected: { a: 'a1', b: 'b2', c: 'c1' , d: 'd2' }
      },
      {
        firstArg: { a: 'a1', b: 'b1', c: 'c1', d: 'd1', e: 'e1' },
        secondArg: [{ b: 'b2', d: 'd2', e: 'e2', f: 'f2' }, { b: 'b3', d: 'd3', g: 'g3' }, { h: 'h4' }],
        expected: { a: 'a1', b: 'b2', c: 'c1' , d: 'd2', e: 'e2', f: 'f2', g: 'g3', h: 'h4' }
      }
    ];

    TEST_CASES.forEach(({ firstArg, secondArg, expected }) => {
      expect(
        mergeObjects(firstArg, secondArg)
      ).toEqual(expected);
    });
  })
});
