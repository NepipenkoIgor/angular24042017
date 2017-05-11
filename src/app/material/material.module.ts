import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdInputModule,
    NoopAnimationsModule
  ],
  exports: [MdToolbarModule, MdInputModule, NoopAnimationsModule],
  declarations: []
})
export class MaterialModule {
}
