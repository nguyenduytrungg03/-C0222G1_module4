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

  findAllTicket():Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(this.API_URL + '/list-ticket');
  }

  findAllGarage(): Observable<Garage[]> {
    return this.httpClient.get<Garage[]>('http://localhost:3000/garageLis' )
  }

  create(ticket: Ticket): Observable<void>{
    console.log(ticket)
    return this.httpClient.post<void>(this.API_URL,ticket)
  }
  // bookTicket(ticket: Ticket): Observable<Ticket> {
  //   return this.httpClient.get<Ticket>(this.API_URL + ticket, ticket.id );
  // }
  searchTicket(startPlay: string): Observable<Ticket[]>{
      return this.httpClient.get<Ticket[]>(this.API_URL + '?startPlay_like=' + startPlay);
  }
}
