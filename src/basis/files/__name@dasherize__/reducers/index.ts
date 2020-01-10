import { createSelector, createFeatureSelector, combineReducers, Action } from '@ngrx/store';

import * as fromList from './<%= dasherize(name) %>-list.reducer';
import * as fromRoot from 'src/app/reducers';

import { <%= classify(name) %> } from '../models';

export const featureKey = '<%= camelize(name) %>';

export interface <%= classify(name) %>State {
  [fromList.listFeatureKey]: fromList.State;
}

export interface State extends fromRoot.State {
  [featureKey]: <%= classify(name) %>State;
}

export function reducers(state: <%= classify(name) %>State | undefined, action: Action) {
  return combineReducers({
    [fromList.listFeatureKey]: fromList.reducer,
  })(state, action);
}

// ------------------------------- selectors ------------------------------------------------------
export const select<%= classify(name) %>State = createFeatureSelector<State, <%= classify(name) %>State>(featureKey);

//#region 리스트 페이지
export const select<%= classify(name) %>ListState = createSelector(
  select<%= classify(name) %>State,
  (state: <%= classify(name) %>State) => state[fromList.listFeatureKey],
);
export const selectListLoaded = createSelector(select<%= classify(name) %>ListState, fromList.getLoaded);
export const selectListLoading = createSelector(select<%= classify(name) %>ListState, fromList.getLoading);
export const selectListSearchCondition = createSelector(select<%= classify(name) %>ListState, fromList.getSearchCondition);
export const selectListGridState = createSelector(select<%= classify(name) %>ListState, fromList.getGridState);
export const selectListSelectedRowIds = createSelector(select<%= classify(name) %>ListState, fromList.getSelectedIds);

// entity 관련
export const selectListEntities = fromList.adapter.getSelectors(select<%= classify(name) %>ListState).selectEntities;
export const selectListAll = fromList.adapter.getSelectors(select<%= classify(name) %>ListState).selectAll;

export const selectListSelectedEntities = createSelector(selectListEntities, selectListSelectedRowIds, (entities, ids) => {
  return ids.map(id => entities[id]).filter((item): item is <%= classify(name) %> => item != null);
});
//#endregion
