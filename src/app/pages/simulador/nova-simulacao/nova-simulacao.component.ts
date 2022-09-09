import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SimuladorService } from '../simulador.service';
import { Router } from '@angular/router';
import { Simulador } from '../simulador.model';

@Component({
  selector: 'app-nova-simulacao',
  templateUrl: './nova-simulacao.component.html',
  styleUrls: ['./nova-simulacao.component.scss']
})
export class NovaSimulacaoComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  nome: string;
  valor: number;
  parcelas: Array<object> = [];

  constructor(
    private service: SimuladorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  transferir() {
    const valorEmitido: Simulador = { nome: this.nome, valor: this.valor, parcelas: this.parcelas };

    this.service.adicionarSimulacao(valorEmitido)
    .subscribe((resultado: any) => {
      console.log(resultado);
      this.router.navigateByUrl('lista-simulacao');
    },
      error => console.error(error)
    );
  }

  cancelar() {
    this.router.navigateByUrl('lista-simulacao');
  }
}
