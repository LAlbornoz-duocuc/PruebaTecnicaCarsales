import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Characters } from '../../models/characters.models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = environment.Api;
  constructor(private http: HttpClient, private router: Router) { }

  async Characters(page: number) {
    const url = `${this.baseUrl}character`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);

    return this.http.get<any>(url, { params: queryParams })
  }

  async CharactersURL(url: string) {


    return this.http.get<Characters>(url)
  }
}
