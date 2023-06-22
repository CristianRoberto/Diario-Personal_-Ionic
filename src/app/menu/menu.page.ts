import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Ingresar Informacion',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Registros Guardados',
      url: '/menu/entradas',
      icono: 'book'
    }
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {
            
          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            //localStorage.clear();
            location.reload();
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });


    await alert.present();
  }

}