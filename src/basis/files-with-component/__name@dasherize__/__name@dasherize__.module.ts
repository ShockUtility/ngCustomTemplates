import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// package modules
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { KendoCommonModule } from 'src/app/shared/kendo-common/kendo-common.module';

// custom modules
import { PipesModule } from 'src/app/shared/pipes';
import { DynamicDialogModule } from 'src/app/shared/modules/dynamic-dialog/dynamic-dialog.module';
import { DropdownModule } from 'src/app/shared/modules/dropdown/dropdown.module';
import { CheckboxModule } from 'src/app/shared/modules/checkbox/checkbox.module';

// directives
import { DirectivesModule } from 'src/app/shared/directives';

// exclusives
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
// containers
import { <%= classify(name) %>ListComponent } from './containers';
// components
import {
  <%= classify(name) %>ListGridComponent,
  <%= classify(name) %>ListGridControlComponent,
  <%= classify(name) %>FormPopupComponent,
  <%= classify(name) %>SearchAreaComponent,
} from './components';

import * as from<%= classify(name) %> from './reducers';
import { <%= classify(name) %>Effects } from './effects';

export const CONTAINERS = [<%= classify(name) %>ListComponent];
export const COMPONENTS = [
  <%= classify(name) %>ListGridComponent,
  <%= classify(name) %>ListGridControlComponent,
  <%= classify(name) %>FormPopupComponent,
  <%= classify(name) %>SearchAreaComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    InputsModule,
    KendoCommonModule,
    PipesModule,
    DynamicDialogModule,
    DropdownModule,
    CheckboxModule,
    DirectivesModule,
    <%= classify(name) %>RoutingModule,
    StoreModule.forFeature(from<%= classify(name) %>.featureKey, from<%= classify(name) %>.reducers),
    EffectsModule.forFeature([<%= classify(name) %>Effects]),
  ],
  declarations: [COMPONENTS, CONTAINERS],
  entryComponents: [<%= classify(name) %>FormPopupComponent],
})
export class <%= classify(name) %>Module {}
