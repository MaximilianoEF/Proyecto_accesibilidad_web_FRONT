import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadoServiceService } from 'src/app/services/resultado-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consultar-web',
  templateUrl: './consultar-web.component.html',
  styleUrls: ['./consultar-web.component.css']
})
export class ConsultarWebComponent implements OnInit {

  createConsulta: FormGroup;
  loading = false;
  titulo = 'Ingresar URL para analizar';

  constructor(private fb: FormBuilder, private resultadoService: ResultadoServiceService, private router: Router, private toastr: ToastrService) {
    this.createConsulta = this.fb.group({
      url: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  agregar() {
    const consulta: any = {
      url: this.createConsulta.value.url
    }
    this.loading = true;
    this.resultadoService.postUrl(consulta.url).subscribe(() => {
      this.toastr.success('La consulta fue registrada con exito!', 'Consulta exitosa', {
        positionClass: 'toast-bottom-right'
    });
      this.router.navigate(['/consultar-web/list-resultado']);
    });
  }

}
