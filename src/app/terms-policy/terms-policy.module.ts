import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TermsPolicyComponent } from './terms-policy.component';

const routes: Routes = [
  {
    path: '',
    component: TermsPolicyComponent,
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
  exports: [TermsPolicyComponent],
  declarations: [TermsPolicyComponent]
})
export class TermsPolicyModule { }
