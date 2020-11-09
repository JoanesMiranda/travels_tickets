import { Component, OnInit } from '@angular/core';

export interface Person{
  nome:string,
  idade:string,
  email:string
}

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {
  cliente:Person={
    nome:'Karin Hartmann',
    idade:'27',
    email:'karin@tamonessa.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
