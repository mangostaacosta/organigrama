/********************************************
 arma_respuestas.js 
 20200503
 Extiende métodos de oEvalDsmp para poder integrar la información de los dos arhivos que sirven como "Base de datos" en JS. Es decir datos/bd_respuestas.js y datos/bd_otrasResp.js y a partir de esso arreglos crear un consolidado de oEvalDsmp.arrRespuestas1 el cual estaría listo para ser enviado a que un script php lo volviera a guardar en servidor 
 *******************************************/

//<script src="multiarr.js"></script>
//<script src="evalua.js"></script>
//<script src="evalua_dsmpn.js"></script>

// la definición de oEvalDsmp se realizo en evalua_dsmpn.js
//var oExam1 = new oEvaluador() ;
//oEvalDsmp = oExam1 ; 


/*
oEvalDsmp.integraGlobalesJS = function(){

*/


oEvalDsmp.integraGlobalesJS = function(){

    //document.write("<br>entrando integraGlobalesJS" ) ;
    //glTextoArrResp1: el siguiente metodo recontruye arrRespuestas1 a partir de esta global 
    this.recuperaServerJSON() ;
    //document.write("<br>despues de recuperaServerJSON en integraGlobalesJS" ) ;


    //arrGlOtrasResp: este erreglo tiene una serie de textos que se pueden pare a estrucutras del mimso tipo de arrRespuestas1

    var $ok = true ;
    var $i = 0 ;
    var $j = 0 ;
    $glError = "" ;
    for ( $elem0 of arrGlOtrasResp ){
        console.log("procesando elemento :" , $j ) ;        
        try {
            var $obj = JSON.parse( $elem0 ) ;
            $ok = true ;
        }
        catch (err){
            $glError += "<br>ERROR: Texto tiene errores no se puede procesar, elemento: " + $j ;
            $ok = false ;
        } 
        
        console.log( "oEvalDsmp.integraGlobalesJS $obj" , $obj , $elem0 ) ;
        if ( typeof $obj !== 'undefined' ){
            $arrTemp = $obj ;
            for ( $elem2 of $arrTemp ){
                this.insertaRespuesta2( $elem2.posExam , $elem2.posEstud , $elem2.posEval , $elem2.posPreg , $elem2.rsp , $elem2.peso ) ;
                $i++ ;
            }
            $ok = true ;
        }else{
            $glError += "<br>ERROR: el objeto no quedó bien definido" ;
            $ok = false ;
        }
        $j++ ; 
    }

    if ( $ok ){
        alert ("se procesaron " + $i + "respuestas correspndientes a " + $j + "evaluadores" ) ;
    }else{
        alert( $glError ) ;
    }
    this.listaRespuestas() ;
    return $i ;

}


//function testXHR = function( $archivo , $oDatos ){: NO loor que funcione; la idea es que sta función intente mandar una información en POST a un archivo en php pero algo falla, porque el archivo de php nunca se ejecuta
function testXHR( $archivo , $oDatos ){
    //var $a1 = JSON.stringify( $oPrueba ) ;    
    const XHR = new XMLHttpRequest();
    var FD  = new FormData();

    // Push our data into our FormData object
    for ( $index in $oDatos ){
        FD.append( $index , $oDatos[$index] ) ;    
    }
    //FD.append( "prueba" , $a1 ) ;

    // Define what happens on successful data submission
    XHR.addEventListener( 'load', function( event ) {
        alert( 'Yeah! Data sent and response loaded.' );
    } );

    // Define what happens in case of error
    XHR.addEventListener(' error', function( event ) {
        alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    //XHR.open( 'POST', 'http://52.44.24.192/ibero/js_canal.php' ) ;
    XHR.open( 'POST', 'archivo' ) ;
    //XHR.open( 'POST', '/js_canal.html' ) ;
    XHR.send( FD );
}

function ejemploXHR(){
    $postit = {} ;
    $postit["nombre"] = "mauricio acosta" ;
    $postit["sexo"] = "masculino" ;
    $postit["edad"] = 46 ;
    $postit["php_estado"] = 3 ;

    testXHR( "testXHR.php" , $postit ) ;
}



//oEvalDsmp.listaRespuestas = function(){: imprime el listado de respuestas
oEvalDsmp.listaRespuestas2back = function(){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;

    var mat1 = new biArreglo() ;
    var $val , $tot ;
    var $texto ;
    var $html = "" ;
    $html += '<button type="button" onclick="oEvalDsmp.recuperaServerJSON()"><b>RECUPERAR Respuestas Servidor</b></button>' ;
    $html += '<button type="button" onclick="oEvalDsmp.integraGlobalesJS()">INTEGRAR Nuevas Respuestas</button>' ;
    $html += '<form action="js_canal.php" method="post" name="miPrueba1" onsubmit="return oEvalDsmp.archivaServerJSON()">' ;
    $html += '<input type="hidden" id="php_estado" name="php_estado" value="">' ;
    $html += '<input type="hidden" id="php_nombre" name="php_nombre" value="">' ;
    $html += '<input type="hidden" id="php_respuestas" name="php_respuestas" value="">' ;

    $html += '<input type="submit" value="ARCHIVAR Respuestas Servidor">' ;
    $html += '</form>' ;

    var $arrSalida = [] ;
    var $arrEstud = [] ;
    var $arrEstudNom = [] ;
    var $i , $j ;

    for ( $elem of this.arrRespuestas1 ){
        //$html += JSON.stringify( $elem )  ;
        //$html += "<br>" ;

        //$texto = $elem.posExam + "_" + $elem.posEval + "_" + $elem.posEstud + "_" + $elem.posPreg + "_" ;
        $texto = $elem.posExam + ":" + $elem.posEval + ":" + $elem.posPreg + ":" ;
 
        $i = $arrSalida.indexOf( $texto ) ;
        if (  $i == -1 ){
            $i = $arrSalida.push( $texto ) ;
        }

        $j = $arrEstud.indexOf( $elem.posEstud ) ;
        if (  $j == -1 ){
            $j = $arrEstud.push( $elem.posEstud ) ;
        }
    }
    $arrSalida.sort() ;
    $arrEstud.sort() ;

    for ( $elem of $arrEstud ){
        $arrEstudNom.push( this.muestraEstudiante( $elem )) ;
    }

    mat1.poblar( $arrSalida.length , this.arrEspDistrItem.length , 0 ) ;

    var $arrElem = [] ;
    for ( $elem of this.arrRespuestas1 ){
        $texto = $elem.posExam + ":" + $elem.posEval + ":" + $elem.posPreg + ":" ;
        var $nodo = {} ;
        $nodo["Examen"] = $elem.posExam ;
        $nodo["Evaluado"] = this.muestraEvaluado( $elem.posEval ) ;
        $nodo["Pregunta"] = $elem.posPreg ;
        $i = $arrSalida.indexOf( $texto ) ;
        $val = mat1.valor( $i , $elem.rsp ) ;
        if ( $val == undefined ){
            mat1.inserta( $i , $elem.rsp , 1 ) ;
        }else{
            mat1.inserta( $i , $elem.rsp , $val + 1 ) ;
        }
        $arrElem[$i] = $nodo ;
    }

    $html += '<br>Evaluadores: '  + $arrEstudNom.length ;
    $html += '<br><table style="width:50%" border="1px" >' ;
    $html += '<tr><th>Nombre</th></tr>' ;
    for ( $elem of $arrEstudNom ){
        $html += '<tr><td>' + $elem + '</td></tr>' ;
    }
    $html += '</table><br>' ;


    $html += '<br><table style="width:80%" border="1px" >' ;
    $html += '<tr><th>Examen</th><th>Evaluado</th><th>Pregunta</th>' ;
    for ( $i = 0 ; $i < this.arrEspDistrItem.length ; $i++ ){
        $html += '<th>R:' + $i + '</th>' ;
    }
    //$html += '</table>' ;
    $html += '<th>Tot Resps</th>' ;
    $html += '</tr>' ;


    var $totCols = [] ;

    for ( $i = 0 ; $i < mat1.longFila( 0 ) ; $i++ ){
        $totCols[$i] = 0 ;
    }

    for ( $i = 0 ; $i < mat1.long() ; $i++ ){
        //$html += "<br>" + $arrSalida[$i] + ":" ;
        //$html += $arrElem[$i]["Evaluado"] + ":" ;
        $html += '<tr><td>' +  $arrElem[$i]["Examen"] + '</td>' ;
        $html += '<td>' +  $arrElem[$i]["Evaluado"] + '</td>' ;
        $html += '<td>Preg ' +  $arrElem[$i]["Pregunta"] + '</td>' ;
        
        console.log ( "oEvalDsmp.listaRespuestas mat1.longFila( $i ):" , $i , mat1.longFila( $i ) ) ;
        $tot = 0 ;
        for ( $j = 0 ; $j < mat1.longFila( $i ) ; $j++ ){
            if ( mat1.valor( $i , $j ) != undefined ){
                $val = mat1.valor( $i , $j ) ;
                $tot += $val ;
                $totCols[$j] += $val ;
            }else{
                $val = 0 ;
            }
            //$html += " resp:" + $j + ">" + $val ;
            $html += '<td>' + $val + '</td>' ;
        }
        $html += '<td>' + $tot + '</td>' ;
        $html += '</tr>' ;
    }
    $html += '<tr><td></td><td></td><td></td>' ;
    for ( $i = 0 ; $i < $totCols.length ; $i++ ){
        $html += '<td>' + $totCols[$i] + '</td>' ;
    }

    $html += '</tr></table>' ;

    console.log ( "oEvalDsmp.listaRespuestas mat1" , mat1 ) ;
    console.log ( "oEvalDsmp.listaRespuestas $arrSalida" , $arrSalida ) ;
    //$html = "<h3>Inserte la información del resultado de evaluación</h3>" ;
    document.getElementById( "salidaHtml" ).innerHTML = $html ;

}


