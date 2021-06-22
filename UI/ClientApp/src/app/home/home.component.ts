import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Input, Data, Breed } from './home.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  input = new Input;
  data = new Data;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getDogBreeds().subscribe(result => {
      console.log(result);
      this.data.Breeds = result as Breed[];
    });
  }

  submit() {
    console.log("submitting");
    console.log(this.input);
  }
}


