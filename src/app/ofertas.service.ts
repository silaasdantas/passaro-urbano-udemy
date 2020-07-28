import { Oferta } from './shared/oferta.model'
import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

  constructor(private httpClient: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.httpClient.get("http://localhost:3000/ofertas?destaque=true")
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.httpClient.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res)
  }
}
