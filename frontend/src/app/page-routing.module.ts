import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewCardComponent } from './board/new-card.component';
import { UpdateCardComponent } from './board/update-card.component';
import { AuthGuard } from './guards/auth.guard';
import { UpdateProjectComponent } from './project/update-project.component';

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
    path: 'projects/create',
    component: ProjectComponent,
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
    path: 'projects/list',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/update/:board_id',
    component: UpdateProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
