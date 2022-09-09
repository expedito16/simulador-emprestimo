import { Component, OnInit, Input } from '@angular/core';
import { SimuladorService } from '../simulador.service';
import { Simulador } from '../simulador.model';

@Component({
  selector: 'app-lista-simulacao',
  templateUrl: './lista-simulacao.component.html',
  styleUrls: ['./lista-simulacao.component.scss']
})
export class ListaSimulacaoComponent implements OnInit {
  @Input() simulacoes: Simulador[] = [];

  constructor(
    private service: SimuladorService
  ) { }

  ngOnInit(): void {
    this.listaSimulacoes();
  }

  listaSimulacoes () {
    this.service.listaSimulacoes().subscribe((dados) => {
      this.simulacoes = dados;
    });
  }

}
