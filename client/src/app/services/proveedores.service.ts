import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/Proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<Proveedor> {
    return this.http.get(`${this.API_URI}/proveedores`);
  }

  getProveedor(id: string): Observable<Proveedor> {
    return this.http.get(`${this.API_URI}/proveedores/${id}`);
  }

  deleteProveedor(id: string): Observable<Proveedor> {
    return this.http.delete(`${this.API_URI}/proveedores/${id}`);
  }

  saveProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post(`${this.API_URI}/proveedores`, proveedor);
  }

  updateProveedor(id: any, updatedProveedor: Proveedor): Observable<Proveedor> {
    return this.http.put(`${this.API_URI}/proveedores/${id}`, updatedProveedor);
  }
}
