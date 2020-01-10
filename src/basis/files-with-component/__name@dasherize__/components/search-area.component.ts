import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

// models
import { <%= classify(name) %>Search } from '../models';

@Component({
  selector: 'app-<%= dasherize(name) %>-search-area',
  templateUrl: './search-area.component.html',
  // styleUrls: ['./search-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>SearchAreaComponent implements OnInit {
  @Input() searchCondtion: <%= classify(name) %>Search;
  @Output() clickSearchEvent: EventEmitter<any> = new EventEmitter();

  searchTypeOptions = [
    { label: '호텔브랜드코드', value: 'hotelBrandCodeTerm' },   ◀︎◀︎◀︎ 검색조건 항목의 app-dropdown 아이템 라벨 설정 (호텔체인브랜드 샘플코드임)
    { label: '호텔브랜드이름', value: 'hotelBrandNameTerm' },
  ];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchType: [''],
      searchTerm: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.clickSearchEvent.emit(this.searchForm.value);
  }
}
