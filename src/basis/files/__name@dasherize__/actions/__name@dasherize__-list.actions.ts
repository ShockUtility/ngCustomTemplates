import { createAction, props } from '@ngrx/store';
import { State as GridState } from '@progress/kendo-data-query';

// models
import { <%= classify(name) %>Search } from '../models';

//#region 리스트
export const loadGridData = createAction('[<%= classify(name) %>/List] load grid data list', props<{ condition: any }>());
export const changeSearchCondition = createAction(
  '[<%= classify(name) %>/List] change search condition',
  props<{ searchCondition: <%= classify(name) %>Search }>(),
);
export const changeGridPageSize = createAction('[<%= classify(name) %>/List] change grid page size', props<{ pageSize: number }>());
export const changeGridState = createAction('[<%= classify(name) %>/List] change grid state', props<{ gridState: GridState }>());
export const addSelectGridRow = createAction('[<%= classify(name) %>/List] add selected grid row', props<{ rowid: string }>());
export const delSelectGridRow = createAction('[<%= classify(name) %>/List] delete selected grid row', props<{ rowid: string }>());
export const clearSelectGridRow = createAction('[<%= classify(name) %>/List] clear selected grid row');
export const addAllSelectGridRow = createAction('[<%= classify(name) %>/List] all all grid row to selected', props<{ rowids: string[] }>());
export const removeSelectedGridEntities = createAction(
  '[<%= classify(name) %>/List] remove selected grid entities',
  props<{ rowids: string[] }>(),
);
//#endregion
