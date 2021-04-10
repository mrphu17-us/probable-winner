import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board.component';
import {MatFormFieldModule} from '@angular/material/form-field';

const ROUTE: Routes = [
  {path: "board", component: BoardComponent},
  {path: "", component: AppComponent}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule, 
    MatFormFieldModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
