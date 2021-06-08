import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StockClient';
  products:any[]=[];
  constructor(
    private http: HttpClient
  ){};

  getAllProducts(){
    this.http.get("http://localhost:8080/stockMaven/api/products").subscribe((res:any)=>this.products = res)
  }

  addToProducts(product:any){
    this.products.push(product)
  }


//creatProduct(){
//  this.http.post
//}
  }

