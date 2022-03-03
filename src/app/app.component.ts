import { Component } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  products = [
    {code:'123',name:'lakshmi'},
    {code:'456',name:'Priya'},
    {code:'789',name:'Petchi'},
    {code:'345',name:'Muthu'}

  ]; 
  

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService
    //   .getProductsSmall()
    //   .then((data) => ((this.products = data), console.log(data)));
  }
}
