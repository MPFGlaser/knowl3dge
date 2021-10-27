import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'articles/edit/:articleId', component: ArticleEditorComponent },
  {
    path: 'articles/edit',
    pathMatch: 'full',
    component: ArticleEditorComponent,
  },
  { path: 'articles/:articleId', component: ArticleDetailsComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
