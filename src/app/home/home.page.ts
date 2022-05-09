import { Component } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photos = []

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos) => {
      console.log(photos)
      this.photos = photos;
    });
  }
}
