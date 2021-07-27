import { Component, HostBinding, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css'],
})
export class ProveedorListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  proveedores: any = [];

  constructor(private proveedoresService: ProveedoresService) {}

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores() {
    this.proveedoresService.getProveedores().subscribe(
      (res) => {
        this.proveedores = res;
      },
      (err) => console.error(err)
    );
  }

  deleteProveedor(id: string) {
    this.proveedoresService.deleteProveedor(id).subscribe(
      (res) => {
        console.log(res);
        this.getProveedores();
      },
      (err) => console.error(err)
    );
  }
}
