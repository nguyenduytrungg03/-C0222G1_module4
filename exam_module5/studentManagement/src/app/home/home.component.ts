import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {Ticket} from "../ticket";
import {Garage} from "../garage";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ticketList: Ticket[];
  garageList: Garage[];
  startPlay: string;
  ordTicket: Ticket = {
    id: 0,
    startPlay: '',
    endPlay: '',
    countTicket: '',
    dayPlay: '',
    timePlay: '',
    garage: {
      id: 1,
      name: 'Phương Trang'
    },
    amount: 0
  };
  p = 0;


  ticketForm = new FormGroup({
    id: new FormControl(),
    startPlay: new FormControl('', [Validators.required]),
    endPlay: new FormControl('', [Validators.required]),
    countTicket: new FormControl('', [Validators.required, Validators.min(1)]),
    dayPlay: new FormControl('', [Validators.required]),
    timePlay: new FormControl('', [Validators.required]),
    garage: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(1)])
  })


  constructor(private homeService: HomeService) {
  }


  ngOnInit(): void {
    this.homeService.findAllTicket('').subscribe(
      (value: any) => {
        this.ticketList = value.content
      })
    this.homeService.findAllGarage().subscribe(value => {
      this.garageList = value
    })
  }

  createTicket() {
    const student = this.ticketForm.value;
    console.log(student)
    this.homeService.create(student).subscribe
    (value => {
      },
      error => {
      },
      () => {
        this.ngOnInit()
      })
  }

  searchTicket() {
    console.log("keySearch: " + this.startPlay);
    this.homeService.findAllTicket(this.startPlay).subscribe((value: any) => {
        this.ticketList = value.content;
        console.log(this.ticketList);
      }, error => {
      },
    )
  }

  getName(ticket: Ticket) {
    this.ordTicket = ticket

  }

  bookTicket(ticket:Ticket) {
    console.log(ticket.amount)
    if (ticket.amount > 0) {
      this.homeService.ordTicket(ticket).subscribe(value => {
          this.ngOnInit();
          alert("đặt vé thành công!!!")
        },
        error => {
        })

    } else {
      alert("đã hết vé")
    }
  }
}
