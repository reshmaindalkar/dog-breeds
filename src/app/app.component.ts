import { Component, OnInit } from '@angular/core';
import { DogBreedService } from './services/dog-breed.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dog-breeds';
  breeds: any[] = [];
  page: number = 1;
  searchQuery: string = '';
  loading: boolean = false;
  searchControl: FormControl = new FormControl();


  constructor(private dogBreedService: DogBreedService) { }


  ngOnInit(): void {
    this.getBreeds();
    this.searchControl.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      filter((query: string) => query.length > 3),
      switchMap((query: string) => {
        this.loading = true;
        return this.dogBreedService.searchDogBreeds(query);
      })
    ).subscribe(response => {
      this.breeds = response.results;
      this.loading = false;
    });
  }

  // API call to get data
  getBreeds(): void {
    this.loading = true;
    this.dogBreedService.getDogBreeds(this.page).subscribe(response => {
      console.log(response)
      this.breeds = response.results;
      this.loading = false;
    });
  }

  //pagination

  nextPage(): void {
    this.page++;
    this.getBreeds();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getBreeds();
    }
  }

}
