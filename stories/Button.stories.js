import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//import MyButton from './MyButton';
import { BButton } from '../src/components/button'

export default {
  title: 'Button',
  component: BButton,
};
// Button action 
export const Text = () => ({
  components: { BButton },
  template: '<b-button @click="action">Hello Button</b-button>',
  methods: { action: action('clicked') },
});

// button primary
export const Primary = () => ({
  components: { BButton },
  template: '<b-button type="is-primary" @click="action">Primary button</b-button>',
  methods: { action: action('clicked') },
});
// button is-success
export const Success = () => ({
    components: { BButton },
    template: '<b-button type="is-success" @click="action">Success button</b-button>',
    methods: { action: action('clicked') },
  });