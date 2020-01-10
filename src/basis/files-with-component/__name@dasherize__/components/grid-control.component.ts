import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-<%= dasherize(name) %>-list-grid-control',
  templateUrl: './grid-control.component.html',
  // styleUrls: ['./grid-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>ListGridControlComponent implements OnInit {
  @Input() currentPageSize: number;
  @Input() checkedRows: string[];
  @Output() clickAddEvent: EventEmitter<any> = new EventEmitter();
  @Output() clickDelEvent: EventEmitter<any> = new EventEmitter();
  @Output() changePageSizeEvent: EventEmitter<any> = new EventEmitter();

  pageSizeOptions = [
    { label: '20', value: 20 },
    { label: '40', value: 40 },
    { label: '60', value: 60 },
    { label: '80', value: 80 },
    { label: '100', value: 100 },
  ];

  ngOnInit() {}

  onClickAdd() {
    this.clickAddEvent.emit();
  }

  onClickDel() {
    if (this.checkedRows && this.checkedRows.length > 0) {
      this.clickDelEvent.emit(this.checkedRows);
    } else {
      alert('선택된 항목이 없습니다.');
    }
  }

  onChangePageSize(selectedItem: any) {
    this.changePageSizeEvent.emit(selectedItem.value);
  }
}
