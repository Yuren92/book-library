import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  filteredBooks: IBook[] = [];
  searchText = '';
  selectedBook?: IBook;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookService.getAll();
    this.filteredBooks = this.books;
  }

  onSearch(): void {
    const text = this.searchText.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(text) || book.author.toLowerCase().includes(text)
    );
  }

  deleteBook(id: number): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este libro?');
    if (confirmDelete) {
      this.bookService.delete(id);
      this.loadBooks();
    }
  }
}
