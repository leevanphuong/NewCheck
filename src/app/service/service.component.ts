import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Iproduct } from '../interface/product';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  constructor(private http: HttpClient){}

  getProduct(): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products`)
  }
  getOne(id:number): Observable<Iproduct>{
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  removeProduct(id:number): Observable<Iproduct>{
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  Uodateproduct(product: Iproduct): Observable<Iproduct>{
    return this.http.put<Iproduct>(`http://localhost:3000/products/${product.id}`, product)
  }
  addProduct(product: Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>(`http://localhost:3000/products`,product)
  }

}
