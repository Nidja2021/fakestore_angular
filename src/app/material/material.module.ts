import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MaterialDesignModules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    MaterialDesignModules
  ],
  exports: [MaterialDesignModules]
})
export class MaterialModule { }
