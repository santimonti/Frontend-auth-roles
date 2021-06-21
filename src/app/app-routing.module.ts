import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'questions',
    component: QuizComponent,
    canActivate: [AuthGuard],
  },
  { path: 'create', component: QuestionsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
