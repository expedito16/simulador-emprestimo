import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Simulador } from '../simulador/simulador.model';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {
  private listaSimulacao: any[] = [];
  private url = 'http://localhost:3000/lista-simulacao';

  constructor(
    private httpClient: HttpClient
  ) { }

  get simulacoes () {
    return this.listaSimulacao;
  }

  adicionarSimulacao (simulacao: Simulador): Observable<any> {
    this.diaSimulacao(simulacao);
    this.valorSimulacaoFinal(simulacao);

    return this.httpClient.post<Simulador>(this.url, simulacao);
  }

  listaSimulacoes () {
    return this.httpClient.get<Simulador[]>(this.url);
  }

  private diaSimulacao (simulacao: Simulador) {
    simulacao.data = new Date();
  }

  valorSimulacaoFinal(simulacao: Simulador) {
    const numeroParcelaTexto = simulacao.parcelas.toString();
    const numeroParcela = parseInt(numeroParcelaTexto);
    const novoValor = simulacao.valor + (simulacao.valor * (numeroParcela * 0.05));
    const novoValorTexto = novoValor.toString();
    const valorAntigoTexto = simulacao.valor.toString();
    const ValorFinal = valorAntigoTexto.replace(valorAntigoTexto, novoValorTexto);
    simulacao.valor = parseFloat(ValorFinal);
  }
}
