import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

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
  NbTabsetModule,
  NbTreeGridModule,
  NbBadgeModule,
  NbRadioModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';
import { PageRoutingModule } from './page-routing.module';
import { CreateBoardComponent } from './project/create-board.component';
import { ListBoardsComponent } from './project/list-boards.component';
import { LoginComponent } from './login/login.component';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { NewCardComponent } from './board/new-card.component';
import { UpdateCardComponent } from './board/update-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { UpdateBoardComponent } from './project/update-board.component';

@NgModule({
  declarations: [
    AppComponent,

    // General Components
    HeaderComponent,
    BottomComponent,

    // Card Components
    BoardComponent,
    NewCardComponent,
    UpdateCardComponent,

    // User Components
    LoginComponent,
    SignupComponent,

    // Board Components
    ListBoardsComponent,
    CreateBoardComponent,
    UpdateBoardComponent,

    // Pipes
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PageRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,

    // nebular modules
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonGroupModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbDialogModule.forRoot({}),
    NbIconModule,
    NbUserModule,
    NbTabsetModule,
    NbTreeGridModule,
    NbBadgeModule,
    NbRadioModule,
    NbSpinnerModule,
    NbTooltipModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
