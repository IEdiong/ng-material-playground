import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { DemoComponent } from './demo.component';
import { UserComponent } from './user/user.component';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'assessment', component: AssessmentComponent },
      { path: '', component: UserComponent },
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class DemoModule {}
