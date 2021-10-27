import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleChipFilterComponent } from './article-chip-filter/article-chip-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ArticleListComponent,
    TopBarComponent,
    ArticleDetailsComponent,
    ArticleEditorComponent,
    PageNotFoundComponent,
    ArticleChipFilterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
