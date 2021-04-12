import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonGroupModule,
  NbCardModule,
  NbListModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbDialogModule,
  NbIconModule,
  NbUserModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';
import { PageRoutingModule } from './page-routing.module';

import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { NewCardComponent } from './board/new-card.component';
import { UpdateCardComponent } from './board/update-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    BottomComponent,
    LoginComponent,
    SignupComponent,
    ProjectComponent,
    NewCardComponent,
    UpdateCardComponent,
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
    PageRoutingModule,
    NbInputModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbDialogModule.forRoot({}),
    NbIconModule,
    NbUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
