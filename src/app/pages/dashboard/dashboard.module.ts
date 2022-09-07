import { NgModule } from "@angular/core";
import { PrimengModule } from "src/app/primeng.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    PrimengModule,
    DashboardRoutingModule
  ],
  exports: []
})


export class DashboardModule {}
