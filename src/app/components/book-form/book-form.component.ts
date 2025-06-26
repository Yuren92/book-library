import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    genre: '',
    year: new Date().getFullYear()
  };

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  saveBook(): void {
    this.bookService.add(this.book);
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
