import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StockClient';
  productForm = new FormGroup ({
    iva: new FormControl(''),
    pvp:new FormControl(''),
    discount: new FormControl('')
  })
productValue='';
//constructor(
//  private http: HttpClient
//){};
setProductValue(){
  this.productValue= JSON.stringify(this.productForm.value);
}
//creatProduct(){
//  this.http.post
//}
  }

