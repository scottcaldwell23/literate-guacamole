
export class Input {
  NewBreed: Breed = {
    Name: "",
    Image: ""
  }
}

export class Data {
  Breeds: Breed[] = null;
}

export interface Breed {
  Name: string;
  Image: string; //string?
}
