import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Criterio } from 'src/app/models/Criterio';
import { Pauta } from 'src/app/models/Pauta';
import { Post } from 'src/app/models/Post';
import { Tecnica } from 'src/app/models/Tecnica';
import { ResultadoServiceService } from 'src/app/services/resultado-service.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface InfoElement {
  principio: string;
  pauta: string;
  criterio: string | string[];
  nivel: string | string[];
}

export interface Principio {
  principio: string;
}

@Component({
  selector: 'app-list-resultado',
  templateUrl: './list-resultado.component.html',
  styleUrls: ['./list-resultado.component.css']
})
export class ListResultadoComponent implements OnInit {

  principios: Post[] = [];
  resultados: string[] = [];
  resultado: boolean[] = [];
 
  loading = true;
  titulo = 'Resultados del Analisis';
  dateDay = new Date().toString().substring(4,24);
  url = '';
  conclusion = '';

  constructor(private _resultadoService: ResultadoServiceService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
   this.getResultados();
   console.log(this.dateDay);
  }

  getResultados() {
    this._resultadoService.getData().subscribe(data => {
      console.log('DATA: ', data);
      this.principios = data;
      this.url = data[4].detalle.substring(8, );
      
      data.forEach((principio: Post) => {
        if(principio.codigo !== '5') {
          principio.pautas.forEach((pauta: Pauta) => {
            pauta.criterios.forEach((criterio: Criterio) => {
                var aux = 0;
                console.log('CRITERIO: ', criterio.codigo);
                criterio.tecnicas.forEach((tecnica: Tecnica) => {
                  if(tecnica.resultado === 'OK' || tecnica.resultado === 'MANUAL') {
                    aux++;
                  }
                });
                if(criterio.tecnicas.length === 0) {
                  this.resultados.push('Cumple');
                  this.resultado.push(true);
                } else if(aux === criterio.tecnicas.length) {
                  this.resultado.push(true);
                  this.resultados.push('Cumple');
                } else {
                  this.resultado.push(false);
                  this.resultados.push('No cumple');
                }
            })
          })
        }
      })

      var aux = 0;
      this.resultado.forEach(res => {
        if(res === true) {
          aux++;
        }
      });

      console.log('VALOR DE AUX: ', aux);

      if(aux >= 30) {
        this.conclusion = 'ACCESIBLE';
      } else {
        this.conclusion = 'NO ACCESIBLE';
      }

      this.loading = false;
      console.log('Resultado: ', this.resultado);
      console.log('Resultados: ', this.resultados);

    });
    
  }

  public downloadPDF(): void {
    const doc = new jsPDF()
    doc.text("Analisis AW: \n"+"URL: "+this.url+"\n"+"Fecha: "+this.dateDay+"\n"+"Resultado: pagina web "+this.conclusion, 7, 10);
    autoTable(doc, { html: '#htmlData', startY: 40})
    doc.save(this.url+'-'+'AnexoII.pdf')
  }

}
