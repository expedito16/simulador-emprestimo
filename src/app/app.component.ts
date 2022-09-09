import { Component } from '@angular/core';
import { SimuladorService } from './pages/simulador/simulador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simulador-emprestimo';
  simulacoes: any[] = [];

  constructor(private service: SimuladorService) {}

  transferir($event) {
    this.service.adicionarSimulacao($event).subscribe(x => console.log(x));
  }
}
