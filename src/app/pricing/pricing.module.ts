import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
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
    ModuleRouting,SharedModule
  ],
  exports: [PricingComponent],
  declarations: [PricingComponent]
})
export class PricingModule { }
