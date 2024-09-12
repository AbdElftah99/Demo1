import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../alert/alert.component";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, AlertComponent, ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName : string = 'Ali';

  @ViewChild('hamada') elem !: ElementRef

  isadmin : boolean = false;

  data : string ="";

  name: string = "ali"

  imgSrc: string = "./assets/images/1.png"

  sayHello(): void {
    this.elem.nativeElement.classList.add("d-none");
  }

  products: product[] = [
  ];
  constructor(){
    this.products = [
      {
        name:"aa",
        price:555,
        category:"aa",
        image:"aa"
      },
      {
        name:"aa",
        price:555,
        category:"aa",
        image:"aa"
      },
      {
        name:"aa",
        price:555,
        category:"aa",
        image:"aa"
      }
    ]
  }
}

interface product{
  name:string;
  price:number;
  category:string;
  image:string;
}
