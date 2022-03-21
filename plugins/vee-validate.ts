// @ts-nocheck

import Vue from 'vue';

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  setInteractionMode,
} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
setInteractionMode('eager');

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule],
  });
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default ({ app }) => {
  configure({
    defaultMessage: (_field_, values) => app.i18n.t(`messages.${values._rule_}`, values),
  });
};
