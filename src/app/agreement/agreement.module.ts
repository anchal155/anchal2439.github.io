import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement.component';

const routes: Routes = [
  {
    path: '',
    component: AgreementComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class ModuleRouting { }

@NgModule({
  imports: [
    CommonModule,
    ModuleRouting
  ],
  exports: [AgreementComponent],
  declarations: [AgreementComponent]
})
export class AgreementModule { }
