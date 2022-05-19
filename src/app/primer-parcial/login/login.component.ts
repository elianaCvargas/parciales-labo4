import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioGit } from 'src/app/clases/usuarioGit';
import { LoginService } from 'src/app/servicios/parcial-uno/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registroFormulario: FormGroup;
  mensaje: string = '';
  registroOK: boolean = false;
  constructor(private fb: FormBuilder, private loginService: LoginService) { }


  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      email: ['', { validators: [Validators.required, Validators.email] }],
      password: ['', { validators: [Validators.required] }],

    });
  }

  ingresar() {
    this.loginService.login(this.email(), this.password()).then(
      res => {
        console.log(res);
        this.registroOK = true;

        var usuario = new UsuarioGit();
        usuario.email = this.email();
        usuario.nombre = "Carla";
        localStorage.setItem('usuario', JSON.stringify(usuario));

      }
    ).catch(error => {
      console.log(error);
      this.mensaje = "Usuario y/o contraseña incorrectos";
      this.registroOK = false;
    })
  }

  password() {
    return this.registroFormulario.controls['password'].value;
  }

  email() {
    return this.registroFormulario.controls['email'].value;
  }

}
