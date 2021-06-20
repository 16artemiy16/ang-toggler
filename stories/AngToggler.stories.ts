import { AngTogglerComponent, AngTogglerModule } from 'ang-toggler';
import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'AngToggler',
  component: AngTogglerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AngTogglerModule.forRoot()],
    }),
  ],
} as Meta;

export const TypeOne = () => ({
  props: {
    styling: {
      colorSlider: 'green',
      border: '1px dotted black',
      colorBackground: 'yellow',
    },
  },
  template: `
    <ang-toggler></ang-toggler>
  `
});
