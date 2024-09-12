import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { FoodComponent } from './food/food.component';
import { AnimalsComponent } from './animals/animals.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';

export const routes: Routes = 
[
    {path: '' ,redirectTo: 'home' , pathMatch:'full'},
    {path: 'home', component:HomeComponent ,title:"home"},
    {path: 'contact', component:ContactComponent ,title:"contact"},
    {path: 'gallery', component:GalleryComponent ,title:"gallery" ,children:[
        {path:"food" ,component:FoodComponent},
        {path:"animals" , component:AnimalsComponent}
    ]},
    {path: 'products', component:ProductsComponent ,title:"products"},
    {path: '**' ,component:NotfoundcomponentComponent ,title:"not found"}
];
