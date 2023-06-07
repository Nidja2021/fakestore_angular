import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';

const MaterialDesignModules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule
]

@NgModule({
  imports: [
    MaterialDesignModules
  ],
  exports: [MaterialDesignModules]
})
export class MaterialModule { }
