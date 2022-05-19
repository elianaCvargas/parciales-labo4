import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  userIsLogged: boolean = false;
  usuarioLogged: any = false;
  ngOnInit(): void {
    this.usuarioLogged = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.userIsLogged = localStorage.getItem("usuario") != undefined ? true : false;

  }

}
