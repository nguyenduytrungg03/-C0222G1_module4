import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./module/product-list/product-list.component";
import {ProductCreateComponent} from "./module/product-create/product-create.component";
import {ProductUpdateComponent} from "./module/product-update/product-update.component";
import {ProductDeleteComponent} from "./module/product-delete/product-delete.component";


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
}, {
  path: 'product/update/:id',
  component: ProductUpdateComponent
},{
  path: 'product/delete/:id',
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
