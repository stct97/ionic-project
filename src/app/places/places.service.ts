import { Injectable } from '@angular/core';
import { Place } from './place-model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL:
        'https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg',
      comments: ['Nice!', 'Awesome!'],
    },
    {
      id: '2',
      title: 'Estatua Libertad',
      imageURL:
        'https://images.ecestaticos.com/jJjPz11Uytq57w1MeVk0NL7OMmQ=/254x2:2272x1515/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff16%2Fd53%2Fdd1%2Ff16d53dd1c68a694db86a74064081b43.jpg',
      comments: ['Nice!', 'Awesome!'],
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL:
        'https://images.ecestaticos.com/jJjPz11Uytq57w1MeVk0NL7OMmQ=/254x2:2272x1515/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff16%2Fd53%2Fdd1%2Ff16d53dd1c68a694db86a74064081b43.jpg',
      comments: [],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      id: this.places.length + 1 + '',
      title,
      imageURL,
      comments: [],
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id !== placeId;
    });
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }
}
