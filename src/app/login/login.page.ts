import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController 
    ) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Vacios',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }













    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Nombre y Password Correcto');
      console.log('Ingresado');
      
      //validamos que si nombre y usuario son correctos
      // ingrese y se diriga a la pagina Inicio o Perfil del usuario
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('menu/inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
