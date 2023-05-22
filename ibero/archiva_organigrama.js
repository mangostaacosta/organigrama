/********************************************
 archiva_organigrama.js 
 20200302
 implementa la capacidad de generar una copia permanente de un organigrama y recuperarla
*******************************************/

//<script src="datos_nodo.js"></script>
//<script src="arbol.js"></script>

/*
organigrama.html2 = function(){
organigrama.mostrar = function( $nivel , $titulo ){
organigrama.clickArchiva = function( $opcion ){
organigrama.archivar1 = function( nomArchivo , opcion ){
organigrama.archivar = function( menu ){
*/


organigrama.html2 = function(){
    console.log("en organigrama.html") ;
    var $txt = organigrama.mostrar( $gProfundidad , "jerarquia organigrama" ) ;
    document.getElementById( "salidaHtml" ).innerHTML = $txt ;
    document.getElementById( "salida" ).innerHTML = "" ;
    document.getElementById( "salida2" ).innerHTML = "" ;
    

    //pintaOrganigramaPrimero( this , "padre" ,"Organigrama" ) ;
}

organigrama.mostrar = function( $nivel , $titulo ){
    var $form = "miMenu3" ;
    
        //$oOrganigrama.accionMenu( $destino , $form , $nomChkbx ) ;
        //var tHtml = "<br>ORGANIGRAMA<br>" ;

        //this.pintaArbol1( nodoInicial , nivel , "" , "" ) ;
        //texto += this.sMiTexto ;
        //texto += '<input type="submit" value="Archivar"></form>'
    
    var tHtml = "<h2>"+$titulo+"</h2>"
    tHtml += '<form action="" method="get" id="'+ $form +'">' ;
    tHtml += '<button  type="button" onclick="organigrama.archivar( 1 )">Archivar</button>' ;
    tHtml += '<button  type="button" onclick="organigrama.archivar( 2 )">Recuperar</button>' ;
    tHtml += '<br><br>' ;
    this.pintaArbol2( $nivel ) ;
    tHtml += this.sMiTexto ;     
    tHtml += '<br>' ;
    
    //tHtml += '<button type="button" onclick="alert(\'2\')">Recuperar</button>' ;

    tHtml += '<input type="submit" value="Volver"></form>' ;
    
    return tHtml ;
    //document.getElementById("salidaHtml").innerHTML = tHtml ;
}


//organigrama.clickArchiva = function( $opcion ){ archiva el organigrama en el servidor
organigrama.clickArchiva = function( $opcion ){
    var $miTexto ;
    
    if ( $opcion == 1 ){  //quiere decir que voy a archivar
        var $nom = prompt("Nombre del Archivo para guardar") ;
        if ( $nom == null  ){
            alert("el usuario canceló la acción") ;
            return false ;
        }
        if ( $nom == "" ){
            $nom = "temporal__" ;
        }
        $miTexto = organigrama.serialize() ;
        document.forms["miPrueba1"]["php_estado"].value = 3 ; //indica al servidor que va a archivar
        document.forms["miPrueba1"]["php_prueba"].value = $miTexto ;
        document.forms["miPrueba1"]["php_nombre"].value = $nom ;
        return true ;
    }
}

organigrama.archivar1 = function( nomArchivo , opcion ){
    var $miTexto ;
    
    if ( opcion == 1 ){  //quiere decir que voy a archivar
        $miTexto = this.serialize() ;
        //localStorage.setItem( "temporal__" , $miTexto ) ;
        localStorage.setItem( nomArchivo , $miTexto ) ;
        $miTexto = "<p>Estructura del Organigrama que está guardando</p>" + $miTexto ;
        document.getElementById( "salida" ).innerHTML = $miTexto ;
        document.getElementById( "salida2" ).innerHTML = "" ;
        //$win = window.open( "nada.html" , "ventana1" , "width=320,height=300,scrollbars=NO") ;
        //$win.document.write( $miTexto ) ;
        return 1 ;
    }else if (  opcion == 2  ) { //quiere decir que voy a desarchivar es decir a recuperar
        $miTexto = "" ;
        var $ok ;

        if ( nomArchivo == 'temporal__' ){ //quiere decir que el usuario no escribió nada
            $html = '<form action="" method="get" id="elCargue" onsubmit="return false;">' ;    
            $html +='<button type="button" onclick="organigrama.archivar1(\'nadanada\',3)">Cargar</button><br>' ;
            $html += '<textarea name="jsonMsj" id="fname" rows="15" cols="100">Pegue el texto codificado del organigrama en esta zona </textarea>  <br>';
            //$html += '<input type="text" name="jsonMsj1" id="fname1" rows="20" cols="100" value="Zona">  <br>';
            //$html +='<br><br><button type="submit">Otra carga</button>' ;
            $html += '</form>' ;
            document.getElementById( "salida" ).innerHTML = $html ;
            return 2 ;
        }else{
            $miTexto = localStorage.getItem(nomArchivo) ;
            if ( $miTexto ){
                alert( "SI se encontró registro de '" + nomArchivo + "'." ) ;
                $ok = true ;
            }else{
                $glError = "NO se encontró registro de '" + nomArchivo + "'. Recuerde que el backup automático se puede recuperar con: temporal__" ;
            }
        }        
    }else if (  opcion == 3  ) { //quiere decir que se va a cargar texto desde el textarea
        $miTexto = "" ; 
        $miTexto = document.getElementById( "fname" ).value ;
        $texto = $miTexto ;
        var $obj ; 
        var $ok = true ;
        try {
            $obj = JSON.parse( $texto ) ;
        }
        catch (err){
            $glError = "ERROR: Texto tiene errores no se puede procesar" ;
            $ok = false ;
        }
    }else{
        $glError = "NO se encontró registro de '" + nomArchivo + "'. Recuerde que el backup automático se puede recuperar con: temporal__" ;
        nomArchivo = "temporal__" ;
        $ok = false ;
    }

    if ( $ok ){
        var $previoTexto = organigrama.serialize() ;
        $previoTexto = "<p>Estructura del Organigrama que acaba de sobreescribir</p>" + $previoTexto ;
        //document.getElementById( "salida" ).innerHTML = $previoTexto ;
        //$win = window.open( "nada.html" , "ventana1" , "width=320,height=300,scrollbars=NO") ;
        //$win.document.write( $miTexto ) ;
    
        //var dupligrama = new Arbol( 0 ) ;
        /*         
        //acá lo que se hace es reiniciar todos los parametros del objeto, por tanto se pierde en el vacío todo lo que estaba, es el equivalente del "new Arbol(0)"
        var nodo = new elNodo(  "0." ) ;  
        this.myName = "organigrama" ;
        this.raiz = nodo ;
        this.arrRutaN = [] ; 
        this.arrRutaN[0] = "0." ; 
        this.arrNodos = [] ; 
        this.arrNodos[0] = nodo ;
        this.sMiTexto = "" ;
        this.arrDatos = [] ; 
        //this.arrDatos[0] = indice ;
        this.arrResult = [] ; 
        */
        

        this.reinicia() ;
        this.myName = "organigrama" ;
        this.unserialize( $miTexto ) ;
    
        //this = new Arbol( 0 ) ; //OJO no sirve ni esta ni la de abajo. evaluar si mejor funcion independient o redefinicion de las propiedades como si estuviera redefiniendo todos
        //this = dupligrama ; //quien sabe si esto se pueda hacer
        
        pintaOrganigramaPrimero( this , "padre" ,"Organigrama" ) ;
        document.getElementById( "salida2" ).innerHTML = $previoTexto ;
        document.getElementById( "salida" ).innerHTML = "" ;
    }else{
        alert($glError) ;
    }  
}

organigrama.archivar = function( menu ){
    //alert("hola") ;
    console.log("en organigrama.archivar menu" , menu ) ;
    //alert("hola menu:" + menu ) ;
    if ( menu == 1 ){   //opcion archivar
        var $nom = prompt("Nombre del Archivo para guardar") ;
        if ( $nom == null  ){
            alert("el usuario canceló la acción") ;
            return 0 ;
        }
        if ( $nom == "" ){
            $nom = "temporal__" ;
        }
        this.archivar1( $nom , 1 ) ;
        alert("El organigrama ha sido guardada con el nombre:" + $nom ) ;
    }else if( menu == 2 ){  //opcion recuperar
        var $nom = prompt("Nombre del Archivo para recuperar (deje vacío si desea cargar texto) ") ;
        if ( $nom == null  ){
            alert("el usuario canceló la acción") ;
            return 0 ;
        }
        if ( $nom == "" ){
            $nom = "temporal__" ;
        }
        this.archivar1( $nom , 2 ) ;        
    }else{
        //nada
    }
    //organigrama.html() ;
}

//organigrama.html() ;
//window.open( "nada.html" , "ventana1" , "width=120,height=300,scrollbars=NO") ;