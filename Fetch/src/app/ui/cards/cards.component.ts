import { Component, Input } from '@angular/core';
import { product } from '../../interface/products';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input()
  myItem!: product;
}
