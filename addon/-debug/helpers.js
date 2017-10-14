import { warn as emberWarn } from '@ember/debug';
import { deprecate as emberDeprecate } from '@ember/application/deprecations';
import Ember from 'ember';

const {
  Logger
} = Ember;

export function debug() {
  Logger.debug(...arguments);
}

export function debugOnError(msg, conditional) {
  if (!conditional) {
    console.error(msg); // eslint-disable-line no-console
    debugger; // eslint-disable-line no-debugger
  }
}

export function assert(msg, conditional) {
  if (!conditional) {
    throw new Error(msg);
  }
}

export function warn() {
  emberWarn(...arguments);
}

export function deprecate() {
  emberDeprecate(...arguments);
}

export function stripInProduction(cb) {
  cb();
}
