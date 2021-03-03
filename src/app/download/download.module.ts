import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadComponent,
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
  exports: [DownloadComponent],
  declarations: [DownloadComponent]
})
export class DownloadModule { }
