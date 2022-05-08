import { NgModule } from '@angular/core';
import { CorrentistaComponent } from './components/correntista/correntista.component';
 
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { DeleteComponent } from './components/delete/delete.component';
 
const routes: Routes = [
   
   {path: 'movimentacoes-new',component:MovimentacaoNewComponent},
   {path: 'movimentacoes',component:MovimentacaoListComponent},
   {path: '', redirectTo:'correntistas',pathMatch:'full'},
   { path: 'correntistas', component: CorrentistaComponent },
   { path: 'delete', component: DeleteComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
