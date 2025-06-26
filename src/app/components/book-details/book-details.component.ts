import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { IBook } from '../models/book.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book?: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundBook = this.bookService.getById(id);

    if (foundBook) {
      this.book = foundBook;
    } else {
      this.router.navigate(['/not-found']);
      }
  }

  goBack(): void {
    this.location.back();
  }
}
