import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FoodComponent } from '../food/food.component';
import { AnimalsComponent } from '../animals/animals.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterOutlet ,RouterLink ,RouterLinkActive , FoodComponent , AnimalsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
