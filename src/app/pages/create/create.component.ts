import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formCadastroLogin = new FormGroup({
    name: new FormControl('', [Validators.required]),
    avatar_url: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    data_nascimento: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    repetir_password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  acessar() {
    console.log(this.formCadastroLogin.invalid);
  }

}
