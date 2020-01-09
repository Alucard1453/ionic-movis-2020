import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async openAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  cardData = [
    {
      title: 'Hola Equipo',
      subtitle: 'El agua es buena',
      contentText: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      title: 'Hola Equipo',
      subtitle: 'El agua es buena',
      contentText: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      title: 'Hola Equipo',
      subtitle: 'El agua es buena',
      contentText: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      title: 'Hola Equipo',
      subtitle: 'El agua es buena',
      contentText: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
    },
    {
      title: 'Hola Equipo',
      subtitle: 'El agua es buena',
      contentText: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
    }
  ]

  onBeerClicked(){
    console.log("Quiero una bien fria");
  }

}
