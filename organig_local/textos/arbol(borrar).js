/********************************************
 arbol.js 
 20200118
 implementa estrucutra de árbol e-ario para poder acomodar el organigrama y adicionalmente incluye métodos específicos diseñado para hacer ediciones con mayo seguridad y evitar perder nodos
 *******************************************/


// function nodo( sRuta , indice ) > función constructora. sRuta: indica la posición del nodo ene l arbol indice: tiene el valor del indicei del arreglo donde set al información de todos los nodos
function elNodo( sRuta ){ //OJO: posiblemente se puede quitar indice
    this.ruta = sRuta ;
    //this.indice = indice ;  //esta variable estaba pensada para ser un apuntador a donde está la información, pero mas bien la pongo en el arreglo lineal del árbol
    this.padre = null ;
    this.soyNum = 0 ;
    //this.pos = 0 ;
    this.proxHijo = 0 ;
    this.hijos = [] ;
    console.log("nodo OK") ;

    this.asignaPadre = function( nodoPadre ){
        this.padre = nodoPadre ;
        console.log("nodo.asignaPadre OK") ;         
    }

/*
    this.asignaRuta = function( sRuta ){
        this.ruta = sRuta ;
        console.log("nodo.asignaRuta OK " + sRuta ) ;         
    }
*/
    
}

function losDatos( nomCargo , nivCargo , empresa , ocupado , grupo , tipoCargo , centroCosto , dependencia , codigo , ident , nombre , apellido , correo , sexo , fechaNacim , formaContrato , flexibilizado , dedicacion , fechaIngreso , sueldoBase , sueldoFlex , bono , comision , sueldoTotal ){
    this.nomCargo = nomCargo ;  
    this.nivCargo = nivCargo ;
    //empresa , 
    this.ocupado = ocupado ;
    //grupo , 
    //tipoCargo , 
    //centroCosto , dependencia , codigo , ident , 
    this.nombre = nombre ;
    //apellido , correo , sexo , fechaNacim , formaContrato , flexibilizado , dedicacion , fechaIngreso , sueldoBase , sueldoFlex , bono , comision , 
    this.sueldoTotal = sueldoTotal ;
}

var tempDatos = { 
    nomCargo:"cargo" , 
    nivCargo:"nivel cargo" ,
    empresa:"empresa" ,
    ocupado:false ,        
    grupo:"grupo" ,
    tipoCargo:"tipoCargo" ,
    centroCosto:"centroCosto" ,
    dependencia:"dependencia" ,
    codigo:"codigo" ,
    ident:"1.020.020.020" ,
    nombre:"nombre" ,
    apellido:"apellido" ,
    correo:"correo" ,
    sexo:"sexo" ,
    fechaNacim:"fechaNacim" ,
    formaContrato:"formaContrato" ,
    flexibilizado:false ,
    dedicacion:"dedicacion" ,
    fechaIngreso: "fechaIngreso" ,        
    sueldoBase:0 ,
    sueldoFlex:0 ,
    bono:0 ,
    comision:0 ,
    sueldoTotal:0
} 

/* 
elNodo.prototype.asignaPadre = function( nodoPadre ){
    this.padre = nodoPadre ;
    console.log("nodo.asignaPadre OK") ;
}
 */

//function Arbol( indice ): función constructora
function Arbol( indice ){
    var nodo = new elNodo( "0." ) ;
    this.raiz = nodo ;
    this.arrRutaN = [] ;
    this.arrRutaN[0] = "0." ;
    this.arrNodos = [] ;
    this.arrNodos[0] = nodo ;
    this.sMiTexto = "" ;
    this.arrDatos = [] ;
    this.arrDatos[0] = indice ;
    this.arrResult = [] ;

    
    //var rutaN = {rutaNodo: "0" , miModo: nodo }
    //var arrRutaN[0] = rutaN ;

    this.buscaNodo = function ( sRuta ){
        var pos = this.arrRutaN.indexOf( sRuta ) ;
        if (pos == -1 ){
            return -1 ;
        }else{
            return this.arrNodos[pos] ;
        }
    }

    this.buscaPosNodo = function ( sRuta ){
        var pos = this.arrRutaN.indexOf( sRuta ) ;
        return pos ;
    }

    this.insertaNodo = function ( rutaPadre , indice ){
        var nodoPadre = this.buscaNodo( rutaPadre ) ;
        
        if ( nodoPadre != -1 ){
            var numHijo = nodoPadre.proxHijo ;
            var sRuta = rutaPadre + numHijo + "." ;
            var hijo = new elNodo( sRuta ) ;
            hijo.asignaPadre( nodoPadre ) ;
            hijo.soyNum = nodoPadre.proxHijo ;
            nodoPadre.hijos.push( hijo ) ;
            nodoPadre.proxHijo++ ;
            
            this.arrRutaN.push( sRuta ) ;
            var i = this.arrRutaN.length ;
            i-- ;
            this.arrNodos[i] = hijo ;
            console.log("arbol.insertaNodo el indice " + indice.nombre + " i=" + i ) ;
            this.arrDatos[i] = indice ;
            console.log("arbol.insertaNodo el arrDatos[i] " + this.arrDatos[i].nombre ) ;
            //hijo.pos = i ;
    
            console.log("arbol.insertaNodo " + sRuta ) ;
            return sRuta ;
        }else{
            console.log("arbol.insertaNodo no encontró nodo " + rutaPadre ) ;
            return -1 ;
        }
    }
    
    //this.corrigeRutas = function( rutaVieja , rutaNueva ): busca en el arreglo de rutas todas aquellas que empiecen por la dirección que se desee cambiar y las cambia por la nueva dirección
    this.corrigeRutas = function( rutaVieja , rutaNueva ){
        
        var long = this.arrRutaN.length ;
        for ( var i = 0 ; i < long ; i++ ){
            if ( this.arrRutaN[i].startsWith(rutaVieja) ){
                var sTexto = this.arrRutaN[i].replace( rutaVieja , rutaNueva ) ;
                this.arrRutaN[i] = sTexto ;
                this.arrNodos[i].ruta = sTexto ;
            }
        }
    }


    this.quitaNodo = function ( rutaNodo ){
        var nodo = this.buscaNodo( rutaNodo ) ;
        console.log( "this.quitaNodo = function ( rutaNodo ): " + "soy hermano: " + nodo.soyNum) ;
          
        if ( rutaNodo == -1 ){
            console.log("Fallo: this.buscaNodo( rutaNodo ) " + rutaNodo ) ;
            return -1 ;
        }else{
            if ( nodo.proxHijo == 0 ){ //el nodo no tiene hijos
                var pos = this.arrRutaN.indexOf( rutaNodo ) ;
                                
                var padre = nodo.padre ;
                padre.proxHijo-- ;
                var i,j ;
                for ( j =  nodo.soyNum + 1 ; j < padre.hijos.length ; j++ ){  //estos nodos no son son los hijos a eliminar  y se deben cambiar su numeración propia, y por lo tanto su ruta
                    i = j - 1 ;
                    var elemento = padre.hijos[j] ;
                    var rutaVieja = elemento.ruta ; 
                    var rutaNueva = padre.ruta + i + "." ;
                    this.corrigeRutas( rutaVieja , rutaNueva ) ;
                    elemento.soyNum = i ;
                }
                console.log( "antes de splice hermanos: " + padre.hijos + "soy hermano: " + nodo.soyNum) ;
                //padre.hijos = padre.hijos.splice( nodo.soyNum , 1 ) ;
                padre.hijos.splice( nodo.soyNum , 1 ) ;
                //this.arrRutaN = this.arrRutaN.splice( pos , 1 ) ;
                this.arrRutaN.splice( pos , 1 ) ;
                //this.arrNodos = this.arrNodos.splice( pos , 1 ) ;
                this.arrNodos.splice( pos , 1 ) ;
                console.log( "despues de splice hermanos: " + padre.hijos ) ;
                this.arrDatos.splice( pos , 1 ) ;
                nodo = null ;
                console.log("this.quitaNodo( rutaNodo ) " + this.arrRutaN ) ;
            }else{
                console.log("Fallo: this.quitaNodo( rutaNodo ) tiene hijos" + rutaNodo ) ;
                return -1 ;
            }
        }
    }

    this.mueveNodo = function( rutaNodo , rutaNuevoPadre ){
        //var nodoNuevo = this.buscaNodo( rutaNuevoPadre ) ;
        var padreNuevo = this.buscaNodo( rutaNuevoPadre ) ;
        var posPadre = this.buscaPosNodo( rutaNuevoPadre ) ;
        var nodo = this.buscaNodo( rutaNodo ) ;
        var pos = this.buscaPosNodo( rutaNodo ) ;
        var miDato = this.arrDatos[pos] ;
        var destDato = this.arrDatos[posPadre] ;

        console.log( "Antes de la duplicación en destino: " + this.arrRutaN ) ;
        console.log( "this.mueveNodo origen:" + miDato.nombre + " destino: " + destDato.nombre ) ;

        if (( padreNuevo != -1 ) && ( nodo != -1 )){ //se encontró nodo destino y nodo inicio
            //en primero lugar se crea un nodo nuevo en el destino con la info de indice duplicada
            var sNuevaRuta = this.insertaNodo( rutaNuevoPadre , miDato ) ;
            //ahora se asignan todo los hijos del nodo antiguo al nodo nuevo
            var nuevoNodo = this.buscaNodo ( sNuevaRuta ) ;
            nuevoNodo.hijos = nodo.hijos ; 
            nuevoNodo.proxHijo = nodo.proxHijo ;
            //ahora se le desasignan los hijos al nodo original
            nodo.hijos = null ;
            nodo.proxHijo = 0 ;
            //ahora ajustar las rutas de todos los árboles
            this.corrigeRutas ( rutaNodo , sNuevaRuta ) ;

            //ahora volver a asignar la ruta original del nodo inicio
            nodo.ruta = rutaNodo ;
            this.arrRutaN[pos] = rutaNodo ;

            console.log( "Antes de la eliminación del nodo inicio: " + this.arrRutaN ) ;
            this.quitaNodo( rutaNodo ) ;
            console.log( "Despues de la eliminación del nodo inicio: " + this.arrRutaN ) ;
        }else{
            console.log("Fallo:this.mueveNodo. No encontro: " + rutaNodo + "," + rutaNuevoPadre ) ;
        }       
    }

    this.pintaArbol1 = function( nodo , nivel , sPad , texto1 ){
        //nodo = this.raiz ;
        //sPad = sPad ;
        //texto = texto1 + sPad + nodo.ruta + "<br>" ;
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        console.log("this.pintaArbol1 pos:" + pos ) ;
        var texto = sPad + nodo.ruta + ":" + this.arrDatos[pos].nombre + "<br>" ;
        //var texto = sPad + nodo.ruta + ":" + "<br>" ;
        this.sMiTexto = this.sMiTexto + texto ; 
        //document.write( " nivel: " + nivel + " " + texto  ) ;
        if ( nivel == 0 ){
            //document.write (" retorno 0 ") ;
            return texto ;
        }else if ( nivel > 0 ){
            var texto2 = "" ;
            //document.write ("antes del for texto: " + texto ) ;
            if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
                for ( var i = 0 ; i < nodo.hijos.length ; i++ ){
                    var texto2 = this.pintaArbol1( nodo.hijos[i] , nivel - 1 , sPad + "+" , texto2 ) ;
                    texto = texto + texto2 ;
                    
                    //document.write ("dentro del for texto2: " + texto2 ) ;
                    //document.write ("dentro del for texto: " + texto ) ;
                }
            }
            return texto ;
        }
    }

    this.pintaArbol = function( nivel ){
        nodoInicial = this.raiz ;
        this.sMiTexto = "" ;
        texto = this.pintaArbol1( nodoInicial , nivel , "" , "" ) ;
        document.write( "<br>ORGANIGRAMA EN pintaArbol <br>" ) ;
        document.write( this.sMiTexto ) ;
        return texto ;
    }

    this.prueba_arrDatos = function( posi ){
        console.log( "this.prueba_arrDatos:" + this.arrDatos[posi].nombre + " en posicion:" + posi ) ;
    }

    this.sumaSueldoTotalArbol = function( sfuncion ){
        nodoInicial = this.raiz ;
        var result = this.sumaSueldoTotalArbol1( nodoInicial , sfuncion ) ;
        document.write( "<br>Saliendo sumaSueldoTotalArbol <br>" ) ;
        
        return result ;
    }

    this.sumaSueldoTotalArbol1 = function( nodo , sfuncion ){
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        console.log("this.sumaSueldoTotalArbol1 pos:" + pos ) ;
        //var texto = sPad + nodo.ruta + ":" + this.arrDatos[pos].nombre + "<br>" ;
        //var texto = sPad + nodo.ruta + ":" + "<br>" ;
        //this.sMiTexto = this.sMiTexto + texto ; 
        //document.write( " nivel: " + nivel + " " + texto  ) ;
        //var texto2 = "" ;
        //document.write ("antes del for texto: " + texto ) ;
        var resultado = 0 ;
        var resultado1 = 0 ;
        if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
            for ( var i = 0 ; i < nodo.hijos.length ; i++ ){
                resultado1 = this.sumaSueldoTotalArbol1( nodo.hijos[i] , sfuncion ) ;
                resultado = resultado1 + resultado ;                
                //document.write ("dentro del for texto2: " + texto2 ) ;
                //document.write ("dentro del for texto: " + texto ) ;
            }
            if ( this.arrDatos[pos].ocupado == true ){ //el cargo si está ocupado
                resultado = resultado + this.arrDatos[pos].sueldoTotal ;
            }
            this.arrResult[pos] = resultado ;
            return resultado ;
        }else{ //el nodo es una hoja            
            if ( this.arrDatos[pos].ocupado == true ){ //el cargo si está ocupado
                resultado = this.arrDatos[pos].sueldoTotal ;
                //resultado = sfuncion( this.arrDatos[pos] ) ;  //20200123: ensayo fallido de usar función en variable                
            }else{
                resultado = 0 ;
            }
            this.arrResult[pos] = resultado ;
            return resultado ;            
        }        
    }

    //this.promSueldoTotalArbol = function( sfuncion ) no sirve porque no cuenta bien los nodos
    this.cuentaOcupadosArb = function( sfuncion ){
        nodoInicial = this.raiz ;
        var result = this.cuentaOcupadosArb1( nodoInicial , sfuncion ) ;
        document.write( "<br>Saliendo cuentaOcupadosArb <br>" ) ;
        
        return result ;
    }

    this.cuentaOcupadosArb1 = function( nodo , sfuncion ){
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        console.log("this.cuentaOcupadosArb1 pos:" + pos ) ;
        var resultado = 0 ;
        var resultado1 = 0 ;
        if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
            for ( var i = 0 ; i < nodo.hijos.length ; i++ ){
                resultado1 = this.cuentaOcupadosArb1( nodo.hijos[i] , sfuncion ) ;
                resultado = resultado1 + resultado ;                
                //document.write ("dentro del for texto2: " + texto2 ) ;
                //document.write ("dentro del for texto: " + texto ) ;
            }
            if ( this.arrDatos[pos].ocupado == true ){ //el cargo si está ocupado
                resultado++ ;
            }            
            this.arrResult[pos] = resultado ;
            return resultado ;
        }else{ //el nodo es una hoja
            if ( this.arrDatos[pos].ocupado == true ){ //el cargo si está ocupado
                resultado = 1 ;          
            }else{
                resultado = 0 ;
            }
            this.arrResult[pos] = resultado ;
            return resultado ;
        }        
    }

    //20200123: ensayo fallido de usar función en variable
    /* fPrueba = function( obDato ){
        return obDato.sueldoTotal ;
    } */

    
   
    this.prueba_arrResult = function( posi ){
        console.log( "this.prueba_arrResult:" + this.arrResult[posi] + " en posicion:" + posi + " ruta:" + this.arrRutaN[posi] + " nombre:" + this.arrDatos[posi].nombre ) ;
    }

    this.pintaResult = function(){
        console.log( "this.prueba_arrResult:" + this.arrResult ) ;
        console.log( "this.prueba_arrRuta:" + this.arrRutaN ) ;
        for (var i = 0 ; i < this.arrResult.length ; i++ ){
            this.prueba_arrResult( i ) ;
        }
    }
}


var aT = [] ;
var index ;
var sueldoTot = 0 ;
for ( index = 0; index < 21 ; index++) {
    var cargo = "cargo" + index ;
    var ocup = true ;
    var niv = "auxiliar" ;
    nombre = "pedro " + index ;
    sueldo = 4000000 - ( 100000 * index ) ;
    sueldoTot = sueldoTot + sueldo ;
    elem = new losDatos(cargo,niv,0,ocup,0,0,0,0,0,0,nombre,0,0,0,0,0,0,0,0,0,0,0,0,sueldo) ;
    aT[index] = elem ;
}
console.log( aT[4].sueldoTotal ) ;
document.write("el total de sueldos asignado es:" + sueldoTot +"<br>") ;


//console.log( aT[0].nombre ) ;


organigrama = new Arbol( aT[0] ) ;
organigrama.insertaNodo( "0." , aT[1] ) ;
organigrama.insertaNodo( "0." , aT[2] ) ;
organigrama.insertaNodo( "0." , aT[3] ) ;
organigrama.insertaNodo( "0.0." , aT[4] ) ;
organigrama.insertaNodo( "0.2." , aT[5] ) ;
organigrama.insertaNodo( "0.0." , aT[6] ) ;
organigrama.insertaNodo( "0.1." , aT[7] ) ;
organigrama.insertaNodo( "0.0." , aT[8] ) ;
organigrama.insertaNodo( "0.2." , aT[9] ) ;
organigrama.insertaNodo( "0.2." , aT[10] ) ;
organigrama.insertaNodo( "0.2." , aT[11] ) ;
organigrama.insertaNodo( "0." , aT[12] ) ;
organigrama.insertaNodo( "0.0.3." , aT[13] ) ;
organigrama.insertaNodo( "0.0.3." , aT[14] ) ;
organigrama.insertaNodo( "0.2." , aT[15] ) ;
organigrama.insertaNodo( "0.2." , aT[16] ) ;
organigrama.insertaNodo( "0.2." , aT[17] ) ;
organigrama.insertaNodo( "0.1.0." , aT[18] ) ;
organigrama.insertaNodo( "0.2.0." , aT[19] ) ;

tHtml = organigrama.pintaArbol( 6 , "" ) ;
document.write( "<br>Primera asignacion del organigrama: " + organigrama.arrRutaN ) ;
organigrama.prueba_arrDatos( 0 ) ;
organigrama.prueba_arrDatos( 1 ) ;
organigrama.prueba_arrDatos( 2 ) ;
organigrama.prueba_arrDatos( 3 ) ;
organigrama.prueba_arrDatos( 4 ) ;



organigrama.quitaNodo( "0.0.2.") ;
organigrama.quitaNodo( "0.0.2.") ;
organigrama.quitaNodo( "0.1.") ;

document.write("<br>despues de quitar los nodos:") ;
tHtml = organigrama.pintaArbol( 4 , "" ) ;
document.write( "<br>Segunda asignacion del organigrama: " + organigrama.arrRutaN ) ;

organigrama.mueveNodo( "0.1." , "0.3." ) ;
document.write("<br>despues de mover nodo 0.1. a 0.3. :") ;
tHtml = organigrama.pintaArbol( 4 , "" ) ;
document.write( "Tercera asignacion del organigrama: " + organigrama.arrRutaN ) ;

//var total = organigrama.sumaSueldoTotalArbol( "fPrueba" ) ;  //20200123: ensayo fallido de usar función en variable
var total = organigrama.sumaSueldoTotalArbol( 0 ) ;
document.write("resultado sumaSueldoTotalArbol  es: " + total + "<br>" ) ;
organigrama.pintaResult() ;


var total = organigrama.cuentaOcupadosArb( 0 ) ;
document.write("resultado cuentaOcupadosArb es: " + total + "<br>" ) ;
organigrama.pintaResult() ;