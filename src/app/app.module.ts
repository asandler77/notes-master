import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HomeComponent } from './home/home.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { ImportantComponent } from './important/important.component';

const appRoutes: Routes = [
  { path: 'notes', component: NoteListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'note/:id', component: NoteEditComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'important', component: ImportantComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    HomeComponent,
    NoteEditComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,

    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
