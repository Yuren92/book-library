import { Injectable } from '@angular/core';
import { IBook } from '../components/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private storageKey = 'books';

  constructor() {
    const existing = localStorage.getItem(this.storageKey);
    if (!existing) {
      const initialBooks: IBook[] = [
        { id: 1, title: '1984', author: 'George Orwell', year: 1949, genre: 'Distopía' },
        { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez', year: 1967, genre: 'Realismo mágico' },
        { id: 3, title: 'El Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasía' }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialBooks));
    }
  }

  private getBooksFromStorage(): IBook[] {
    const books = localStorage.getItem(this.storageKey);
    return books ? JSON.parse(books) : [];
  }

  private saveBooksToStorage(books: IBook[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  getAll(): IBook[] {
    return this.getBooksFromStorage();
  }

  getById(id: number): IBook | undefined {
    return this.getBooksFromStorage().find(book => book.id === id);
  }

  add(book: IBook) {
    const books = this.getBooksFromStorage();
    book.id = this.generateId(books);
    books.push(book);
    this.saveBooksToStorage(books);
  }

  update(updatedBook: IBook) {
    const books = this.getBooksFromStorage().map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );
    this.saveBooksToStorage(books);
  }

  delete(id: number) {
    const books = this.getBooksFromStorage().filter(book => book.id !== id);
    this.saveBooksToStorage(books);
  }

  private generateId(books: IBook[]): number {
    return books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  }
}
