import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RetailersListComponent } from './retailers-list/retailers-list.component';
import { RetailerProductsListComponent } from './retailer-products-list/retailer-products-list.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { RetailerLogoutComponent } from './retailer-logout/retailer-logout.component';
import { CompareComponent } from './compare/compare.component';
import { ShowComponent } from './show/show.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EletronicsComponent } from './eletronics/eletronics.component';
import { ClothingComponent } from './clothing/clothing.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    UserLoginComponent,
    RetailerLoginComponent,
    AdminLoginComponent,
    RegisterRetailerComponent,
    RegisterAdminComponent,
    AddtocartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    AddProductComponent,
    RetailersListComponent,
    RetailerProductsListComponent,
    UserLogoutComponent,
    AdminLogoutComponent,
    RetailerLogoutComponent,
    CompareComponent,
    ShowComponent,
    UserProfileComponent,
    EletronicsComponent,
    ClothingComponent,
    JewelleryComponent,
    CosmeticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
