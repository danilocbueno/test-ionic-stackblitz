import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  vaiFormulario() {
    console.log(this.operacao);
    //template strings!
    let total = this.numero1 + this.numero2;
    const texto = `O valor total da conta é de ${total}`;

    console.log(texto);
  }
}
