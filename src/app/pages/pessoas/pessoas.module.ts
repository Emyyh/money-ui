import { NgModule } from "@angular/core";
import { PrimengModule } from "src/app/primeng.module";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoaListaComponent } from "./pessoa-lista/pessoa-lista.component";
import { PessoasRoutingModule } from "./pessoas.routing";



@NgModule({
  declarations:  [
    PessoaListaComponent,
    PessoaCadastroComponent
  ],
  imports: [
    PrimengModule,
    PessoasRoutingModule
  ],
  exports:[]
})

export class PessoasModule {}
