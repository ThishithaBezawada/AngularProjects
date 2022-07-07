import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RetailersListComponent } from './retailers-list/retailers-list.component';
import { RetailerProductsListComponent } from './retailer-products-list/retailer-products-list.component';
import { CompareComponent } from './compare/compare.component';
import { ShowComponent } from './show/show.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { RetailerLogoutComponent } from './retailer-logout/retailer-logout.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { ClothingComponent } from './clothing/clothing.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { EletronicsComponent } from './eletronics/eletronics.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
const routes: Routes = [ {path:'home', component: HomeComponent},
{path:'userRegister',component:RegisterUserComponent},
{path:'userLogin',component:UserLoginComponent},
{path:'registerRetailer',component:RegisterRetailerComponent},
{path:'retailerLogin',component:RetailerLoginComponent},
{path: 'registerAdmin',component:RegisterAdminComponent},
{path:'adminLogin',component:AdminLoginComponent},
{path:'addToCart',component:AddtocartComponent},
{path:'productList',component:ProductListComponent},
{path:'createProduct',component:CreateProductComponent},
{path:'productDetails',component:ProductDetailsComponent},
{path:'productList',component:ProductListComponent},
{path:'updateProduct',component:UpdateProductComponent},
{path:'addProduct',component:AddProductComponent},
{path:'retailerList',component:RetailersListComponent},
{path:'retailerProductsList',component:RetailerProductsListComponent},
{path:'compare',component:CompareComponent},
{path:'show', component:ShowComponent},
{path:'userLogout',component:UserLogoutComponent},
{path:'retailerLogout',component:RetailerLogoutComponent},
{path:'adminLogout',component:AdminLogoutComponent},
{path:'clothing',component:ClothingComponent},
{path:'cosmetics',component:CosmeticsComponent},
{path:'Eletronics',component:EletronicsComponent},
{path:'Jewellery',component:JewelleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
