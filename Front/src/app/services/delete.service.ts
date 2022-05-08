import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

const baseUrl = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
 
  constructor(private http:HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  
  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
 }
   delete(id:any):Observable<any> {
     return this.http.delete(`${baseUrl}/correntistas/ + ${id}`).pipe(take(1)); 
   }
}
 

 