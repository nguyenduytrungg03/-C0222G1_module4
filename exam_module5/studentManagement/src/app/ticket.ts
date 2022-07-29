import {Garage} from "./garage";

export interface Ticket {
  id?: number,
  startPlay?: string,
  endPlay?: string,
  countTicket?: string,
  dayPlay?: string,
  timePlay?: string,
  garage: Garage,
  amount?: string,
}
