import { Proveedor } from './../../models/Proveedor';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css'],
})
export class ProveedorFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  proveedor: Proveedor = {
    id: 0,
    nombre: '',
    direccion: '',
    correo: '',
    vehiculos: 0,
  };

  edit: boolean = false;

  constructor(
    private proveedoresService: ProveedoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.proveedoresService.getProveedor(params.id).subscribe(
        (res) => {
          this.proveedor = res;
          this.edit = true;
        },
        (err) => console.error(err)
      );
    }
  }

  saveNewProveedor() {
    delete this.proveedor.id;
    delete this.proveedor.fecha;
    this.proveedoresService.saveProveedor(this.proveedor).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/proveedores']);
      },
      (err) => console.error(err)
    );
    this.proveedor = {
      nombre: '',
      direccion: '',
      correo: '',
      vehiculos: 0,
    };
  }

  updateProveedor() {
    this.proveedoresService
      .updateProveedor(this.proveedor.id, this.proveedor)
      .subscribe(
        (res) => {
          this.router.navigate(['/proveedores']);
        },
        (err) => console.error(err)
      );
  }
}
