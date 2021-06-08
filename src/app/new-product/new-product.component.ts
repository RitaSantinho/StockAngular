import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Output() newProduct= new EventEmitter();
  
  productForm = new FormGroup ({
    iva: new FormControl(''),
    pvp:new FormControl(''),
    discount: new FormControl('')
  })
  productValue='';
  constructor(
    private http : HttpClient
  ) {}
  setProductValue(product:any){
    this.productValue= JSON.stringify(product);
    this.newProduct.emit(product);
  }
  
  createProduct() {
    this.http.post("http://localhost:8080/stockMaven/api/products", this.productForm.value).subscribe(
      (product:any) => this.setProductValue(product)
    )
  }

  ngOnInit(): void {
  }

}
