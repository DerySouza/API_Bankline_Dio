import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {
  cpf:any;
  nome:any;
  constructor(private correntistaService: CorrentistaService) { }

  ngOnInit(): void {
  
  }
  save(): void {
    const correntista = {
      cpf:this.cpf,
      nome:this.nome
    };
    console.log(correntista);
    this.correntistaService.create(correntista)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}

