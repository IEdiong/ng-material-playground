import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonsComponent } from './buttons/buttons.component';

import { MaterialModule } from '../shared/material.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { DemoComponent } from './demo.component';
import { UserComponent } from './user/user.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'assessment', component: AssessmentComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'apex-chart', component: ChartsComponent },
      { path: '', component: ReactiveFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent,
    DemoComponent,
    UserComponent,
    AssessmentComponent,
    ChartsComponent,
    ReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  exports: [RouterModule],
})
export class DemoModule {}
