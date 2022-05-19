import { Component, OnInit } from '@angular/core';
import { UsuarioGit } from 'src/app/clases/usuarioGit';
import { GihubService } from 'src/app/servicios/gihub.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  usuarioGit: UsuarioGit;
  constructor(private githubService: GihubService) { }

  ngOnInit(): void {
    this.githubService.githubGet().subscribe(res => {
      this.usuarioGit = new UsuarioGit();
      this.usuarioGit.email = res.email;
      this.usuarioGit.nombre = res.name;
      this.usuarioGit.location = res.location;
      this.usuarioGit.username = res.login;
      this.usuarioGit.tipo = res.type;
      this.usuarioGit.foto = res.avatar_url
    });

  }

}
