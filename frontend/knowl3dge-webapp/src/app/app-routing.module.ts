import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'articles',
    component: ArticleListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'articles/edit/:articleId',
    component: ArticleEditorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'articles/edit',
    pathMatch: 'full',
    component: ArticleEditorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'articles/:articleId',
    component: ArticleDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:userId',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
