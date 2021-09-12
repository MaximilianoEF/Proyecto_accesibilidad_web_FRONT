import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Criterio } from 'src/app/models/Criterio';
import { Pauta } from 'src/app/models/Pauta';
import { Post } from 'src/app/models/Post';
import { Tecnica } from 'src/app/models/Tecnica';
import { ResultadoServiceService } from 'src/app/services/resultado-service.service';

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
  displayedColumns: string[] = ['principio', 'pauta', 'criterio', 'tecnica', 'resultado'];

  dataSource = new MatTableDataSource(this.principios);
  loading = true;
  titulo = 'Resultados del Analisis';

  constructor(private resultadoService: ResultadoServiceService) {
    
  }

  ngOnInit(): void {
    this.getResultados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getResultados() {
    this.resultadoService.getData().subscribe(data => {
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
          });
        })
      })
      this.loading = false;
    });
  }

}
