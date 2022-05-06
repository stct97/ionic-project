import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {
  constructor(
    private placesService: PlacesService,
    private router: Router,
    private alertCrtl: AlertController
  ) {}

  ngOnInit() {}

  async saveNewPlace(title: HTMLInputElement, imageURL: HTMLInputElement) {
    const alertElement = await this.alertCrtl.create({
      header: 'Añadir nuevo lugar',
      message: '¿Estás seguro de que quieres añadir este lugar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
        {
          text: 'Añadir',
          handler: async () => {
            if (title.value != '' && imageURL.value != '') {
              this.placesService.addPlace(title.value, imageURL.value);
              this.router.navigate(['/places']);
            } else {
              const alert = await this.alertCrtl.create({
                header: 'Error',
                message: 'Debes rellenar todos los campos',
                buttons: ['OK'],
              });
              await alert.present();
            }
          },
        },
      ],
    });
    await alertElement.present();
  }
}
