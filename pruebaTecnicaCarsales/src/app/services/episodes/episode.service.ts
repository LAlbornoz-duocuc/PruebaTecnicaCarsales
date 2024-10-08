import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Episodes } from '../../models/episodes.models';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private baseUrl: string = environment.Api;
  constructor(private http: HttpClient, private router: Router) { }

  async Episodes(page: number) {
    const url = `${this.baseUrl}episode`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);

    return this.http.get<any>(url, { params: queryParams })
  }
}
