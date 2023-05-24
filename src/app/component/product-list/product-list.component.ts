import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ServiceComponent } from 'src/app/service/service.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product: Iproduct[] = []
  constructor(private serviceProduct: ServiceComponent){
    this.serviceProduct.getProduct().subscribe(data=>{
      this.product = data
    }, error => console.log(error))
  }
  removeitem(id:number){
    this.serviceProduct.removeProduct(id).subscribe(()=>{
      this.product = this.product.filter(item=> item.id !=id)
    })
  }

}
