import * as <%= classify(name) %>ListActions from './<%= dasherize(name) %>-list.actions';
import * as <%= classify(name) %>ApiActions from './<%= dasherize(name) %>-api.actions';

export { <%= classify(name) %>ApiActions, <%= classify(name) %>ListActions };
