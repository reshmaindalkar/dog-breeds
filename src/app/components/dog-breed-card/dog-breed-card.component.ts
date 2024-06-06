import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-breed-card',
  templateUrl: './dog-breed-card.component.html',
  styleUrls: ['./dog-breed-card.component.scss']
})
export class DogBreedCardComponent {
  @Input() breed: any;  //for getting data from app component
}
