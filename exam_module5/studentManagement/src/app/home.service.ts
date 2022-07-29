import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "./ticket";
import {Garage} from "./garage";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private API_URL = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {
  }

  findAllTicket(startPlay: any):Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(this.API_URL + '/list-ticket?startPlay='+startPlay);
  }

  findAllGarage(): Observable<Garage[]> {
    return this.httpClient.get<Garage[]>(this.API_URL+ '/list-garage');
  }

  create(ticket: Ticket): Observable<void>{
    console.log(ticket)
    return this.httpClient.post<void>(this.API_URL +'/add-ticket',ticket)
  }

  ordTicket(ticket: Ticket):Observable<Ticket>{
  return this.httpClient.put<Ticket>(this.API_URL+ '/ord-ticket',ticket)
  }
}
