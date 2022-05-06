import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../place-model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap) {
        console.log('No hay');
      } else {
        const recipeId = paramMap.get('placeId');
        this.place = this.placesService.getPlace(recipeId);
        console.log(this.place);
      }
    });
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this place?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.activatedRoute.paramMap.subscribe((paramMap) => {
              if (!paramMap) {
                console.log('No hay');
              } else {
                const recipeId = paramMap.get('placeId');
                this.placesService.deletePlace(this.place.id);
                console.log('Eliminando');
                this.router.navigate(['/places']);
              }
            });
          },
        },
      ],
    });
    await alertElement.present();
  }
}
