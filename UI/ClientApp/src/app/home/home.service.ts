import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breed } from './home.class'

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  constructor(private http: HttpClient) {

  }

  getDogBreeds() {
    //todo call endpoint on API

    return this.http.get("https://localhost:44385/api/dog/breeds");
  }

}

