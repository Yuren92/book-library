import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookListComponent, BookDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
    exports: [BookListComponent]
})
export class BookListModule { }
