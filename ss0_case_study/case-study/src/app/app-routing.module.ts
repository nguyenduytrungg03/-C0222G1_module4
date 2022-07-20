import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FacilityComponent} from "./facility/facility.component";
import {ContractComponent} from "./contract/contract.component";
import {CustomerComponent} from "./customer/customer.component";

const router: Routes = [
  {path: 'facility', component: FacilityComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'customer', component: CustomerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
