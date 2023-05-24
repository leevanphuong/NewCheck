import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { HomepageComponent } from "./component/homepage/homepage.component"
import { BaseLayoutComponent } from "./layout/base-layout/base-layout.component"
import { ProductListComponent } from "./component/product-list/product-list.component"
import { ProductDetailComponent } from "./component/product-detail/product-detail.component"
const routes : Routes=[
    {path: '', component: BaseLayoutComponent, children:[
        {path: '', component: HomepageComponent},
        {path: 'product', component: ProductListComponent},
        {path: 'product/:id', component: ProductDetailComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}