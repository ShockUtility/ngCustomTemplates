import { createAction, props } from "@ngrx/store";

//#region 리스트
export const loadGridDataSunccess = createAction(
  "[<%= classify(name) %>/API] load grid data list success",
  props<{ gridDataList: any[] }>()
);
export const loadGridDataFailure = createAction(
  "[<%= classify(name) %>/API] load grid data list failure",
  props<{ error: any }>()
);
//#endregion
