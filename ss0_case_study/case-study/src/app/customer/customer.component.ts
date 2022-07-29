import {Component, OnInit,} from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "./customer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "./customer-type";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[];
  customerForm = new FormGroup({
    id: new FormControl(),
    codeCustomer: new FormControl(),
    nameCustomer: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl,
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    type: new FormControl()
  })
  type: CustomerType[];
  id: number;
  nameSearch: string;


  constructor(private customerService: CustomerService) {
  }


  ngOnInit(): void {
    this.customerService.searchByName('').subscribe
    (value => {
      this.customerList = value;
    });


    this.customerService.findAllType().subscribe(value => {
        this.type = value}, error => {},
      () => {})
  }

  createCustomer(): void {
    const customer = this.customerForm.value;
    console.log(customer)
    this.customerService.create(customer).subscribe
    (value => {
      },
      error => {
      },
      () => {
        this.ngOnInit()
      })
  }

  findByIdCustomer(id: number): void {
    this.id = id;
  }

  deleteCustomer(): void {
    console.log(this.id)
    this.customerService.delete(this.id).subscribe
    (value => {
      },
      error => {
      },
      () => {
        this.ngOnInit()
      })
  }

  getId(id: number) {
    this.id = id;
  }
  searchCustomer(): void{
    this.customerService.searchByName(this.nameSearch).subscribe
    (value => {this.customerList = value},
      error => {
      },
      () => {
      })
  }
}


