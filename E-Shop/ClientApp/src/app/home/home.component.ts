import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ShoesService } from '../home/home-sevice.service';
import { Shoes } from './../interfaces/shoes-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shoes: Shoes[] = [];
  private destroy$ = new Subject<void>();
  
  searchText = '';

  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getShoes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result => this.shoes = result),
        (error) => {
          console.error('Error fetching shoes:', error);
        }
      );
  }
}
