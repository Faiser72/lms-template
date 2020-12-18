import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TemplateModule } from "src/app/modules/template/template.module";
import { MaterialImportModuleModule } from "src/app/shared/material-import-module/material-import-module.module";

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialImportModuleModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    TemplateModule
  ],
})
export class DefaultModule { }
