import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Criterio } from 'src/app/models/Criterio';
import { Pauta } from 'src/app/models/Pauta';
import { Post } from 'src/app/models/Post';
import { Tecnica } from 'src/app/models/Tecnica';
import { ResultadoServiceService } from 'src/app/services/resultado-service.service';

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
  pautas: Pauta[] = [];
  criterios: Criterio[] = [];
  tecnicas: Tecnica[] = [];
  resultados: string[] = [];
 
  loading = true;
  titulo = 'Resultados del Analisis';

  constructor(private _resultadoService: ResultadoServiceService, private spinner: NgxSpinnerService) {
    this.getResultados();
  }

  ngOnInit(): void {
   //this.getResultados();
  }

  getResultados() {
    this._resultadoService.getData().subscribe(data => {
      console.log('DATA: ', data);
      this.principios = data;
      this.pautas = data[0].pautas;
      this.pautas.forEach(pauta => {
        pauta.criterios.forEach(criterio => {
          this.criterios.push({
            "codigo": criterio.codigo,
            "descripcion": criterio.descripcion,
            "tecnicas": criterio.tecnicas
          });
          criterio.tecnicas.forEach(tecnica => {
            this.tecnicas.push({
              "codigo": tecnica.codigo,
              "descripcion": tecnica.descripcion,
              "resultado": tecnica.resultado
            });
            this.resultados.push(tecnica.resultado);
          });
        })
      })
      this.loading = false;
    });
    console.log(this.principios);
    console.log(this.pautas);
    console.log(this.criterios);
    console.log(this.tecnicas);
    console.log(this.resultados);
  }



}
