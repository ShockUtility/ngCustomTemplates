import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as _ from 'lodash';

import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State as GridState } from '@progress/kendo-data-query';

import { <%= classify(name) %>ListActions } from '../actions';
import * as from<%= classify(name) %> from '../reducers';

// services
import { DynamicDialogService } from 'src/app/shared/modules/dynamic-dialog/dynamic-dialog.service';

// models
import { <%= classify(name) %>, <%= classify(name) %>Search } from '../models';

// components
import { <%= classify(name) %>FormPopupComponent } from '../components/form-popup.component';

@Component({
  selector: 'app-<%= dasherize(name) %>-list',
  templateUrl: './<%= dasherize(name) %>-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DynamicDialogService],
})
export class <%= classify(name) %>ListComponent implements OnInit, OnDestroy {
  gridDataList$: Observable<<%= classify(name) %>[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  searchCondtion$: Observable<<%= classify(name) %>Search>;
  error$: Observable<string>;
  gridState$: Observable<GridState>;
  selectedRowIds$: Observable<string[]>;
  selectedRowEntities$: Observable<<%= classify(name) %>[]>;

  private unsubscribe$ = new Subject<void>();

  private _pageSize: number;

  constructor(private store: Store<from<%= classify(name) %>.State>, private dialog: DynamicDialogService) {
    this.loading$ = store.pipe(select(from<%= classify(name) %>.selectListLoading));
    this.loaded$ = store.pipe(select(from<%= classify(name) %>.selectListLoaded));
    this.searchCondtion$ = store.pipe(select(from<%= classify(name) %>.selectListSearchCondition));
    this.gridDataList$ = store.pipe(select(from<%= classify(name) %>.selectListAll));
    this.gridState$ = store.pipe(select(from<%= classify(name) %>.selectListGridState));
    this.selectedRowIds$ = store.pipe(select(from<%= classify(name) %>.selectListSelectedRowIds));
    this.selectedRowEntities$ = store.pipe(select(from<%= classify(name) %>.selectListSelectedEntities));

    this._initSubscription();
  }

  ngOnInit() {
    // 리스트 API 호출
    const condition = {};
    this.store.dispatch(<%= classify(name) %>ListActions.loadGridData({ condition }));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  //#region getters
  get currentPageSize(): number {
    return this._pageSize || null;
  }
  //#endregion

  //#region Event Handler
  /**
   * 그리드에서 필터, 정렬, 페이징시
   */
  girdStateChangeHandler(gridState: DataStateChangeEvent) {
    this.store.dispatch(<%= classify(name) %>ListActions.changeGridState({ gridState }));
    // 체크박스 초기화
    this.store.dispatch(<%= classify(name) %>ListActions.clearSelectGridRow());
  }
  /**
   * page size 변경시
   */
  changePageSizeHandler(pageSize: number) {
    this.store.dispatch(<%= classify(name) %>ListActions.changeGridPageSize({ pageSize }));
  }

  /**
   * 그리드에서 checkbox 변경시
   */
  checkRowHandler({ rowid, isChecked }: { rowid: string; isChecked: boolean }) {
    if (isChecked) {
      this.store.dispatch(<%= classify(name) %>ListActions.addSelectGridRow({ rowid }));
    } else {
      this.store.dispatch(<%= classify(name) %>ListActions.delSelectGridRow({ rowid }));
    }
  }
  checkAllHandler({ isChecked, rowids }: { isChecked: boolean; rowids?: string[] }) {
    if (isChecked) {
      this.store.dispatch(<%= classify(name) %>ListActions.addAllSelectGridRow({ rowids }));
    } else {
      this.store.dispatch(<%= classify(name) %>ListActions.clearSelectGridRow());
    }
  }

  /**
   * 추가버튼 클릭시
   */
  clickAddHandler() {
    const ref = this.dialog.open(<%= classify(name) %>FormPopupComponent, {
      header: '호텔 체인 브랜드 정보',
      width: '70%',
    });

    ref.onClose.pipe(takeUntil(this.unsubscribe$)).subscribe((car: any) => {
      if (car) {
        console.log('11111', car);
      }
    });
  }

  /**
   * 삭제버튼 클릭시
   */
  clickDelHandler(rowids: string[]) {
    this.store.dispatch(<%= classify(name) %>ListActions.removeSelectedGridEntities({ rowids }));
  }

  /**
   * 검색버튼 클릭시
   */
  clickSearchHandler(searchFormValue: <%= classify(name) %>Search) {
    const condition = {};
    condition[searchFormValue.searchType] = searchFormValue.searchTerm || '';
    this.store.dispatch(<%= classify(name) %>ListActions.loadGridData({ condition }));
    this.store.dispatch(<%= classify(name) %>ListActions.changeSearchCondition({ searchCondition: _.cloneDepp(searchFormValue) }));
  }
  //#endregion

  /**
   * 구독이벤트 초기화
   */
  private _initSubscription() {
    // grid state 변경을 추적
    this.gridState$.pipe(pluck('take'), takeUntil(this.unsubscribe$)).subscribe((pageSize: number) => (this._pageSize = pageSize));

    // list 변경을 추적
    this.gridDataList$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      // grid state 초기화(page size는 현재 적용된 값을 셋팅)
      this.store.dispatch(
        <%= classify(name) %>ListActions.changeGridState({
          gridState: {
            skip: 0,
            take: this._pageSize,
            filter: {
              logic: 'and',
              filters: [],
            },
          },
        }),
      );
      // 체크박스 초기화
      this.store.dispatch(<%= classify(name) %>ListActions.clearSelectGridRow());
    });
  }
}
