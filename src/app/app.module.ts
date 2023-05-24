import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ServiceComponent } from './service/service.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductListComponent,
    HomepageComponent,
    ServiceComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
