import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../../../../services/Kpis/kpi.service';
import { Chart } from 'chart.js';
import * as html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';



@Component({
  selector: 'ngx-chartjs',
  styleUrls: ['./kpi.component.scss'],
  templateUrl: './kpi.component.html',
})
export class KpiComponent {

  kpis: any = {};

  constructor(private kpiService: KpiService) { }

  ngOnInit(): void {
    this.kpiService.getAllKPIs().subscribe(data => {
      this.kpis = data;
      console.log(data);
    });
  }

  exportToPDF() {
    const element = document.getElementById('contentToExport');
    if (element) {
      const options = {
        margin: 1,
        filename: 'kpis.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().from(element).set(options).save();
    }
  }
  exportToPNG() {
    const element = document.getElementById('contentToExport');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'kpis.png';
        link.click();
      });
    }
  }

}
