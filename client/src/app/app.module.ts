import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';

import { HttpClientModule } from '@angular/common/http';

import { ProveedoresService } from './services/proveedores.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProveedorFormComponent,
    ProveedorListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProveedoresService],
  bootstrap: [AppComponent],
})
export class AppModule {}
