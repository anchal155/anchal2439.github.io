import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { WriteUsComponent } from "./write-us.component";

const routes: Routes = [
  {
    path: "",
    component: WriteUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ModuleRouting {}

@NgModule({
  imports: [CommonModule, ModuleRouting],
  exports: [WriteUsComponent],
  declarations: [WriteUsComponent]
})
export class WriteUsModule {}
