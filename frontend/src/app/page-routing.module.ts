import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectComponent } from './project/project.component';



const routes: Routes = [{
  path: 'board',
  component: BoardComponent
},
{
  path: 'auth/signin',
  component: SigninComponent
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
