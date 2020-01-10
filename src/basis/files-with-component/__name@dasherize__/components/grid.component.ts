import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State as GridState, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-<%= dasherize(name) %>-list-grid',
  templateUrl: './grid.component.html',
  // styleUrls: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>ListGridComponent implements OnInit {
  @Input() loading: boolean;
  @Input() loaded: boolean;
  @Output() girdStateChangeEvent: EventEmitter<any> = new EventEmitter();
  @Output() checkRowEvent: EventEmitter<any> = new EventEmitter();
  @Output() checkAllEvent: EventEmitter<any> = new EventEmitter();

  private _gridDataList: any[];
  @Input()
  get gridDataList(): any[] {
    return this._gridDataList;
  }
  set gridDataList(val: any[]) {
    this._gridDataList = val.map(item => _.assign({}, item.volumnInfo, { hotelChainCode: +item.volumnInfo.hotelChainCode }));
    this._loadCurrentView();
  }

  private _gridState: GridState;
  @Input()
  get gridState(): GridState {
    return this._gridState;
  }
  set gridState(val: GridState) {
    this._gridState = val;
    this._loadCurrentView();
  }

  private _checkedRows: string[];
  @Input()
  get checkedRows(): string[] {
    return this._checkedRows;
  }
  set checkedRows(val: string[]) {
    this._checkedRows = val.length > 0 ? val : null;
  }

  columns: any[];
  listData: GridDataResult;

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit() {
    // 컬럼 정의 - 필수 스탭
    this.columns = this.columns = [
      //-----------------------------
      { field: 'hotelChainCode', title: '호텔체인코드', sortable: true, filterable: true },         ◀︎◀︎◀︎ JSON 스키마 보고 디스플레이 필드 위주로 작성 (호텔체인브랜드 샘플코드임) - *html 도 확인하자*
      { field: 'chainBrandCode', title: '호텔체인브랜드코드', sortable: true, filterable: true },
      { field: 'chainBrandNameEn', title: '브랜드이름(En)', sortable: true, filterable: true },
      { field: 'chainBrandNameKo', title: '브랜드이름(Ko)', sortable: true, filterable: true },
      { field: 'homepageUrl', title: '홈페이지주소', filterable: true },
      //-----------------------------

      { field: 'lastUpdateName', title: '최종입력자' },
      { field: 'lastUpdateDatetime', title: '최종입력시간' },
      { field: 'firstInsertName', title: '최초입력자' },
      { field: 'firstInsertDatetime', title: '최초입력시간' },
    ];
  }

  get currentPageSize() {
    return this.gridState.take;
  }

  get currentPageIndex() {
    return this.gridState.skip;
  }

  get isAllChecked() {
    return this.checkedRows && this.checkedRows.length === this.currentPageSize;
  }

  onDataStateChange(state: DataStateChangeEvent): void {
    this.girdStateChangeEvent.emit(state);
  }

  onCheckAll(isChecked: boolean) {
    if (!isChecked) {
      this.checkAllEvent.emit({ isChecked });
      return;
    }

    if (this.gridDataList.length < 1) {
      return;
    }
    const currentView = this.gridDataList.slice(this.currentPageIndex, this.currentPageIndex + this.currentPageSize);
    const rowids = currentView.map(v => v && v.rowid);
    this.checkAllEvent.emit({ isChecked, rowids });
  }

  onCheckRow(isChecked: boolean, item: any) {
    this.checkRowEvent.emit({
      rowid: item.rowid,
      isChecked,
    });
  }

  private _loadCurrentView(): void {
    if (this.gridDataList && this.gridState) {
      this.listData = process(this.gridDataList, this.gridState);
    }
  }
}
