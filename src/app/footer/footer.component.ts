import { Component, OnInit } from '@angular/core';
//importar variables globales
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public url:string;
  public facebook:string;
  public twitter:string;
  public instagram:string;
  public correo:string;
  public whatsapp:string;
  public telefono:string;
  public linkedin:string;
  public messenger:string;


  constructor()
  {
      this.url=environment.baseUrl;
      this.facebook=environment.facebook;
      this.twitter=environment.twitter;
      this.instagram=environment.instagram;
      this.correo=environment.correo;
      this.whatsapp=environment.whatsapp;
      this.telefono=environment.telefono;
      this.linkedin=environment.linkedin;
      this.messenger=environment.messenger;
      
  }

  ngOnInit(): void {
  }

}
