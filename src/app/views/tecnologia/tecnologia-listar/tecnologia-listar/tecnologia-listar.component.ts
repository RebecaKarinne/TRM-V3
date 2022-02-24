import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tecnologia } from 'src/app/models/tecnologias/tecnologia.model';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologia-listar',
  templateUrl: './tecnologia-listar.component.html',
  styleUrls: ['./tecnologia-listar.component.css']
})
export class TecnologiaListarComponent implements OnInit {

  public paginaAtual = 1;

  tecnologias$!: Observable<Tecnologia[]>;

  formGroupPesquisa!: FormGroup;

  constructor(private tecnologiaService: TecnologiaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupPesquisa = this.formBuilder.group({
      nome: [null],
    })
    this.listarTecnologias();
  }

  listarTecnologias(){
    this.tecnologias$ = this.tecnologiaService.listar();
    const queryAdicional = new Map();
    if(this.formGroupPesquisa.value.nome) {
      queryAdicional.set("nome_like", this.formGroupPesquisa.value)
    }
  }

}
