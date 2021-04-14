import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateBoardComponent } from './project/create-board.component';
import { ListBoardsComponent } from './project/list-boards.component';
import { NewCardComponent } from './board/new-card.component';
import { UpdateCardComponent } from './board/update-card.component';
import { AuthGuard } from './guards/auth.guard';
import { UpdateBoardComponent } from './project/update-board.component';

const routes: Routes = [
  {
    path: 'board/:id',
    component: BoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/signup',
    component: SignupComponent,
  },
  {
    path: 'boards/create',
    component: CreateBoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cards/:board_id/create',
    component: NewCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cards/:board_id/:card_id/update',
    component: UpdateCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boards/list',
    component: ListBoardsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boards/update/:board_id',
    component: UpdateBoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boards/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
