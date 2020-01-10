import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { <%= classify(name) %>ListComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>ListComponent,
    data: { title: '<%= title %>' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class <%= classify(name) %>RoutingModule {}
