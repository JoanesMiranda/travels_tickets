import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Create } from './create.model';
import { CreateService } from './create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private createService: CreateService, private router: Router) { }

  user: Create = {
    nome: '',
    cpf: '',
    email: '',
    login: '',
    senha: '',
  }


  ngOnInit(): void {

  }

  createRegister(): void {
    if (this.formCadastroLogin.valid) {
      this.createService.create(this.user).subscribe(() => {
        this.createService.showMessage('Cadastro Salvo com sucesso!');
        this.router.navigate(['/']);
      });
    }
  }

  formCadastroLogin = new FormGroup({
    name: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repetir_password: new FormControl('', Validators.required),
    
  })

  /*
  acessar() {
    console.log(this.formCadastroLogin.valid);
  }
  */

}
