import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyComponent,
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
  exports: [PrivacyComponent],
  declarations: [PrivacyComponent]
})
export class PrivacyModule { }
