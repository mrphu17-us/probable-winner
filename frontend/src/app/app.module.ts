import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, 
  NbSidebarModule, NbButtonGroupModule, NbCardModule, NbListModule, NbButtonModule, NbInputModule,
  NbDialogModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';
import { PageRoutingModule } from './page-routing.module';
import { ProjectComponent } from './project/project.component';
import { NewCardComponent } from './board/new-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    BottomComponent,
    ProjectComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonGroupModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbInputModule,
    PageRoutingModule,
    NbDialogModule.forRoot({}),
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
