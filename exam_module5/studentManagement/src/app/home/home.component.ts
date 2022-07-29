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
  ordTicket: Ticket={
    id: 0,
    startPlay: '',
    endPlay: '',
    countTicket: '',
    dayPlay: '',
    timePlay: '',
    garage: {
      id:1,
      name:'Phương Trang'
    },
    amount: ''
  };



  ticketForm = new FormGroup({
    id: new FormControl(),
    startPlay: new FormControl('',[Validators.required]),
    endPlay: new FormControl('',[Validators.required]),
    countTicket: new FormControl('',[Validators.required,Validators.min(1)]),
    dayPlay: new FormControl('',[Validators.required]),
    timePlay: new FormControl('',[Validators.required]),
    garage: new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required,Validators.min(1)])
  })


  constructor(private homeService: HomeService) {
  }


  ngOnInit(): void {
    this.homeService.findAllTicket().subscribe((value: any) => {this.ticketList = value.content})
    this.homeService.findAllGarage().subscribe(value => {this.garageList = value})
  }

  createTicket() {
    const student = this.ticketForm.value;
    console.log(student)
    this.homeService.create(student).subscribe
    (value => {},
      error => {},
      () => {this.ngOnInit()})}

   searchTicket(){
     this.homeService.searchTicket(this.startPlay).subscribe(value => {this.ticketList = value},error => {},
       () => {})
   }

  getName(ticket: Ticket) {
    this.ordTicket= ticket
  }

  bookTicket(id: number) {
  //   console.log(this.id)
  //   this.homeService.delete(id ).subscribe
  //   (value => {this.studentService.findAllClass()},
  //     error => {},
  //     () => {
  //       this.ngOnInit()})
  // }
}
}
