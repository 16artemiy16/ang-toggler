import { SwitchStyleResolver } from './SwitchStyleResolver.class';

describe('SwitchStyleResolver', () => {
  describe('formBackgroundStyle() should map correctly', () => {
    type TestCaseType = {
      expected: any,
      title: string,
      args: [
        {
          colorBackground?: string,
          colorBackgroundActive?: string,
          colorBackgroundInactive?: string
        },
        boolean
      ]
    };

    const CASES: TestCaseType[] = [
      {
        title: 'when only colorBackground set, active',
        args: [{ colorBackground: 'red' }, true],
        expected: { background: 'red' }
      },
      {
        title: 'when only colorBackground set, inactive',
        args: [{ colorBackground: 'red' }, false],
        expected: { background: 'red' }
      },
      {
        title: 'when all set, active',
        args: [{ colorBackground: 'red', colorBackgroundActive: 'green', colorBackgroundInactive: 'blue' }, true],
        expected: { background: 'green' }
      },
      {
        title: 'when all set, inactive',
        args: [{ colorBackground: 'red', colorBackgroundActive: 'green', colorBackgroundInactive: 'blue' }, false],
        expected: { background: 'blue' }
      },
      {
        title: 'when only colorBackgroundActive set, active',
        args: [{ colorBackgroundActive: 'green'}, true],
        expected: { background: 'green' }
      },
      {
        title: 'when only colorBackgroundActive set, inactive',
        args: [{ colorBackgroundActive: 'green'}, false],
        expected: { background: '' }
      },
      {
        title: 'when only colorBackgroundInactive set, active',
        args: [{ colorBackgroundInactive: 'blue' }, true],
        expected: { background: '' }
      },
      {
        title: 'when only colorBackgroundInactive set, inactive',
        args: [{ colorBackgroundInactive: 'blue'}, false],
        expected: { background: 'blue' }
      }
    ];
    CASES.forEach(({ title, args, expected }) => {
      it(title, () => {
        expect(SwitchStyleResolver.formBackgroundStyle(...args)).toEqual(expected);
      });
    });

  });
});
