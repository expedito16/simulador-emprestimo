import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaSimulacaoComponent } from './pages/simulador/lista-simulacao/lista-simulacao.component';
import { NovaSimulacaoComponent } from './pages/simulador/nova-simulacao/nova-simulacao.component';


const routes: Routes = [
  { path: '', redirectTo: 'lista-simulacao', pathMatch: 'full' },
  { path: 'lista-simulacao', component: ListaSimulacaoComponent },
  { path: 'nova-simulacao', component: NovaSimulacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
