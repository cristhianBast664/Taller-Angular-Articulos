import { Component } from '@angular/core';
import { Articulo } from './articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Administración de Artículos';
  codigoInput: number = 0;
  descripcionInput: string = '';
  precioInput: number = 0;
  

  articulos:Articulo[] = [new Articulo(1,'Papa',10.55),
                          new Articulo(2,'Manzanas',12.1),
                          new Articulo(3,'Melon',52.3),
                          new Articulo(4,'Cebollas',17),
                          new Articulo(5,'Calabaza',20)];

  agregarArticulo(){
    let articuloAux = new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
    this.articulos.push(articuloAux);
  }
  borrarArticulo(i: number){
        this.articulos.splice(i,1);
  }
  seleccionarArticulo(articulo: Articulo){
    this.codigoInput = articulo.codigo;
    this.descripcionInput = articulo.descripcion;
    this.precioInput = articulo.precio;
  }
  modificarArticulo(){
    for(let x = 0 ; x < this.articulos.length ; x++)
      if (this.articulos[x].codigo == this.codigoInput)
      {
        this.articulos[x].descripcion = this.descripcionInput;
        this.articulos[x].precio = this.precioInput;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}
