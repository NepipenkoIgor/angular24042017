import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule,
  MdToolbarModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule, MdMenuModule
  ],
  exports: [
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule
  ],
  declarations: []
})
export class MaterialModule {
}
