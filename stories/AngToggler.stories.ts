import { AngTogglerComponent, AngTogglerModule } from 'ang-toggler';
import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, Story } from '@storybook/angular';

export default {
  title: 'AngToggler',
  component: AngTogglerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AngTogglerModule.forRoot()],
    }),
  ],
  argTypes: {
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      description: 'Is toggler disabled',
      defaultValue: false
    }
  }
} as Meta;

const Template: Story<AngTogglerComponent> = (args) => ({
  props: args,
  template: `
    <ang-toggler></ang-toggler>
  `
});

export const Common = Template.bind({});
Common.args = {
  styling: {
    colorSlider: 'green',
    border: '1px dotted black',
    colorBackground: 'yellow',
  }
};

export const DependingOnState = Template.bind({});
DependingOnState.args = {
  styling: {
    colorSliderInactive: 'grey',
    colorSliderActive: 'red',
    colorBackgroundInactive: 'green',
    colorBackgroundActive: 'aqua',
    borderInactive: '3px black dotted',
    borderActive: '3px pink solid'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
    styling: {
      border: '1px black solid'
    },
    disabled: true
};

export const Size = Template.bind({});
Size.args = {
  styling: { border: '1px black solid' },
  width: '60px',
  height: '45px'
};
