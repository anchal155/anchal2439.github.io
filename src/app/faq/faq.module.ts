import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
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
    ModuleRouting,
    SharedModule
  ],
  exports: [FaqComponent],
  declarations: [FaqComponent]
})
export class FaqModule { }
