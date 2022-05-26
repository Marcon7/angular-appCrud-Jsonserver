import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { Product2 } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: Product2 = {
    name: '',
    price: undefined
  }

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    
  }
  createProduct(): void {
    console.log(this.product)
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
