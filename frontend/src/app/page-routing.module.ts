import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectComponent } from './project/project.component';



const routes: Routes = [{
  path: 'board/:id',
  component: BoardComponent
},
{
  path: 'auth/login',
  component: LoginComponent
},
{
  path: 'auth/signup',
  component: SignupComponent
},
{
  path: 'projects/create',
  component: ProjectComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
