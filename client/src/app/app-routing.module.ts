import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/proveedores', pathMatch: 'full' },
  { path: 'proveedores', component: ProveedorListComponent },
  { path: 'proveedores/add', component: ProveedorFormComponent },
  { path: 'proveedores/edit/:id', component: ProveedorFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
