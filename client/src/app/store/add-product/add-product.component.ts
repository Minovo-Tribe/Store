import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @ViewChild('textArea') textArea: ElementRef;
  data;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct() {
    const product = JSON.parse(this.textArea.nativeElement.value);
    this.productService.addProduct(product);
  }
}
