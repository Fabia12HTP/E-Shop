import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ShoesService } from '../home/home-sevice.service';
import { Shoes } from './../interfaces/shoes-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  shoes: Shoes[] = [];

  constructor(private shoesService: ShoesService) { }

  ngOnInit(): void {
    this.fetchShoes();
  }

  fetchShoes(): void {
    this.shoesService.getShoes().subscribe(
      (shoes: Shoes[]) => {
        this.shoes = shoes;
      },
      (error) => {
        console.error('Error fetching shoes:', error);
      }
    );
  }
}
