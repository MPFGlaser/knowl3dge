import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ArticleListComponent },
      { path: 'articles/:articleId', component: ArticleDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    ArticleListComponent,
    TopBarComponent,
    ArticleDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
