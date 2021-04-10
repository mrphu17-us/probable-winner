import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, 
  NbButtonGroupModule, NbCardModule, NbListModule,
  NbUserModule, 
  NbMenuModule,
  NbMenuItem} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    BottomComponent
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
    NbThemeModule.forRoot({ name: 'dark' }),
    PageRoutingModule,
    NbUserModule,
    NbMenuModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
