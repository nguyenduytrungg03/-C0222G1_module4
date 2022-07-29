import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "./customer-type";
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL ='http://localhost:3000/customerList';


  constructor(private httpClient: HttpClient) {
  }

  findAllCus(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL);
  }
  findAllType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerTypeList')
  }
  create(customer: Customer): Observable<void>{

    console.log(customer)
    return this.httpClient.post<void>(this.API_URL,customer)
  }
  findById(id: number):Observable<Customer>{
    return this.httpClient.get<Customer>(this.API_URL + '/' + id)
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  searchByName(name: string): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL + '?nameCustomer_like=' + name);
  }
}
