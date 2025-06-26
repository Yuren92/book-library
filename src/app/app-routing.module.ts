import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/new', component: BookFormComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
