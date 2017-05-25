import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule,
  MdToolbarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule, MdMenuModule,
    NoopAnimationsModule
  ],
  exports: [
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class MaterialModule {
}
