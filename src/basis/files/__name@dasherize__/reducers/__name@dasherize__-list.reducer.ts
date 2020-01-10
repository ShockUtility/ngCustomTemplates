import { on, createReducer } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as _ from 'lodash';
import { State as GridState } from '@progress/kendo-data-query';

import { <%= classify(name) %>, <%= classify(name) %>Search } from '../models';
import { <%= classify(name) %>ApiActions, <%= classify(name) %>ListActions } from '../actions';

export const listFeatureKey = '<%= camelize(name) %>List';

export interface State extends EntityState<<%= classify(name) %>> {
  loaded: boolean;
  loading: boolean;
  searchCondition: <%= classify(name) %>Search;
  gridState: GridState;
  selectedRowIds: string[];
}

export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>({
  selectId: (entityItem: <%= classify(name) %>) => entityItem.id,
  sortComparer: false,
});

const initPageSize = 20;

const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  searchCondition: {
    searchType: 'hotelBrandCodeTerm',             ◀︎◀︎◀︎ 검색 조건 초기값 셋팅 (호텔체인브랜드 샘플코드임)
    searchTerm: '',
  },
  gridState: {
    skip: 0,
    take: initPageSize,
    filter: {
      logic: 'and',
      filters: [],
    },
  },
  selectedRowIds: [],
});

export const reducer = createReducer(
  initialState,
  on(<%= classify(name) %>ListActions.loadGridData, state => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(<%= classify(name) %>ApiActions.loadGridDataSunccess, (state, { gridDataList }) =>
    adapter.addMany(gridDataList, {
      ...state,
      loading: false,
      loaded: true,
    }),
  ),
  on(<%= classify(name) %>ListActions.changeSearchCondition, (state, { searchCondition }) => ({
    ...state,
    searchCondition,
  })),
  on(<%= classify(name) %>ListActions.changeGridPageSize, (state, { pageSize }) => ({
    ...state,
    gridState: _.assign({}, state.gridState, { take: pageSize }),
  })),
  on(<%= classify(name) %>ListActions.changeGridState, (state, { gridState }) => ({
    ...state,
    gridState,
  })),
  on(<%= classify(name) %>ListActions.addSelectGridRow, (state, { rowid }) => {
    return {
      ...state,
      selectedRowIds: _.concat([rowid], state.selectedRowIds),
    };
  }),
  on(<%= classify(name) %>ListActions.delSelectGridRow, (state, { rowid }) => ({
    ...state,
    selectedRowIds: _.filter(state.selectedRowIds, v => v !== rowid),
  })),
  on(<%= classify(name) %>ListActions.clearSelectGridRow, state => ({
    ...state,
    selectedRowIds: [],
  })),
  on(<%= classify(name) %>ListActions.addAllSelectGridRow, (state, { rowids }) => ({
    ...state,
    selectedRowIds: _.cloneDeep(rowids),
  })),
  // 임시
  on(<%= classify(name) %>ListActions.removeSelectedGridEntities, (state, { rowids }) => adapter.removeMany(rowids, { ...state })),
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getSearchCondition = (state: State) => state.searchCondition;
export const getGridState = (state: State) => state.gridState;
export const getSelectedIds = (state: State) => state.selectedRowIds;
