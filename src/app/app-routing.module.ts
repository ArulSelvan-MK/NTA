import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisResultComponent } from './analysis-result/analysis-result.component';
import { DetailedReportComponent } from './detailed-report/detailed-report.component';
import { PacketAnalyzerComponent } from './packet-analyzer/packet-analyzer.component';


const routes: Routes = [
  {path: '', component: PacketAnalyzerComponent},
  {path:'anlysis-report', component: AnalysisResultComponent},
  {path:'view-details', component: DetailedReportComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
