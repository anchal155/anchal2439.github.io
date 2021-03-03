import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AngularMaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, AngularMaterialModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
