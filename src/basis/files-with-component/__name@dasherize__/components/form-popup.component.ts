import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

// dialog module apis
import { DynamicDialogRef, DynamicDialogConfig } from 'src/app/shared/modules/dynamic-dialog/dynamic-dialog-api/index';

@Component({
  selector: 'app-<%= dasherize(name) %>-form-popup',
  templateUrl: './form-popup.component.html',
  // styleUrls: ['./form-popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>FormPopupComponent implements OnInit {
  // @Input() currentPageSize: number;
  // @Input() checkedRows: string[];
  // @Output() clickAddEvent: EventEmitter<any> = new EventEmitter();
  // @Output() clickDelEvent: EventEmitter<any> = new EventEmitter();
  // @Output() changePageSizeEvent: EventEmitter<any> = new EventEmitter();

  // pageSizeOptions = [
  //   { label: '20', value: 20 },
  //   { label: '40', value: 40 },
  //   { label: '60', value: 60 },
  //   { label: '80', value: 80 },
  //   { label: '100', value: 100 },
  // ];

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig) {}

  ngOnInit() {}
}
