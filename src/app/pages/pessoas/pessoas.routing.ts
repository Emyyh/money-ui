import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoaListaComponent } from "./pessoa-lista/pessoa-lista.component";

const routes: Routes = [
  {path:'pessoas', component: PessoaListaComponent },
  {path:'pessoas/novo', component: PessoaCadastroComponent },
  {path:':codigo', component: PessoaCadastroComponent },

];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PessoasRoutingModule {}
