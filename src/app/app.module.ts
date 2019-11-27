import { TodoProService } from './todo-pro.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserProService } from './user-pro.service';
import { PostsProService } from './posts-pro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    PostDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/index', pathMatch: 'full'},
      {path: 'index', component: HomeComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'post_details/:id', component: PostDetailsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'user_details/:id', component: UserDetailsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
      {path: '**', redirectTo: '/index', pathMatch: 'full'}
    ])
  ],
  providers: [
    PostsProService,
    UserProService,
    AuthService,
    AuthGuardService,
    TodoProService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
