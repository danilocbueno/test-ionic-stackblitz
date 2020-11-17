import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.css"]
})
export class HomePage implements OnInit {
  ngOnInit() {}

  public numero1: number;
  public numero2: number;
  public operacao: string;

  constructor(public alertController: AlertController) {}

  async vaiFormulario() {
    let total = 0;

    switch(this.operacao) {
      case "add" : 
        total = this.numero1 + this.numero2;
        break;
      case "sub" :
        total = this.numero1 - this.numero2;
        break;
      case "mul" :
        total = this.numero1 * this.numero2;
        break;
      case "div" :
        total = this.numero1 / this.numero2;
        break;
      default:
        total = 0;
    }

    const alert = await this.alertController.create({
      header: 'O resultado é de:',
      message: total,
      buttons: ['OK']
    });

    await alert.present();

  }
}
