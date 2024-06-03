import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOut: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOut.emit(this.product);
  }
}
