import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewProjectComponent } from './components/create-new-project.component';
import { HomeComponent } from './components/home.component';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonGroupModule, NbCardModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';

const ROUTE: Routes = [
  { path: "new_project", component: CreateNewProjectComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateNewProjectComponent,
    HomeComponent,
    HeaderComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTE),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonGroupModule,
    NbCardModule,
    NbListModule,
    NbThemeModule.forRoot({ name: 'dark' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
