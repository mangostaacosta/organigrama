/********************************************
 arbol.js 
 20200118
 implementa estrucutra de árbol e-ario para poder acomodar el organigrama y adicionalmente incluye métodos específicos diseñado para hacer ediciones con mayo seguridad y evitar perder nodos
 *******************************************/

//<script src="datos_nodo.js"></script>


// function nodo( sRuta , indice ) > función constructora. sRuta: indica la posición del nodo en el arbol indice: tiene el valor del indicei del arreglo donde set al información de todos los nodos
function elNodo( sRuta ){ //OJO: posiblemente se puede quitar indice
    this.ruta = sRuta ;
    //this.indice = indice ;  //esta variable estaba pensada para ser un apuntador a donde está la información, pero mas bien la pongo en el arreglo lineal del árbol
    this.padre = null ; //tipo elNodo
    this.soyNum = 0 ;
    //this.pos = 0 ;
    this.proxHijo = 0 ;
    this.hijos = [] ;  //arreglo de tipo elNodo
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

function comparaRuta( $r1 , $r2 ){
    var $arr1 = $r1.split(".");
    var $arr2 = $r2.split(".");
    var $la_primera = true ;
    var $i ;

    //identificar la ruta más corta
    if ( $arr1.length < $arr2.length ){
        $la_primera = true ;
    }else{
        $la_primera = false ;
    }

    if ( $la_primera ){  //vamos a recorre basados en $arr1
        for ( $i = 0 ; $i < $arr1.length ; $i++ ){
            $uno = parseInt($arr1[$i]) ;
            $dos = parseInt($arr2[$i]) ;
            if ( $uno < $dos ){
                return -1 ;
            }else if ( $uno > $dos ){
                return 1 ;
            }else{
                //son iguales seguir comparando
                //nada
            }
        }
        return -1 ; //como son iguales hasta acá y la otra cadena es mas larga, etonces esta es menor
    }else{
        for ( $i = 0 ; $i < $arr2.length ; $i++ ){
            $uno = parseInt($arr1[$i]) ;
            $dos = parseInt($arr2[$i]) ;
            if ( $uno < $dos ){
                return -1 ;
            }else if ( $uno > $dos ){
                return 1 ;
            }else{
                //son iguales seguir comparando
                //nada
            }
        }
        return 1 ; //como son iguales hasta acá y la otra cadena es mas larga, etonces esta es menor
    }
}

//function quitaEvaluado( $arrlistas , $iQuitar ){ genera un nuevo listado donde de los arrTarg quita los elementos que correspondan al nodo identificado por $iQuitar
function quitaEvaluado( $arrlistas , $iQuitar ){
    var $arrlistado2 = [] ;
    for ( $elem of $arrlistas ){
        var $arrTarget2 = [] ;
        for ( $elem2 of $elem["arrTarg"] ){
            $obj1 = JSON.parse( $elem2 ) ;
            if ( $obj1.i != $iQuitar ){
                $arrTarget2.push( $elem2 ) ;
            }
        }
        var $newElem = {} ;
        $newElem["estud"] = $elem["estud"] ;
        $newElem["arrTarg"] = $arrTarget2 ;
        $arrlistado2.push( $newElem ) ;
    }
    return $arrlistado2 ;
}

//function Arbol( indice ): función constructora
function Arbol( indice ){
    var nodo = new elNodo( "0." ) ;
    this.myName = "" ;
    this.raiz = nodo ;
    this.arrRutaN = [] ; //arreglo de string que guarda las rutas de todos los nodos
    this.arrRutaN[0] = "0." ; 
    this.arrNodos = [] ; //arreglo que guarda los nodos tipo elNodo cada uno con la ruta del arreglo anterior
    this.arrNodos[0] = nodo ;
    this.sMiTexto = "" ;
    this.arrDatos = [] ; //arreglo de oDato correspondiente a la posición de los nodos anteriores
    indice.id = 0 ;
    this.ID = 1 ;
    this.arrDatos[0] = indice ;
    this.arrResult = [] ; //arreglo dummy que sirve para guardar resultados de operaciones sobre los nodos
    this.arrListaEvaluaciones = [] ; //arreglo para guardar las evaluaciones generadas pore le generador e evaluaciones

    /*
    this.reinicia = function(){
    this.comparaRuta = function( $r1 , $r2 ){
    this.serialize = function(){
    this.unserialize = function( texto ){
    this.buscaNodo = function ( sRuta ){
    this.buscaPosNodo = function ( sRuta ){
    this.buscaRutaNodo = function ( $id ){
    this.insertaNodo = function ( rutaPadre , indice ){
    this.corrigeRutas = function( rutaVieja , rutaNueva ){
    this.quitaNodo = function ( rutaNodo ){
    this.mueveNodo = function( rutaNodo , rutaNuevoPadre ){
    this.pintaArbol1 = function( nodo , nivel , sPad , texto1 ){
    this.pintaArbol_back = function( nivel , nForm){
    this.pintaArbol = function( nivel , nForm){
    this.pintaArbol2 = function( nivel , nForm){
    this.prueba_arrDatos = function( posi ){
    this.sumaSueldoTotalArbol = function( sfuncion ){
    this.sumaSueldoTotalArbol1 = function( nodo , sfuncion ){
    this.cuentaOcupadosArb = function( sfuncion ){
    this.cuentaOcupadosArb1 = function( nodo , sfuncion ){
    this.htmlTotal = function(){
    this.prueba_arrResult = function( posi ){
    this.pintaResult = function(){
    this.escogeDatos = function( $oDatos ){
    this.armaGrupos = function( maximo ){
    this.escogeEncuestados3 = function( rutaNodo , maximo ){
    this.escogeEncuestados2 = function( rutaNodo , maximo ){
    this.randomEmail = function( arrTemp , maxim1 ){
    this.randomEmail2 = function( arrTemp , maximo, cont, sEmails ){
    this.accionMenu = function( $param , $form , $nomChkbx ){
    this.pintaInsertaForm = function( $seccion ){
    this.pintaEvalJSON = function( $arrListaEval ){    
    
    */

    this.reinicia = function(){
        var nodo = new elNodo(  "0." ) ;
        this.raiz = nodo ;
        this.arrRutaN = [] ; 
        this.arrRutaN[0] = "0." ; 
        this.arrNodos = [] ; 
        this.arrNodos[0] = nodo ;
        this.sMiTexto = "" ;
        this.arrDatos = [] ;
        //indice.id = 0 ;
        //this.arrDatos[0] = indice ;
        this.ID = 0 ;
        this.arrResult = [] ; 
    }

    this.comparaRuta = function( $r1 , $r2 ){
        var $arr1 = $r1.split(".");
        var $arr2 = $r2.split(".");
        var $la_primera = true ;
        var $i ;

        //identificar la ruta más corta
        if ( $arr1.length < $arr2.length ){
            $la_primera = true ;
        }else{
            $la_primera = false ;
        }

        if ( $la_primera ){  //vamos a recorre basados en $arr1
            for ( $i = 0 ; $i < $arr1.length ; $i++ ){
                $uno = parseInt($arr1[$i]) ;
                $dos = parseInt($arr2[$i]) ;
                if ( $uno < $dos ){
                    return -1 ;
                }else if ( $uno > $dos ){
                    return 1 ;
                }else{
                    //son iguales seguir comparando
                    //nada
                }
            }
            return -1 ; //como son iguales hasta acá y la otra cadena es mas larga, etonces esta es menor
        }else{
            for ( $i = 0 ; $i < $arr2.length ; $i++ ){
                $uno = parseInt($arr1[$i]) ;
                $dos = parseInt($arr2[$i]) ;
                if ( $uno < $dos ){
                    return -1 ;
                }else if ( $uno > $dos ){
                    return 1 ;
                }else{
                    //son iguales seguir comparando
                    //nada
                }
            }
            return 1 ; //como son iguales hasta acá y la otra cadena es mas larga, etonces esta es menor
        }
    }

    //serializa el objeto en un texto json sobre un arreglo de nodos, que posteriormente se puede utilizar para "reconstruir" el organigrama
    this.serialize = function(){
        var $i = 0 ;
        var $j ;
        var $arrResp = [] ;
        for ( $i = 0 ; $i < this.arrRutaN.length ; $i++ ){
            var $arr = { ruta : this.arrRutaN[$i] } ;
            if ( this.arrNodos[$i].padre == null ){
                $arr["padre"] = "null" ;
            }else{
                $arr["padre"] = this.arrNodos[$i].padre.ruta ;
            }
            //$arr[0] = this.arrRutaN[$i] ;
            for ( $j in this.arrDatos[$i] ){
                $arr[$j] = this.arrDatos[$i][$j] ;
            }
            console.log("serialize", $arr ) ;
            $arrResp[$i] =  $arr ;
        }
        $arrResp.sort(function(a,b){
            return comparaRuta( a.ruta , b.ruta ) ;
        }) ;
        /*
        $arrResp.sort(function(a,b){
            if ( a.ruta < b.ruta ){ 
                return -1 ; 
            }else{
                return 1 ;
            }
        }) ;
        */
        console.log("serialize sort", $arrResp ) ;

        var texto = JSON.stringify( $arrResp ) ;
        //document.write( texto ) ;
        return texto ;
    }

    //esta versión ordena el arreglo como debe ser
    this.unserialize = function( texto ){
        var $arr = JSON.parse( texto ) ;
        var $i = 0 ;
        var $val ;

        $arr.sort(function(a,b){
            return comparaRuta( a.ruta , b.ruta ) ;
        }) ;


        for ( $i = 0 ; $i < $arr.length ; $i++ ){
            $val = $arr[$i] ;
            //var $elem = new losDatos($val.nomCargo,$val.nivCargo,0,$val.ocupado,0,0,0,0,0,0,$val.nombre,0,$val.correo,0,0,0,0,0,0,0,0,0,0,$val.sueldoTotal) ;
            var $elem = new losDatos(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0) ;
            $val1 = obj = JSON.parse(JSON.stringify($val)); //clonar $val
            delete $val1.ruta ;   // or delete person["age"]; 
            delete $val1.padre ;   // or delete person["age"]; 
            $elem.editar( $val1 ) ;
            if ( $val.padre != "null" ){  
                this.insertaNodo( $val.padre , $elem ) ;
            }else{
                $elem.id = 0 ;
                this.ID++ ;            
                this.arrDatos[0] = $elem ;
            }
        }
    }

    this.unserialize1 = function( texto ){
        var $arr = JSON.parse( texto ) ;
        var $i = 0 ;
        var $val ;

        for ( $i = 0 ; $i < $arr.length ; $i++ ){
            $val = $arr[$i] ;
            var $elem = new losDatos($val.nomCargo,$val.nivCargo,0,$val.ocupado,0,0,0,0,0,0,$val.nombre,0,$val.correo,0,0,0,0,0,0,0,0,0,0,$val.sueldoTotal) ;
            if ( $val.padre != "null" ){  
                this.insertaNodo( $val.padre , $elem ) ;
            }else{
                $elem.id = 0 ;
                this.ID++ ;            
                this.arrDatos[0] = $elem ;
            }
        }
    }



    //20200220:estas 2 funciones no sirven porque el objeto es ciclico, entonces lo que toca hacer es una funcion que a) convierta cada nodo en un arreglo y lo guarde y despues que a cada nodo le cree el equivalente insertaarbol con la ruta equivalente a la que tiene. asi cuando se recupera el archivo, lo que se hace es reconstruir el árbol
/* function guardaObjeto( $oOrganigrama ){
    var $arhivo = JSON.stringify( $oOrganigrama ) ;
    localStorage.setItem("testOrgn", $arhivo ) ;
    document.write("<br><br>" + $archivo ) ;

    
    function recuperaObjeto(){
        var $archivo = localStorage.getItem( "testOrgn" );
        var $objeto = JSON.parse( $archivo ) ;
        return $objeto ;    
    }

} */

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

    this.buscaRutaNodo = function ( $id ){
        var sRuta = this.arrRutaN[$id] ;
        return sRuta ;
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
            indice.id = this.ID ;
            this.ID++ ;
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
            //ahora los hijos se amarran a su nuevo padre
            for ( var i = 0 ; i < nodo.hijos.length ; i++ ){
                nodo.hijos[i].padre = nuevoNodo ;
            }
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
            return 1;
        }else{
            console.log("Fallo:this.mueveNodo. No encontro: " + rutaNodo + "," + rutaNuevoPadre ) ;
            return 0 ;
        }       
    }


    //this.pintaArbol1 = function( nodo , nivel , sPad , texto1 ){: el pintaarbol pero con alta profundización en una de las ramas
    this.pintaArbol1 = function( nodo , nivel , sPad , $ramaEspecial ){
        //nodo = this.raiz ;
        //sPad = sPad ;
        //texto = texto1 + sPad + nodo.ruta + "<br>" ;
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        console.log("this.pintaArbol1 pos, $ramaEspecial:", pos , $ramaEspecial) ;
        //console.log("this.pintaArbol1 $ramaEspecial:", $ramaEspecial ) ;
        var sPapa = "NADIE!" ;
        if (nodo.padre != null ){
            var sRutaPapa = nodo.padre.ruta ;
            var pos2 = this.buscaPosNodo( nodo.padre.ruta ) ;
            sPapa = this.arrDatos[pos2].nombre ;
            sPapa = sPapa.slice( 0 , 20 )
        }
        var nomObjOrganigrama = this.myName ;

        //var $cssBoton = 'class="btn btn-outline-primary"' ;
        var $cssBoton = 'class="btn btn-outline-secondary"' ;
        
        var fila = '<tr><td>' + '<div class="btn-group btn-group-sm">' +
        '<button type="button" ' + $cssBoton + ' onclick="' + nomObjOrganigrama + '.editaElem(' + pos + ',\'sinDatos\')">editar</button>' +
        '<button type="button" ' + $cssBoton + ' onclick="borraElem(' + nomObjOrganigrama + ',' + pos + ')"> X </button><button type="button" ' + $cssBoton + ' onclick="' +
        nomObjOrganigrama + '.pintaMasRama(' + pos + ')">[:]</button></div></td>' ;

        fila += '<td><div class="centrado"><input type="checkbox" name="mover" value="' + pos + '"> &nbsp-&nbsp <input type="radio" name="recibir"  id="padre' + pos + '" value="' + pos + '" onclick="pintaOrganigrama( ' + nomObjOrganigrama + ' , \'padre'+pos+'\' )"></div></td>' ;

        fila += '<td><span title="idpos:' + pos + '">' + nodo.ruta + '</span></td>' ;
        fila += '<td>' + sPad + this.arrDatos[pos].nomCargo + '</td>' ;
        fila += '<td>' + this.arrDatos[pos].nombre + '</td>' ;
        fila += '<td>' +  sPapa + '</td></tr>' ;

     /*    
        //var menu = '<input type="checkbox" name="mover" value="' + pos + '">' + pos + '<input type="radio" name="recibir"  id="padre' + pos + '" value="' + pos + '" onclick="accionMenu( \'padre'+pos+'\', \'miMenu2\'  ,  \'mover\' )">' + pos + ' > ' ;
        var menu = '<input type="checkbox" name="mover" value="' + pos + '"> / <input type="radio" name="recibir"  id="padre' + pos + '" value="' + pos + '" onclick="pintaOrganigrama( ' + nomObjOrganigrama + ' , \'padre'+pos+'\' )">  <button type="button" onclick="borraElem(' + nomObjOrganigrama + ',' + pos + ')">borrar</button><button type="button" onclick="' + nomObjOrganigrama + '.editaElem(' + pos + ',\'sinDatos\')">editar</button><button type="button" onclick="' +
        nomObjOrganigrama + '.pintaMasRama(' + pos + ')">[:]</button>  ' ;
        
        var texto = menu + sPad + nodo.ruta + " soyRama:" + nodo.soyNum + ">" + this.arrDatos[pos].nomCargo + ">" + this.arrDatos[pos].nombre + ">padre:" + sPapa + ">mi posic:" + pos + '<br>' ;
        //var texto = sPad + nodo.ruta + ":" + "<br>" ;        
        //this.sMiTexto = this.sMiTexto + texto ; 
        */
       
        var texto = '' ;
        this.sMiTexto = this.sMiTexto + fila ; 


        //document.write( " nivel: " + nivel + " " + texto  ) ;
        if ( parseInt( pos ) == parseInt( $ramaEspecial ) ){ // esta es la rama especial, profundidad total!
            console.log("this.pintaArbol1 entre a ramaprofunda", pos , $ramaEspecial) ;
            nivel = 20 ;
        }else{
            console.log("this.pintaArbol1 no iguales:", pos , $ramaEspecial) ;
            //nada lo de siempre
        }
        if ( nivel == 0 ){
            //document.write (" retorno 0 ") ;
            //return texto ;
            return fila ;
        }else if ( nivel > 0 ){
            var texto2 = "" ;
            //document.write ("antes del for texto: " + texto ) ;
            if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
                for ( var i = 0 ; i < nodo.hijos.length ; i++ ){
                    var texto2 = this.pintaArbol1( nodo.hijos[i] , nivel - 1 , sPad + "°" , $ramaEspecial ) ;
                    texto = texto + texto2 ;
                    //document.write ("dentro del for texto2: " + texto2 ) ;
                    //document.write ("dentro del for texto: " + texto ) ;
                }
            }
            return texto ;
        }
    }

    this.pintaArbol1_back = function( nodo , nivel , sPad , texto1 ){
        //nodo = this.raiz ;
        //sPad = sPad ;
        //texto = texto1 + sPad + nodo.ruta + "<br>" ;
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        //console.log("this.pintaArbol1 pos:" + pos ) ;
        var sPapa = "NADIE!" ;
        if (nodo.padre != null ){
            var sRutaPapa = nodo.padre.ruta ;
            var pos2 = this.buscaPosNodo( nodo.padre.ruta ) ;
            sPapa = this.arrDatos[pos2].nombre ;
        }
        var nomObjOrganigrama = this.myName ;

        //var menu = '<input type="checkbox" name="mover" value="' + pos + '">' + pos + '<input type="radio" name="recibir"  id="padre' + pos + '" value="' + pos + '" onclick="accionMenu( \'padre'+pos+'\', \'miMenu2\'  ,  \'mover\' )">' + pos + ' > ' ;
        var menu = '<input type="checkbox" name="mover" value="' + pos + '"> / <input type="radio" name="recibir"  id="padre' + pos + '" value="' + pos + '" onclick="pintaOrganigrama( ' + nomObjOrganigrama + ' , \'padre'+pos+'\' )">  <button type="button" onclick="borraElem(' + nomObjOrganigrama + ',' + pos + ')">borrar</button><button type="button" onclick="' + nomObjOrganigrama + '.editaElem(' + pos + ',\'sinDatos\')">editar</button><button type="button" onclick="' +
        nomObjOrganigrama + '.pintaMasRama(' + pos + ')">[:]</button>  ' ;

        var texto = menu + sPad + nodo.ruta + " soyRama:" + nodo.soyNum + ">" + this.arrDatos[pos].nomCargo + ">" + this.arrDatos[pos].nombre + ">padre:" + sPapa + ">mi posic:" + pos + '<br>' ;
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


    this.pintaArbol = function( nivel , nForm , $ramaEspecial = -1 ){
        var nodoInicial = this.raiz ;
        this.sMiTexto = "" ;
        var tHtml = "" ;
        tHtml += '<form action="" method="get" id="'+ nForm +'">' ;
        //this.pintaArbol1( nodoInicial , nivel , "" , "" ) ;

        tHtml += '\
            <div class="container-fluid"> \
                <table class="table table-sm table-striped"> \
                <thead> \
                    <tr> \
                    <th class="col-sm-1">nada</th> \
                    <th class="col-sm-1">Orig - Dest</th> \
                    <th class="col-sm-1">Nodo</th> \
                    <th class="col-sm-4">Cargo</th> \
                    <th class="col-sm-3">Nombre</th> \
                    <th class="col-sm-2">Padre</th> \
                    </tr> \
                </thead> \
                <tbody> \ ' ;
        

        this.pintaArbol1( nodoInicial , nivel , "" , $ramaEspecial ) ;
        tHtml += this.sMiTexto ;
        tHtml += '\
                </tbody> \
               </table> \
            </div>' ;

        var $cssBoton = 'class="btn btn-outline-primary"' ;
        var $cssBoton2 = 'class="btn btn-secondary"' ;
        tHtml += '<div class="container">' ;
        tHtml += '<br><button  type="button" ' + $cssBoton + ' onclick="organigrama.clickCambiaNivel(-1)">Nivel --</button> ' ;
        tHtml += '<button  type="button" ' + $cssBoton + ' onclick="organigrama.clickCambiaNivel(1)">Nivel ++</button> ' ;
        tHtml += '<button  type="button" ' + $cssBoton2 + '>Niveles: ' + ($gProfundidad + 1) + '</button> ' ;
        
        tHtml += ' || <button  type="button" ' + $cssBoton + ' onclick="organigrama.archivar( 1 )">Archivar</button> ' ;
        tHtml += '<button  type="button" ' + $cssBoton + ' onclick="organigrama.archivar( 2 )">Recuperar</button> ' ;
        tHtml += '<button  type="button" ' + $cssBoton + ' onclick="organigrama.html()">Inicio</button> ' ;
        tHtml += ' || <button  type="button" ' + $cssBoton + ' onclick="organigrama.clickArmaGrupos2()">Generar listados de Evaluación</button> ' ;
       
        tHtml += '</div>' ;
        tHtml += '</form>' ; 

        tHtml += '<br><form action="js_canal.php" method="post" name="miPrueba1" onsubmit="return organigrama.clickArchiva(1)">' ;
        tHtml += '<input type="submit" value="ARCHIVAR Organigrama Servidor">' ;
        var d = new Date();
        var t= d.getTime();
        tHtml += '<a href="edita_organigrama2.html?tiempo=' + t + '">Recargar página sin caché</a>' ;

        tHtml += '<input type="hidden" id="php_nombre" name="php_nombre" value="">' ;
        tHtml += '<input type="hidden" id="php_prueba" name="php_prueba" value="">' ;
        tHtml += '<input type="hidden" id="php_estado" name="php_estado" value="">' ;
        tHtml += '</form>' ; 

        tHtml += '<br><br>' ;
        //tHtml += '<input type="submit" value="Volver"></form>'
        //document.write( "<br>ORGANIGRAMA EN pintaArbol <br>" ) ;
        //document.write( '<form action="" method="get" id="'+ nForm +'">' ) ;
        //document.write( this.sMiTexto ) ;
        //document.write('<input type="submit" value="Submit"></form>') ;
        return tHtml ;
    }

    this.pintaArbol_bck2 = function( nivel , nForm , $ramaEspecial = -1 ){
    //this.pintaArbol = function( nivel , nForm , $ramaEspecial = -1 ){
        var nodoInicial = this.raiz ;
        this.sMiTexto = "" ;
        var tHtml = "<br>ORGANIGRAMA<br>Orig/Dest" ;
        tHtml += '<form action="" method="get" id="'+ nForm +'">' ;
        //this.pintaArbol1( nodoInicial , nivel , "" , "" ) ;   

        this.pintaArbol1( nodoInicial , nivel , "" , $ramaEspecial ) ;
        tHtml += this.sMiTexto ;
        tHtml += '<br><button  type="button" onclick="organigrama.clickCambiaNivel(-1)">Nivel --</button>' ;
        tHtml += '<button  type="button" onclick="organigrama.clickCambiaNivel(1)">Nivel ++</button>' ;
        tHtml += ' Niveles: ' + $gProfundidad + ' ' ;
        tHtml += '<br><button  type="button" onclick="organigrama.archivar( 1 )">Archivar</button>' ;
        tHtml += '<button  type="button" onclick="organigrama.archivar( 2 )">Recuperar</button>' ;
        tHtml += '<button  type="button" onclick="organigrama.html()">Inicio</button>' ;
        tHtml += '<br><button  type="button" onclick="organigrama.clickArmaGrupos2()">Generar listados de Evaluación</button>' ;
       
        
        tHtml += '</form>' ; 

        tHtml += '<br><form action="js_canal.php" method="post" name="miPrueba1" onsubmit="return organigrama.clickArchiva(1)">' ;
        tHtml += '<input type="submit" value="ARCHIVAR Organigrama Servidor">' ;
        var d = new Date();
        var t= d.getTime();
        tHtml += '<a href="edita_organigrama2.html?tiempo=' + t + '">Recargar página sin caché</a>' ;


        tHtml += '<input type="hidden" id="php_nombre" name="php_nombre" value="">' ;
        tHtml += '<input type="hidden" id="php_prueba" name="php_prueba" value="">' ;
        tHtml += '<input type="hidden" id="php_estado" name="php_estado" value="">' ;
        tHtml += '</form>' ; 

        tHtml += '<br><br>' ;
        //tHtml += '<input type="submit" value="Volver"></form>'
        //document.write( "<br>ORGANIGRAMA EN pintaArbol <br>" ) ;
        //document.write( '<form action="" method="get" id="'+ nForm +'">' ) ;
        //document.write( this.sMiTexto ) ;
        //document.write('<input type="submit" value="Submit"></form>') ;
        return tHtml ;
    }

    this.pintaArbol_back = function( nivel , nForm){
        nodoInicial = this.raiz ;
        this.sMiTexto = "" ;
        texto = this.pintaArbol1( nodoInicial , nivel , "" , "" ) ;
        document.write( "<br>ORGANIGRAMA EN pintaArbol <br>" ) ;
        document.write( '<form action="" method="get" id="'+ nForm +'">' ) ;
        document.write( this.sMiTexto ) ;
        document.write('<input type="submit" value="Submit"></form>') ;
        return texto ;
    }

    //20200302: esta versión de pintaarbol está enfocada a la funcionalidad de archivo
    this.pintaArbol2 = function( nivel , nForm){
        var nodoInicial = this.raiz ;
        this.sMiTexto = "" ;
        var texto = "" ;
        //var texto = "<br>ORGANIGRAMA PARA ARCHIVAR<br>" ;
        
        //texto += '<form action="" method="get" id="'+ nForm +'" onsubmit="guardaObjeto( jerarquia )">' ;
        this.pintaArbol1( nodoInicial , nivel , "" , "" ) ;
        texto += this.sMiTexto ;
        //texto += '<input type="submit" value="Archivar"></form>'
        
        
        //document.write( "<br>ORGANIGRAMA EN pintaArbol <br>" ) ;
        //document.write( '<form action="" method="get" id="'+ nForm +'">' ) ;
        //document.write( this.sMiTexto ) ;
        //document.write('<input type="submit" value="Submit"></form>') ;
        return texto ;
    }

    this.prueba_arrDatos = function( posi ){
        console.log( "this.prueba_arrDatos:" + this.arrDatos[posi].nombre + " en posicion:" + posi ) ;
    }

    //this.iteraFuncionArbol0 = function( $sMetodo ){: estaba ensayando a ver si lograba una función por apuntador pero parece que aunque arranca, claramente no funciona el "myself" porque la que meti no es una funcion de objeto
    this.iteraFuncionArbol0 = function( $sMetodo ){
        nodoInicial = this.raiz ;
        var result = this.iteraFuncionArbol( nodoInicial , $sMetodo , $sMetodo ) ;
        console.log( "<br>Saliendo iteraFuncionArbol0 <br>" ) ;
        
        return result ;
    }

    //this.iteraFuncionArbol = function( nodo , $sMetodoNodo , $sMetodo ){: estaba ensayando a ver si lograba una función por apuntador pero parece que aunque arranca, claramente no funciona el "myself" porque la que meti "tempo" no es una funcion de objeto
    this.iteraFuncionArbol = function( nodo , $sMetodoNodo , $sMetodo ){
        console.log("entro a this.iteraFuncionArbol") ;
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        var resultado = 0 ;
        var resultado1 ;
        var i = 0 ;
        var myself = this ;
        if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
            for ( i = 0 ; i < nodo.hijos.length ; i++ ){
                resultado1 = this.iteraFuncionArbol( nodo.hijos[i] , $sMetodoNodo , $sMetodo ) ;
                resultado = $sMetodo( resultado , resultado1 ) ;
            }
            resultado1 = $sMetodoNodo( pos , myself ) ;
            resultado = $sMetodo( resultado , resultado1 ) ;
        }else{ //el nodo es una hoja            
            resultado = $sMetodoNodo( pos , myself ) ;
        }
        this.arrResult[pos] = resultado ;
        return resultado ;
    }

    this.sumaSueldoTotalArbol = function( sfuncion ){
        nodoInicial = this.raiz ;
        var result = this.sumaSueldoTotalArbol1( nodoInicial , sfuncion ) ;
        console.log( "<br>Saliendo sumaSueldoTotalArbol <br>" ) ;
        
        return result ;
    }

    this.sumaSueldoTotalArbol1 = function( nodo , sfuncion ){
        console.log("this.sumaSueldoTotalArbol1 ruta:" + nodo.ruta ) ;
        var pos = this.buscaPosNodo( nodo.ruta ) ;
        console.log("this.sumaSueldoTotalArbol1 iniciando pos:" + pos ) ;
        //var texto = sPad + nodo.ruta + ":" + this.arrDatos[pos].nombre + "<br>" ;
        //var texto = sPad + nodo.ruta + ":" + "<br>" ;
        //this.sMiTexto = this.sMiTexto + texto ; 
        //document.write( " nivel: " + nivel + " " + texto  ) ;
        //var texto2 = "" ;
        //document.write ("antes del for texto: " + texto ) ;
        var resultado = 0 ;
        var resultado1 = 0 ;
        console.log( this.arrDatos[pos] ) ;
        if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
            for ( var i = 0 ; i < nodo.hijos.length ; i++ ){
                resultado1 = this.sumaSueldoTotalArbol1( nodo.hijos[i] , sfuncion ) ;
                resultado = resultado1 + resultado ;                
                //document.write ("dentro del for texto2: " + texto2 ) ;
                //document.write ("dentro del for texto: " + texto ) ;
            }
            if ( this.arrDatos[pos].ocupado == "true" ){ //el cargo si está ocupado
              //resultado1 = this.sumaSueldoTotalArbol1( nodo.hijos[i] , sfuncion ) ;
              //resultado = resultado + this.arrDatos[pos].sueldoTotal ;
              resultado = resultado + parseFloat( this.arrDatos[pos].sueldoTotal ) ;
              console.log("this.sumaSueldoTotalArbol1 sueldoTotal" + this.arrDatos[pos].sueldoTotal) ;
            }
            this.arrResult[pos] = resultado ;
            console.log("this.sumaSueldoTotalArbol1 saliendo pos:" + pos + " result:" + resultado ) ;
            return resultado ;
        }else{ //el nodo es una hoja            
            if ( this.arrDatos[pos].ocupado == "true" ){ //el cargo si está ocupado
                //resultado = this.arrDatos[pos].sueldoTotal ;
                resultado = parseFloat( this.arrDatos[pos].sueldoTotal ) ;
                console.log("this.sumaSueldoTotalArbol1 sueldoTotal" + this.arrDatos[pos].sueldoTotal) ;
                //resultado = sfuncion( this.arrDatos[pos] ) ;  //20200123: ensayo fallido de usar función en variable                
            }else{
                resultado = 0 ;
            }
            this.arrResult[pos] = resultado ;
            console.log("this.sumaSueldoTotalArbol1 saliendo pos:" + pos + " result:" + resultado ) ;
            return resultado ;            
        }        
    }

    //this.promSueldoTotalArbol = function( sfuncion ) no sirve porque no cuenta bien los nodos
    this.cuentaOcupadosArb = function( sfuncion ){
      //console.log("this.cuentaOcupadosArb entrando" ) ;  
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
            if ( this.arrDatos[pos].ocupado == "true" ){ //el cargo si está ocupado
                resultado++ ;
            }            
            this.arrResult[pos] = resultado ;
            return resultado ;
        }else{ //el nodo es una hoja
            if ( this.arrDatos[pos].ocupado == "true" ){ //el cargo si está ocupado
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

    //this.htmlTotal = function(){: no usar, hice una función que pinta todo seguido
    this.htmlTotal = function(){
      
      var $tHtml = "" ;
      //$tHtml += "Suma de tempo_tempo<br>" ;
      //this.iteraFuncionArbol0( "tempo" ) ;
      //$tHtml += this.pintaResult() ;
      
      
      $tHtml += "Suma de Sueldos<br>" ;
      this.sumaSueldoTotalArbol() ;
      var arrArriba = [] ;
      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        //this.prueba_arrResult( i ) ;
        arrArriba[i] = this.arrResult[i] ;
      }
      $tHtml += this.pintaResult() ;
      
      $tHtml += "Suma de Personas (pax)<br>"
      this.cuentaOcupadosArb() ;
      var arrAbajo = [] ;
      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        //this.prueba_arrResult( i ) ;
        arrAbajo[i] = this.arrResult[i] ;
      }
      $tHtml += this.pintaResult() ;

      console.log("arrArriba" + arrArriba) ;
      console.log("arrAbajo" + arrAbajo) ;

      $tHtml += "Promedios Salariales<br>"
      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        this.arrResult[i] = arrArriba[i] / arrAbajo[i]  ;
      }
      $tHtml += this.pintaResult() ;



      document.getElementById("salidaHtml").innerHTML = $tHtml ;
    }

    this.htmlSueldos = function(){
      console.log("this.htmlSueldos") ;
      this.cuentaOcupadosArb() ;
      var $arrSalida = [] ;
      var arrAbajo = [] ;
      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        arrAbajo[i] = this.arrResult[i] ;
      }

      this.sumaSueldoTotalArbol() ;
      var arrArriba = [] ;
      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        //this.prueba_arrResult( i ) ;
        arrArriba[i] = this.arrResult[i] ;
      }

      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        this.arrResult[i] = arrArriba[i] / arrAbajo[i]  ;
      }

      for (var i = 0 ; i < this.arrResult.length ; i++ ){
        var $elem = {} ;
        $elem.posic = i ;
        $elem.ruta =  this.arrRutaN[i] ;
        $elem.nombre = this.arrDatos[i].nombre ;
        $elem.sueldo = this.arrDatos[i].sueldoTotal ;
        $elem.pax =  arrAbajo[i] ;
        $elem.total_area =  arrArriba[i] ;
        $elem.prom_area =  this.arrResult[i] ;
        $arrSalida[i] = $elem ;
      }

      var $tHtml = pinta_arreglo( $arrSalida ) ;
      document.getElementById("salidaHtml").innerHTML = $tHtml ;
    }
   
    this.prueba_arrResult = function( posi ){
      var $elem = {} ;
      console.log( "this.prueba_arrResult:" + this.arrResult[posi] + " en posicion:" + posi + " ruta:" + this.arrRutaN[posi] + " nombre:" + this.arrDatos[posi].nombre ) ;
      
      $elem.posic = posi ;
      $elem.nombre = this.arrDatos[posi].nombre ;
      $elem.sueldo = this.arrDatos[posi].sueldoTotal ;
      $elem.ruta =  this.arrRutaN[posi] ;
      $elem.result =  this.arrResult[posi] ;
      console.log( $elem ) ;
      return $elem ;
    }

    this.pintaResult = function(){
        var $arrSalida = [] ;
        var tHtml = "" ;

        console.log( "this.prueba_arrResult:" + this.arrResult ) ;
        console.log( "this.prueba_arrRuta:" + this.arrRutaN ) ;
        for (var i = 0 ; i < this.arrResult.length ; i++ ){
          //this.prueba_arrResult( i ) ;
          $arrSalida[i] = this.prueba_arrResult( i ) ;
        }

        console.log( $arrSalida ) ;
        tHtml += pinta_arreglo( $arrSalida ) ;

        // tHtml += "<table><tr>" ;
        // var $elem =  $arrSalida[0] ;
        // for (var $propiedad in $elem ) {
        //   tHtml += "<th>" + $propiedad + "</th>" ;
        // }
        // tHtml += "</tr>" ;

        // for (var i = 0 ; i < $arrSalida.length ; i++ ){
        //   var $elem =  $arrSalida[i] ;
        //   tHtml += "<tr>" ;
        //   for (var $propiedad in $elem ) {
        //     tHtml += "<td>" + $elem[$propiedad] + "</td>" ;
        //   }
        //   tHtml += "</tr>" ;
        // }
        // tHtml += "</table>" ;

        return tHtml ;
    }

    this.escogeDatos = function( $oDatos ){
        var $salida = {} ;
        $salida.n = $oDatos.nombre ;
        $salida.c = $oDatos.correo ;
        $salida.i = $oDatos.id ;
        //console.log("salida", $salida) ;
        //alert("$salida") ;
        return JSON.stringify( $salida ) ;
    }

    this.muestraEvaluaciones = function( $arrlistadosmios , $siboton = 1 ){

        var $arrControl = [] ;
        var $arrConteo = [] ;
        var $arrlistas = $arrlistadosmios ;
        var $tot = 0 ;

        var $tHtml = "" ;
        //console.log ("clickArmaGrupos2 $arrlistas" , $arrlistas ) ;
                
        for ( $elem of $arrlistas ){
            $tHtml += "<br>evaluados por: " + $elem["estud"] + " : " + $elem["arrTarg"].length + " : " ;
            for ( $elem2 of  $elem["arrTarg"] ){
                $tHtml += '<br>+++ examinado:' +  $elem2 ;
                $i = $arrControl.indexOf( $elem2 ) ;
                if ( $i == -1 ){ //revisa que el nodo no esté agregado antes
                    $arrControl.push( $elem2 ) ;
                    $i = $arrControl.length - 1
                    $arrConteo[$i] = 1 ;
                }else{
                    $arrConteo[$i]++ ;
                }
                $tot++ ;
            }
        }
        $tHtml += "<br>" ;
        for ( $i = 0 ; $i < $arrControl.length ; $i++ ){
            $tHtml += "<br> evaluadores: " +  $arrConteo[$i] + " : " + $arrControl[$i] ;
        }

        $tHtml += '<br>Total de evaluadores: ' + $arrControl.length ;
        $tHtml += '<br>Que realizan un total de evaluaciones: ' + $tot ;

        if ( $siboton == 0 ){
            //nada
        }else{
            $tHtml += '<br><button  type="button" onclick="organigrama.clickQuitaEvaluado()">Quitar Evaluado</button><input type="text" name="aquitar" id="aquitar" size=5><br>' ;
        }
        
        document.getElementById( "salida2" ).innerHTML = $tHtml ;
    }

    //this.clickQuitaEvaluado =  function(){ acción del botón que sirve para quitar a uno de los evaluados
    this.clickQuitaEvaluado =  function(){
        var $i =  document.getElementById( "aquitar" ).value ;
        this.quitaEvaluado(  $i ) ;
    }

    this.quitaEvaluado =  function(  $iQuitar ){
        var $arrlistado2 = [] ;
        var $tHtml = "" ;
        var $arrlistas =  this.arrListaEvaluaciones ;
        for ( $elem of $arrlistas ){
            var $arrTarget2 = [] ;
            for ( $elem2 of $elem["arrTarg"] ){
                $obj1 = JSON.parse( $elem2 ) ;
                if ( $obj1.i != $iQuitar ){
                    $arrTarget2.push( $elem2 ) ;
                }
            }
            var $newElem = {} ;
            $newElem["estud"] = $elem["estud"] ;
            $newElem["arrTarg"] = $arrTarget2 ;
            $arrlistado2.push( $newElem ) ;
        }
        this.arrListaEvaluaciones = $arrlistado2 ;

        this.muestraEvaluaciones( this.arrListaEvaluaciones ) ;
        this.pintaEvalJSON( this.arrListaEvaluaciones ) ;
        /*
        $arrlistas =  this.arrListaEvaluaciones ;
        for ( $elem of $arrlistas ){
            $tHtml += "<br>evaluados: " +  $elem["arrTarg"].length + " : " + $elem["estud"] ;
            for ( $elem2 of  $elem["arrTarg"] ){
                $i = $arrControl.indexOf( $elem2 ) ;
                if ( $i == -1 ){ //revisa que el nodo no esté agregado antes
                    $arrControl.push( $elem2 ) ;
                    $i = $arrControl.length - 1
                    $arrConteo[$i] = 1 ;
                }else{
                    $arrConteo[$i]++ ;
                }
            }
        }
        $tHtml += "<br>" ;
        for ( $i = 0 ; $i < $arrControl.length ; $i++ ){
            $tHtml += "<br> evaluadores: " +  $arrConteo[$i] + " : " + $arrControl[$i] ;
        }

        $tHtml += '<br><button  type="button" onclick="organigrama.clickQuitaEvaluado()">Quitar Evaluado</button><input type="text" name="aquitar" id="aquitar" size=5><br>' ;

        document.getElementById( "salida2" ).innerHTML = $tHtml ;
        */
    }

    this.clickArmaGrupos2 = function(){
        var $num = prompt("Número de evaluaciones por cargo:") ;
        var $arrlistas = [] ;
        var $arrControl = [] ;
        var $arrConteo = [] ;

        $num = parseInt( $num ) ;
        if ( isNaN(  $num )){ //error de input
            alert("ERROR: debe digitar un número entero") ;
        }else{
            var $num2 = prompt("Número de evaluaciones fuera del equipo directo:") ;
            $num2 = parseInt( $num2 ) ;
            if ( isNaN(  $num2 )){ //error de input
                alert("ERROR: debe digitar un número entero") ;
            }else{
                $arrlistas = this.armaGrupos2( $num , $num2 ) ;
                this.arrListaEvaluaciones = $arrlistas ;
                this.pintaEvalJSON( $arrlistas ) ;
                var $tHtml = "Pruebas Totales:" +  $num + "<br>Pruebas Externas:" + $num2 ;
                console.log ("clickArmaGrupos2 $arrlistas" , $arrlistas ) ;
                this.muestraEvaluaciones( this.arrListaEvaluaciones ) ;
                /*
                for ( $elem of $arrlistas ){
                    $tHtml += "<br>evaluados por: " + $elem["estud"] + " : " + $elem["arrTarg"].length + " : " ;
                    for ( $elem2 of  $elem["arrTarg"] ){
                        $tHtml += '<br>+++ examinado:' +  $elem2 ;
                        $i = $arrControl.indexOf( $elem2 ) ;
                        if ( $i == -1 ){ //revisa que el nodo no esté agregado antes
                            $arrControl.push( $elem2 ) ;
                            $i = $arrControl.length - 1
                            $arrConteo[$i] = 1 ;
                        }else{
                            $arrConteo[$i]++ ;
                        }
                    }
                }
                $tHtml += "<br>" ;
                for ( $i = 0 ; $i < $arrControl.length ; $i++ ){
                    $tHtml += "<br> evaluadores: " +  $arrConteo[$i] + " : " + $arrControl[$i] ;
                }

                $tHtml += '<br><button  type="button" onclick="organigrama.clickQuitaEvaluado()">Quitar Evaluado</button><input type="text" name="aquitar" id="aquitar" size=5><br>' ;

                document.getElementById( "salida2" ).innerHTML = $tHtml ;
                */
            }
        }
    }

    this.clickArmaGrupos = function(){
        var $num = prompt("Número de evaluaciones por cargo:") ;
        var $arrlistas = [] ;
        $num = parseInt( $num ) ;
        if ( isNaN(  $num )){ //error de input
            alert("ERROR: debe digitar un número entero") ;
        }else{
            $arrlistas = this.armaGrupos($num) ;
            this.pintaEvalJSON( $arrlistas ) ;
        }
    }

    this.armaGrupos2 = function( maximo , maxotros ){
        var arr1 = [] ;
        var arr2 = [] ;
        
        var pos ;
        for ( miRuta of this.arrRutaN ){
            var $elem = {} ;
            var $temp ;
            arr1 = organigrama.escogeEncuestados4( miRuta , maximo , maxotros ) ;
            pos = this.buscaPosNodo( miRuta ) ;
            $elem.estud = this.escogeDatos( this.arrDatos[pos] ) ;
            //$elem.targ = arr1[1] ;
            //$elem.arrTarg = $elem.targ.split(";") ;
            $temp = arr1[1] ;
            $elem.arrTarg = $temp.split(";") ;
            
            arr2.push(  $elem ) ;
            //console.log( "armaGrupos arr2", arr2 ) ;
        }
        return arr2 ;
    }

    this.armaGrupos = function( maximo ){
        var arr1 = [] ;
        var arr2 = [] ;
        
        var pos ;
        for ( miRuta of this.arrRutaN ){
            var $elem = {} ;
            var $temp ;
            arr1 = organigrama.escogeEncuestados3( miRuta , maximo ) ;
            pos = this.buscaPosNodo( miRuta ) ;
            $elem.estud = this.escogeDatos( this.arrDatos[pos] ) ;
            //$elem.targ = arr1[1] ;
            //$elem.arrTarg = $elem.targ.split(";") ;
            $temp = arr1[1] ;
            $elem.arrTarg = $temp.split(";") ;
            
            arr2.push(  $elem ) ;
            //console.log( "armaGrupos arr2", arr2 ) ;
        }
        return arr2 ;
    }

    //this.escogeEncuestados4 = function( rutaNodo , maximo , maxotros ): maximo>indica la cantidad de evaluaciones que se deben incorporar incluyendo los nodos básicos y subalternos. maxotros:indica la cantidad de evlauciones que se deben incorporar aparte del grupo básico, sublaternos y sub-subalternos

    this.escogeEncuestados4 = function( rutaNodo , maximo , maxotros ){ //máximo > 2
        console.log("this.escogeEncuestados4 ruta:" + rutaNodo ) ;
        var nodo = this.buscaNodo( rutaNodo ) ;
        var pos = this.buscaPosNodo( rutaNodo ) ;
        var cont = 1 ;
        var $cont2 = 0 ;
        var pos2 ;
        var sTexto ;
        var sEmails ;
        //var arrFinal = [] ; 

        //arrFinal.push( this.escogeDatos( this.arrDatos[pos] )) ;
        //sEmails = this.arrDatos[pos].correo ; //correo propio
        sEmails = this.escogeDatos( this.arrDatos[pos] ) ;
        if ( nodo.padre != null ){ //si tiene nodo padre
            pos2 = this.buscaPosNodo( nodo.padre.ruta ) ;
            //sTexto = this.arrDatos[pos2].correo ; //correo del papa
            sTexto = this.escogeDatos( this.arrDatos[pos2] ) ; // del papa
            sEmails = sEmails + ";" + sTexto ;
            //arrFinal.push( this.escogeDatos( this.arrDatos[pos2] )) ;
            cont++ ;
        }
        var i = 0 ;
        var j = 0 ;
        var k = 0 ;
        var $okSiga = true ;
        //var arrTemp = nodo.hijos.slice();
        var arrTemp = nodo.hijos ;
        //var arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        var arrSalida = this.randomEmail2( arrTemp , 52 , cont , sEmails ) ; //estos parametros hacen que evalue todos los hijos (hasta maximo 50) independiente de maximo
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        //arrFinal =  arrFinal.concat( arrSalida[2] );
        if ( cont >= maximo ){ //ya se completó el grupo a encuestar
            $okSiga = false ;
            if ( $cont2 >= maxotros ){
                return arrSalida ;
            }
        }
        //llegando acá se buscan los nietos
        console.log("escogeEncuestados4 nodo.hijos:" + nodo.hijos ) ;
        if (( nodo.proxHijo > 0 ) && ( $okSiga )  ){ //el nodo tiene hijos, no es una hoja
            //si llega acá toca buscar hijos indirectos es decir los nietos
            //además no aha completado el número cont requerido
            j = 0 ;
            k = 0 ;
            arrTemp = [] ;
            for ( i = 0 ; i < nodo.hijos.length ; i++ ){ //aca voy a escoger los nietos                
                if ( nodo.hijos[i].proxHijo > 0 ){ //tiene subhijos (nietos)
                    for ( j = 0 ; j < nodo.hijos[i].hijos.length ; j++  ){
                        arrTemp[k] = nodo.hijos[i].hijos[j] ;
                        k++ ;    
                    }                                        
                }
            }            
            /* 
            arrSalida = this.randomEmail( arrTemp , maximo - cont ) ;
            console.log("escogeEncuestados4 arrSalida despues de nietos:" + arrSalida[1] ) ;
            cont += arrSalida[0] ;
            sEmails = arrSalida[1] ;
            */
            //arrTemp tiene todos los nietos del nodo
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                if ( $cont2 >= maxotros ){
                    //var salida = [ cont , sEmails ] ;
                    return arrSalida ;
                }
            }
        }
        //llegando acá se buscan los hermanos
        //document.write( "<br>escogeEncuestados2 hijos+nietos:" + sEmails ) ;
        console.log("escogeEncuestados4 hijos+nietos:" + sEmails ) ;
        if ( nodo.padre == null ){ //no tiene nodo padre, no tiene sentido seguir
            //var salida = [ cont , sEmails ] ;
            return arrSalida ;
        }
        //al llegar acá se ha verificado que tiene padre
        arrTemp = [] ;
        j= 0 ;        
        for ( i = 0 ; i < nodo.padre.hijos.length ; i++ ){ //aca voy a escoger los hermanos
            if ( i != nodo.soyNum ){ //verificar que no me escoja a mismo
                arrTemp[j] = nodo.padre.hijos[i] ;
                j++ ;
            }
        }

        //aca se requiere redefinir maximo para tener en cuenta el valor de maxotros
        var $nuevoMax = cont + maxotros ;
        if ( maximo < $nuevoMax ){
            maximo = $nuevoMax ;
        }else{
            //nada, maximo se mantiene
        }

        arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        if ( cont >= maximo ){ //ya se completó el grupo a encuestar
            //var salida = [ cont , sEmails ] ;
            return arrSalida ;
        }
        //llegando acá necesitamos buscar los primos, los verdaderos primos
        arrTemp = [] ;
        k = 0 ;
        if (nodo.padre.padre != null ){  // verificando la posibilidad de tener primos
            for ( i = 0 ; i < nodo.padre.padre.hijos.length ; i++ ){ //escogiendo a todos mis tios
                if ( i != nodo.padre.soyNum ){ //excluyendo a mi padre
                    for ( j= 0 ; j < nodo.padre.padre.hijos[i].hijos.length ; j++ ){
                        arrTemp[k] = nodo.padre.padre.hijos[i].hijos[j] ;
                        k++ ;
                    }
                }
            }
            //arrTemp tiene a todos mis primos
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            console.log("escogeEncuestados4 arrSalida despues de primos:" + arrSalida[1] ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                return arrSalida ;
            }
                        
            //llegando acá no alcanzaron los primos tampoco, vamos por los tios
            arrTemp = [] ;
            j = 0 ;
            for ( i = 0 ; i < nodo.padre.padre.hijos.length ; i++ ){ //escogiendo a todos mis tios
                if ( i != nodo.padre.soyNum ){ //excluyendo a mi padre
                    arrTemp[j] = nodo.padre.padre.hijos[i] ;
                    j++ ;
                }
            }
            //arrTemp tiene todos los tios
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            console.log("escogeEncuestados4 arrSalida despues de tios:" + arrSalida[1] ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                return arrSalida ;
            }
        }
        //llegando acá decidimos buscar los sobrinos como última opción
        arrTemp = [] ;
        k = 0 ;
        for ( i = 0 ; i < nodo.padre.hijos.length ; i++ ){ //aca voy a escoger los nietos
            if ( i != nodo.soyNum ){ //verificar que no me escoja a mismo
                for ( j = 0 ; j < nodo.padre.hijos[i].hijos.length ; j++  ){
                    arrTemp[k] = nodo.padre.hijos[i].hijos[j] ;
                    k++ ;
                }
            }            
        }
        //arrTemp tiene todos los sobrinos
        arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        return arrSalida ;  //ya devuelve lo que haya asi no este completo el maximo
    }

    this.escogeEncuestados3 = function( rutaNodo , maximo ){ //máximo > 2
        console.log("this.escogeEncuestados3 ruta:" + rutaNodo ) ;
        var nodo = this.buscaNodo( rutaNodo ) ;
        var pos = this.buscaPosNodo( rutaNodo ) ;
        var cont = 1 ;
        var pos2 ;
        var sTexto ;
        var sEmails ;
        //var arrFinal = [] ; 

        //arrFinal.push( this.escogeDatos( this.arrDatos[pos] )) ;
        sEmails = this.arrDatos[pos].correo ; //correo propio
        sEmails = this.escogeDatos( this.arrDatos[pos] ) ;
        if ( nodo.padre != null ){ //si tiene nodo padre
            pos2 = this.buscaPosNodo( nodo.padre.ruta ) ;
            sTexto = this.arrDatos[pos2].correo ; //correo del papa
            sTexto = this.escogeDatos( this.arrDatos[pos2] ) ; // del papa
            sEmails = sEmails + ";" + sTexto ;
            //arrFinal.push( this.escogeDatos( this.arrDatos[pos2] )) ;
            cont++ ;
        }
        var i = 0 ;
        var j = 0 ;
        var k = 0 ;
        //var arrTemp = nodo.hijos.slice();
        var arrTemp = nodo.hijos ;
        var arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        //arrFinal =  arrFinal.concat( arrSalida[2] );
        if ( cont >= maximo ){ //ya se completó el grupo a encuestar
            return arrSalida ;
        }
        //llegando acá se buscan los nietos
        console.log("escogeEncuestados3 nodo.hijos:" + nodo.hijos ) ;
        if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
            //si llega acá toca buscar hijos indirectos es decir los nietos
            j = 0 ;
            k = 0 ;
            arrTemp = [] ;
            for ( i = 0 ; i < nodo.hijos.length ; i++ ){ //aca voy a escoger los nietos                
                if ( nodo.hijos[i].proxHijo > 0 ){ //tiene subhijos (nietos)
                    for ( j = 0 ; j < nodo.hijos[i].hijos.length ; j++  ){
                        arrTemp[k] = nodo.hijos[i].hijos[j] ;
                        k++ ;    
                    }                                        
                }
            }            
            /* 
            arrSalida = this.randomEmail( arrTemp , maximo - cont ) ;
            console.log("escogeEncuestados3 arrSalida despues de nietos:" + arrSalida[1] ) ;
            cont += arrSalida[0] ;
            sEmails = arrSalida[1] ;
            */
            //arrTemp tiene todos los nietos del nodo
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                var salida = [ cont , sEmails ] ;
                return salida ;
            }
        }
        //llegando acá se buscan los hermanos
        //document.write( "<br>escogeEncuestados2 hijos+nietos:" + sEmails ) ;
        console.log("escogeEncuestados3 hijos+nietos:" + sEmails ) ;
        if ( nodo.padre == null ){ //no tiene nodo padre, no tiene sentido seguir
            var salida = [ cont , sEmails ] ;
            return salida ;
        }
        //al llegar acá se ha verificado que tiene padre
        arrTemp = [] ;
        j= 0 ;        
        for ( i = 0 ; i < nodo.padre.hijos.length ; i++ ){ //aca voy a escoger los hermanos
            if ( i != nodo.soyNum ){ //verificar que no me escoja a mismo
                arrTemp[j] = nodo.padre.hijos[i] ;
                j++ ;
            }
        }
        /* 
        arrSalida = this.randomEmail( arrTemp , maximo - cont ) ;
        console.log("escogeEncuestados3 arrSalida despues de hermanos:" + arrSalida[1] ) ;
        cont += arrSalida[0] ;
        sEmails +=  arrSalida[1] ; 
        */
        arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        if ( cont >= maximo ){ //ya se completó el grupo a encuestar
            var salida = [ cont , sEmails ] ;
            return salida ;
        }
        //llegando acá necesitamos buscar los primos, los verdaderos primos
        arrTemp = [] ;
        k = 0 ;
        if (nodo.padre.padre != null ){  // verificando la posibilidad de tener primos
            for ( i = 0 ; i < nodo.padre.padre.hijos.length ; i++ ){ //escogiendo a todos mis tios
                if ( i != nodo.padre.soyNum ){ //excluyendo a mi padre
                    for ( j= 0 ; j < nodo.padre.padre.hijos[i].hijos.length ; j++ ){
                        arrTemp[k] = nodo.padre.padre.hijos[i].hijos[j] ;
                        k++ ;
                    }
                }
            }
            //arrTemp tiene a todos mis primos
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            console.log("escogeEncuestados3 arrSalida despues de primos:" + arrSalida[1] ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                return arrSalida ;
            }
                        
            //llegando acá no alcanzaron los primos tampoco, vamos por los tios
            arrTemp = [] ;
            j = 0 ;
            for ( i = 0 ; i < nodo.padre.padre.hijos.length ; i++ ){ //escogiendo a todos mis tios
                if ( i != nodo.padre.soyNum ){ //excluyendo a mi padre
                    arrTemp[j] = nodo.padre.padre.hijos[i] ;
                    j++ ;
                }
            }
            //arrTemp tiene todos los tios
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            console.log("escogeEncuestados3 arrSalida despues de tios:" + arrSalida[1] ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                return arrSalida ;
            }
        }
        //llegando acá decidimos buscar los sobrinos como última opción
        arrTemp = [] ;
        k = 0 ;
        for ( i = 0 ; i < nodo.padre.hijos.length ; i++ ){ //aca voy a escoger los nietos
            if ( i != nodo.soyNum ){ //verificar que no me escoja a mismo
                for ( j = 0 ; j < nodo.padre.hijos[i].hijos.length ; j++  ){
                    arrTemp[k] = nodo.padre.hijos[i].hijos[j] ;
                    k++ ;
                }
            }            
        }
        //arrTemp tiene todos los sobrinos
        arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        return arrSalida ;  //ya devuelve lo que haya asi no este completo el maximo
    }

    //this.escogeEncuestados2: gener un texto con la lista de los emails que debe calificar rutaNodo
    this.escogeEncuestados2 = function( rutaNodo , maximo ){ //máximo > 2
        document.write("<br>this.escogeEncuestados2 ruta:" + rutaNodo ) ;
        console.log("this.escogeEncuestados2 ruta:" + rutaNodo ) ;
        var nodo = this.buscaNodo( rutaNodo ) ;
        var pos = this.buscaPosNodo( rutaNodo ) ;
        var sEmails = this.arrDatos[pos].correo ; //correo propio
        var cont = 1 ;
        if ( nodo.padre != null ){ //si tiene nodo padre
            var pos2 = this.buscaPosNodo( nodo.padre.ruta ) ;
            var sTexto = this.arrDatos[pos2].correo ; //correo del papa
            var sEmails = sEmails + ";" + sTexto ;
            cont++ ;
        }
        var i = 0 ;
        var j = 0 ;
        var k = 0 ;
        //var arrTemp = nodo.hijos.slice();
        var arrTemp = nodo.hijos ;
        var arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        if ( cont >= maximo ){ //ya se completó el grupo a encuestar
            return arrSalida ;
        }
        //llegando acá se buscan los nietos
        console.log("escogeEncuestados2 nodo.hijos:" + nodo.hijos ) ;
        if ( nodo.proxHijo > 0 ){ //el nodo tiene hijos, no es una hoja
            //si llega acá toca buscar hijos indirectos es decir los nietos
            j = 0 ;
            k = 0 ;
            arrTemp = [] ;
            for ( i = 0 ; i < nodo.hijos.length ; i++ ){ //aca voy a escoger los nietos                
                if ( nodo.hijos[i].proxHijo > 0 ){ //tiene subhijos (nietos)
                    for ( j = 0 ; j < nodo.hijos[i].hijos.length ; j++  ){
                        arrTemp[k] = nodo.hijos[i].hijos[j] ;
                        k++ ;    
                    }                                        
                }
            }
            //arrTemp tiene todos los nietos del nodo
            arrSalida = this.randomEmail( arrTemp , maximo - cont ) ;
            console.log("escogeEncuestados2 arrSalida despues de nietos:" + arrSalida[1] ) ;
            sEmails = sEmails + arrSalida[1] ; //cont vale 2
            cont += arrSalida[0] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                var salida = [ cont , sEmails ] ;
                return salida ;
            }
        }
        //llegando acá se buscan los hermanos
        //document.write( "<br>escogeEncuestados2 hijos+nietos:" + sEmails ) ;
        console.log("escogeEncuestados2 hijos+nietos:" + sEmails ) ;
        if ( nodo.padre == null ){ //no tiene nodo padre, no tiene sentido seguir
            var salida = [ cont , sEmails ] ;
            return salida ;
        }
        //al llegar acá se ha verificado que tiene padre
        arrTemp = [] ;
        j= 0 ;        
        for ( i = 0 ; i < nodo.padre.hijos.length ; i++ ){ //aca voy a escoger los hermanos
            if ( i != nodo.soyNum ){ //verificar que no me escoja a mismo
                arrTemp[j] = nodo.padre.hijos[i] ;
                j++ ;
            }
        }
        arrSalida = this.randomEmail( arrTemp , maximo - cont ) ;
        console.log("escogeEncuestados2 arrSalida despues de hermanos:" + arrSalida[1] ) ;
        sEmails = sEmails + arrSalida[1] ; 
        cont += arrSalida[0] ;
        if ( cont >= maximo ){ //ya se completó el grupo a encuestar
            var salida = [ cont , sEmails ] ;
            return salida ;
        }
        //llegando acá necesitamos buscar los primos, los verdaderos primos
        arrTemp = [] ;
        k = 0 ;
        if (nodo.padre.padre != null ){  // verificando la posibilidad de tener primos
            for ( i = 0 ; i < nodo.padre.padre.hijos.length ; i++ ){ //escogiendo a todos mis tios
                if ( i != nodo.padre.soyNum ){ //excluyendo a mi padre
                    for ( j= 0 ; j < nodo.padre.padre.hijos[i].hijos.length ; j++ ){
                        arrTemp[k] = nodo.padre.padre.hijos[i].hijos[j] ;
                        k++ ;
                    }
                }
            }
            //arrTemp tiene a todos mis primos
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            console.log("escogeEncuestados2 arrSalida despues de primos:" + arrSalida[1] ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                return arrSalida ;
            }
                        
            //llegando acá no alcanzaron los primos tampoco, vamos por los tios
            arrTemp = [] ;
            j = 0 ;
            for ( i = 0 ; i < nodo.padre.padre.hijos.length ; i++ ){ //escogiendo a todos mis tios
                if ( i != nodo.padre.soyNum ){ //excluyendo a mi padre
                    arrTemp[j] = nodo.padre.padre.hijos[i] ;
                    j++ ;
                }
            }
            //arrTemp tiene todos los tios
            arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
            console.log("escogeEncuestados2 arrSalida despues de tios:" + arrSalida[1] ) ;
            cont = arrSalida[0] ;
            sEmails = arrSalida[1] ;
            if ( cont >= maximo ){ //ya se completó el grupo a encuestar
                return arrSalida ;
            }
        }
        //llegando acá decidimos buscar los sobrinos como última opción
        arrTemp = [] ;
        k = 0 ;
        for ( i = 0 ; i < nodo.padre.hijos.length ; i++ ){ //aca voy a escoger los nietos
            if ( i != nodo.soyNum ){ //verificar que no me escoja a mismo
                for ( j = 0 ; j < nodo.padre.hijos[i].hijos.length ; j++  ){
                    arrTemp[k] = nodo.padre.hijos[i].hijos[j] ;
                    k++ ;
                }
            }            
        }
        //arrTemp tiene todos los sobrinos
        arrSalida = this.randomEmail2( arrTemp , maximo , cont , sEmails ) ;
        cont = arrSalida[0] ;
        sEmails = arrSalida[1] ;
        return arrSalida ;  //ya devuelve lo que haya asi no este completo el maximo
    }

    //voy a convertir en funcion el while que escoge nodos aleatorios
    //this.randomEmail = function( arrTemp , maxim1 ){ al parecer toma un arreglo de emails arrTemp y escoge un grupo aleatoriamente  de maxim1
    this.randomEmail = function( arrTemp , maxim1 ){
        var long = arrTemp.length ;
        var j = 0 ;
        var i = 0 ;
        var pos2 = 0 ;
        var sTexto = "" ;
        var sEmails = "" ;
        var cont = 0 ;
        var arrInterno = arrTemp.slice(0) ; //20200420: para trabajar sobre un duplicado y no destruir el arbol
        //var arrInterno = arrTemp ;
        var salida = [] ; 

        //console.log("this.randomEmail arrInterno:" + arrInterno ) ;
        for ( j = 0 ; j < arrTemp.length ; j++ ) {  
            i = Math.floor(Math.random() * long ) ;
            //console.log("this.randomEmail i:" + i + " long:"+ long + " emails:" + sEmails ) ;
            pos2 = this.buscaPosNodo( arrInterno[i].ruta ) ;
            sTexto = this.arrDatos[pos2].correo ;
            sTexto = this.escogeDatos( this.arrDatos[pos2] ) ; 
            sEmails = sEmails + ";" + sTexto ;            
            cont++ ;
            arrInterno.splice(i,1) ;
            //console.log("this.randomEmail arrInterno dsps splice:" + arrInterno ) ;
            long-- ;
            if ( cont >= maxim1 ){ //ya se completó el grupo a encuestar
                salida = [ cont , sEmails ] ;
                return salida ;
            }
        }
        salida = [ cont , sEmails ] ;
        return salida ;
    } 

    this.randomEmail2 = function( arrTemp , maximo, cont, sEmails ){
        var arrSalida = this.randomEmail( arrTemp , maximo - cont ) ;
        //console.log("randomEmail2 arrSalida:" + arrSalida[0] ) ;
        cont += arrSalida[0] ;
        sEmails += arrSalida[1] ;
        var salida = [ cont , sEmails ] ;
        return salida ;
    }

    
    this.accionMenu_bk1 = function( $param , $form , $nomChkbx ){
        console.log( $param ) ;
        var txt = "" ;
        var i = 0 ;
        var $arrMeter = [] ;
        var x = document.forms.namedItem( $form ).elements ;
        console.log("x" ,  x ) ;
        for (i = 0; i < x.length; i++) {
            if (( x[i].name == $nomChkbx ) && (x[i].checked == true )){
                $arrMeter.push( x[i].value ) ;
                txt += x[i].value + "," ;
            }
        }
        // $arrMeter tiene todos las filas que se van a mover

        var y = document.getElementById( $param ) ;
        txt += " : " + y.value ;
        document.getElementById("salida2").innerHTML = txt;

        var $orig ;
        var $dest = this.buscaRutaNodo( y.value ) ;

        for ( i = 0 ; i < $arrMeter.length ; i++ ){
            $orig = this.buscaRutaNodo( $arrMeter[i] ) ;
            this.mueveNodo( $orig , $dest ) ;
            //todos los IDs despues del numero movido bajan un numero de posic
        }
    }

    //this.accionMenu = function( $param , $form , $nomChkbx ){: genera la funcionalidad de mover un nodo de lugar del organigrama, se usa antes de pintar el organigrama nuevamente
    this.accionMenu = function( $param , $form , $nomChkbx ){
        console.log( $param ) ;
        var txt = "" ;
        var i = 0 ;
        var $arrMeter = [] ;
        var x = document.forms.namedItem( $form ).elements ;
        console.log("x" ,  x ) ;
        for (i = 0; i < x.length; i++) {
            if (( x[i].name == $nomChkbx ) && (x[i].checked == true )){
                $arrMeter.push( x[i].value ) ;
                txt += x[i].value + "," ;
            }
        }
        // $arrMeter tiene todos las filas que se van a mover

        var y = document.getElementById( $param ) ;
        txt += " : " + y.value ;
        document.getElementById("salida2").innerHTML = txt;

        var $orig ;
        var $correg = 0 ;
        var $dest_valor = parseInt( y.value ) ;
        var $dest = this.buscaRutaNodo( $dest_valor ) ;

        $arrMeter.sort(function(a, b){return a - b}) ;
        console.log("this.accionMenu $arrMeter" , $arrMeter ) ;
        console.log("this.accionMenu $dest_valor" , $dest_valor ) ;
        //alert( "this.accionMenu despues de $arrMeter.sort() " ) ;
        var $iMeter ;

        for ( i = 0 ; i < $arrMeter.length ; i++ ){
            $iMeter = parseInt( $arrMeter[i] ) ;
            $orig = this.buscaRutaNodo(( $iMeter - $correg )) ; //$correg ajusta el numero de posic que se busca acorde a lo que ya se ha movido
            if ( this.mueveNodo( $orig , $dest ) == 1 ){ //efectivamente movio el nodo
                $correg++ ; //siempre se corrige porque sabemos que el arreglo está ordenado
                if ( $dest_valor > $iMeter ){
                    $dest_valor-- ;
                    console.log("this.accionMenu $dest_valor" , $dest_valor ) ;
                }
                $dest = this.buscaRutaNodo( $dest_valor ) ;
            } 
            //todos los IDs despues del numero movido bajan un numero de posic
        }
    }

    this.pintaInsertaForm = function( $seccion ){
        var elem = new losDatos("cargo","nivel",0,true,0,0,0,0,0,0,"nombre",0,"correo",0,0,0,0,0,0,0,0,0,0,sueldo) ;
        var $i ;
        var $tHtml = "" ;
        var $linea = "" ;

        $tHtml += '<form action="" method="get" id="miMenu2" onsubmit="guardaElem( organigrama )">'

        for ( $i in elem ){
            if (( typeof elem[$i] != "function" ) && ( typeof elem[$i] != "object" )){
                $linea = " " + $i + ': <input type="text" name="'+$i+'" id="'+$i+'" size=80 value="'+elem[$i]+'" ><br>' ;
                $tHtml +=  $linea ;
            }
        }

        $tHtml += '<input type="submit" value="Submit">' ;
        console.log("pintaInsertaForm") ;
        document.getElementById( $seccion ).innerHTML = $tHtml ;
    }

    this.pintaEvalJSON = function( $arrListaEval ){    
        
        var $texto = "" ;
        //console.log ("pintaEvalJSON $arrListaEval" , $arrListaEval ) ;
        $texto = JSON.stringify( $arrListaEval ) ;
        //document.write( $texto ) ;
        //console.log ("$texto" , $texto ) ;
        //var $nada = JSON.parse( $texto ) ; //pruebita 20200419
        //console.log ("$nada" , $nada ) ;
        $texto = '<textarea name="jsonMsj" id="fname" rows="15" cols="100">' + $texto  + '</textarea><br>' ;
        document.getElementById( "salida3" ).innerHTML = $texto ;
        return $texto ;
    }
}

/* 
function cambiaTemp( $param , $form , $nomChkbx ){

*/

function tempo($a , $b ){
  console.log("tempo_tempo:" + 1 ) ;
}

function cambiaTemp( $param , $form , $nomChkbx ){
    console.log( $param ) ;
    var txt = "" ;
    var x = document.forms.namedItem( $form ).elements ;
    for (i = 0; i < x.length; i++) {
        txt = txt + " value>" + x[i].value  ;
        txt = txt + " name>" + x[i].name  ;
        txt = txt + " checked>" + x[i].checked  ;
        txt = txt + "<br>" ;
    }

    document.getElementById("salida").innerHTML = txt;
}

function pinta_arreglo( $arrSalida ){
  var tHtml = "" ;  
  console.log( $arrSalida ) ;
  tHtml += "<table><tr>" ;
  var $elem =  $arrSalida[0] ;
  for (var $propiedad in $elem ) {
    tHtml += "<th>" + $propiedad + "</th>" ;
  }
  tHtml += "</tr>" ;

  for (var i = 0 ; i < $arrSalida.length ; i++ ){
    var $elem =  $arrSalida[i] ;
    tHtml += "<tr>" ;
    for (var $propiedad in $elem ) {
      tHtml += "<td>" + $elem[$propiedad] + "</td>" ;
    }
    tHtml += "</tr>" ;
  }
  tHtml += "</table>" ;

  return tHtml ;
}