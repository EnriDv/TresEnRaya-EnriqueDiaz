
import { Casilla } from "../modules/Casilla";

export class CasillaService
{
    crearTablero(fila: number, columna: number): Casilla[][]{
        let tablero : Casilla[][] = []
        for (let i=0; i<fila; i++)
            {
            let filas: Casilla[] = []
            for (let j=0; j<columna; j++)
                {
                    let casilla : Casilla = {estado : false, simbolo: null}
                    filas.push(casilla)
                }
                tablero.push(filas)
            }
        return tablero
    }

    mostrarCasilla(tablero: Casilla[][], possX: number, possY: number, simboloActual:boolean|null): void
    {
        if (!tablero[possX][possY].estado)
            {
                tablero[possX][possY].estado = true
                tablero[possX][possY].simbolo = !simboloActual
            }
    }
    
    terminarJuego(tablero: Casilla[][]) : boolean
    {
        if (tablero[0][0].simbolo == tablero[0][1].simbolo && tablero[0][1].simbolo == tablero[0][2].simbolo &&
            tablero[0][0].simbolo != null && tablero[0][1].simbolo != null && tablero[0][1].simbolo != null)
            {return true}
        if (tablero[1][0].simbolo == tablero[1][1].simbolo && tablero[1][1].simbolo == tablero[1][2].simbolo &&
            tablero[1][0].simbolo != null && tablero[1][1].simbolo != null && tablero[1][2].simbolo != null)
            {return true}
        if (tablero[2][0].simbolo == tablero[2][1].simbolo && tablero[2][1].simbolo == tablero[2][2].simbolo && 
            tablero[2][0].simbolo != null && tablero[2][1].simbolo != null && tablero[2][2].simbolo != null)
            {return true}


        if (tablero[0][0].simbolo == tablero[1][1].simbolo && tablero[1][1].simbolo == tablero[2][2].simbolo&& 
            tablero[0][0].simbolo != null && tablero[1][1].simbolo != null && tablero[2][2].simbolo != null)
            {return true}
        if (tablero[0][2].simbolo == tablero[1][1].simbolo && tablero[1][1].simbolo == tablero[2][0].simbolo&& 
            tablero[0][2].simbolo != null && tablero[1][1].simbolo != null && tablero[2][0].simbolo != null)
            {return true}


        if (tablero[0][0].simbolo == tablero[1][0].simbolo && tablero[1][0].simbolo == tablero[2][0].simbolo&& 
            tablero[0][0].simbolo != null && tablero[1][0].simbolo != null && tablero[2][0].simbolo != null)
            {return true}
        if (tablero[0][1].simbolo == tablero[1][1].simbolo && tablero[1][1].simbolo == tablero[2][1].simbolo&& 
            tablero[0][1].simbolo != null && tablero[1][1].simbolo != null && tablero[2][1].simbolo != null)
            {return true}
        if (tablero[0][2].simbolo == tablero[1][2].simbolo && tablero[1][2].simbolo == tablero[2][2].simbolo&& 
            tablero[0][2].simbolo != null && tablero[1][2].simbolo != null && tablero[2][2].simbolo != null)
            {return true}

        return false
    }
}