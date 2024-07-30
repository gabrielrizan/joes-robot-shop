import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter<IProduct>();

  getImageUrl(product: IProduct): string {
    if (!product) {
      return '';
    }
    return `assets/images/robot-parts/${product.imageName}`;
  }

  getDiscountedClasses(product: IProduct) {
    return {
      striketrough: product.discount > 0,
    };
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit(product);
  }
}
