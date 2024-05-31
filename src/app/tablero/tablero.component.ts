import { Component } from "@angular/core";
import { Casilla } from "../modules/Casilla";
import { CasillaService } from "../services/Casilla.service";

@Component({
    selector: 'app/tablero',
    templateUrl: './tablero.component.html',
    styleUrls: ['./tablero.component.css'] 
})
export class TableroComponent
{
    tablero: Casilla[][] = []
    casilla: any
    fila: number
    columna: number
    simbolojugador: boolean | null
    estado:boolean
    casillasUsadas: number

    constructor(private servicio:CasillaService)
    {
        this.fila = 3;
        this.columna = 3;
        this.simbolojugador = null;
        this.estado = false;
        this.reiniciar();
        this.casillasUsadas = 0;
    }

    abrirCelda(fila: number, columna: number)
    {
        if (this.estado != true && this.casillasUsadas < 9){
            if (this.tablero[fila][columna].estado == false)
                {
                    this.servicio.mostrarCasilla(this.tablero, fila, columna, this.simbolojugador)
                    this.simbolojugador = !this.simbolojugador
                    this.estado = this.servicio.terminarJuego(this.tablero);
                    if(this.estado == false)
                        {
                        this.casillasUsadas ++;
                        }
                }
        }
        if (this.casillasUsadas == 9){
            this.estado = true
        }
    }

    reiniciar()
    {
            this.simbolojugador = false
            this.estado = false
            this.casillasUsadas = 0
            this.tablero = this.servicio.crearTablero(this.fila, this.columna)
    }
}