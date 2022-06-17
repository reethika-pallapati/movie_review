import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    // { path: 'home', component: AppComponent },
    // { path: 'list', component: MoviesComponent },
    // { path: 'signin', component: LoginComponent },
    // { path: 'signup', component: RegisterComponent },
    // { path: 'review', component: ReviewComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// @NgModule({
//   declarations: [ 
//     AppComponent, MoviesComponent, LoginComponent, RegisterComponent, ReviewComponent
//   ],
//   imports: [
//     RouterModule.forRoot([
//       { path: 'home', component: AppComponent },
//       { path: 'list', component: MoviesComponent },
//       { path: 'signin', component: LoginComponent },
//       { path: 'signup', component: RegisterComponent },
//       { path: 'review', component: ReviewComponent },
//       { path: '**', redirectTo: 'home' }
//     ])
//   ],
//   exports: [
//     RouterModule,
//   ],
//   providers: [],

// })
// export class AppRoutingModule {}


