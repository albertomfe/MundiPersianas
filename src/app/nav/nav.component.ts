import { Component, OnInit } from '@angular/core';
//importar variables globales
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public url:string;
  public facebook:string;
  public twitter:string;
  public instagram:string;
  public correo:string;
  public whatsapp:string;
  public telefono:string;

  constructor()
  {
      this.url=environment.baseUrl;
      this.facebook=environment.facebook;
      this.twitter=environment.twitter;
      this.instagram=environment.instagram;
      this.correo=environment.correo;
      this.whatsapp=environment.whatsapp;
      this.telefono=environment.telefono;
  }

  ngOnInit(): void {
  }

}
