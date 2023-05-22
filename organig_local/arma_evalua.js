/********************************************
 arma_evalua.js 
 20200418
 Implementa función para recibir un JSON de evaluaciones creado por 
 var arrlistas = organigrama.armaGrupos( 8 ) ;
 crear el objeto de evaluación y crea los JSON para ser enviados a los distintos evaluadores
 *******************************************/
/* 
<script src="arbol.js"></script>
<script src="multiarr.js"></script>
<script src="evalua.js"></script>
<script src="evalua_dsmpn.js"></script>
<script src="arbol.js"></script>
<script src="ensayo_arbol2.js"></script> 
*/

/* 
oEvalDsmp.leeArrAsignados = function( $arr1 ){
oEvalDsmp.muestraClaves = function(){ 
oEvalDsmp.muestraInicio = function(){
oEvalDsmp.codifica = function( $posic ){
oEvalDsmp.miEvaluador = function(){


*/


var oMiEvalua = oEvalDsmp ;
 
oEvalDsmp.leeArrAsignados = function( $arr1 ){
    var $obj1 = {} ; 
    var $obj2 = {} ;
    var $obj3 = {} ; 
    var $ok = true ;
    var $arrControl = [] ;
    var $arrControl2 = [] ;
    var $arrN1 = [] ;
    var $arrN2 = [] ;
    var $i ;
    var $temp ; 
    var $temp2 ;
    var $arrTemp2 = [] ;

    for ( $elem of $arr1 ){
        $obj1 = $elem.estud ; $obj2 = $elem.arrTarg ;
        //$obj1 = $elem.targ ;
        
        console.log( " oMiEvalua.leeArrAsignados $obj1 y 2", $obj1 , $obj2 ) ;
        try {
            $obj3 = JSON.parse( $obj1 ) ;
        }
        catch (err){
            $glError = "ERROR: Texto tiene errores no se puede procesar" ;
            $ok = false ;
        }
        if ( $ok ){
            $i = $arrControl.indexOf( $obj3.i )
            if ( $i == -1 ){ //revisa que el nodo no esté agregado antes
                $temp = this.insertaEstudiante( $obj3.n , $obj3.c ) ;
                $arrN1.push( $temp ) ;
                $arrControl.push( $obj3.i ) ;
            }else{
                $temp = $arrN1[$i] ;
            }
        } //$temp tiene el estudiante (evaluador)
        
        //console.log( " oMiEvalua.leeArrAsignados $obj3", $obj3 ) ;
        //alert("stop") ;
        $arrTemp2 = [] ; 
        for ( $elem2 of $obj2 ){
            try {
                $obj3 = JSON.parse( $elem2 ) ;
            }
            catch (err){
                $glError = "ERROR: Texto tiene errores no se puede procesar" ;
                $ok = false ;
            }
            console.log( " oMiEvalua.leeArrAsignados $obj3", $obj3 ) ;
            //alert("stop") ;
            if ( $ok ){
                $i = $arrControl2.indexOf( $obj3.i ) ;
                if ( $i == -1 ){ //revisa que el nodo no esté agregado antes
                    $temp2 = this.insertaEvaluado( $obj3.n ) ;
                    $arrN2.push( $temp2 ) ;
                    $arrControl2.push( $obj3.i ) ;
                    $arrTemp2.push( $temp2 ) ;
                }else{
                    $temp2 = $arrN2[$i] ;
                    $arrTemp2.push( $temp2 ) ;
                }
            }
        }//$arrTemp2 tiene los evaluados

        //oEvalDsmp.asignaExamToEvaluados( ex1 , oEstud3 , [ $arr[0] , $arr[1] , $arr[2] , $arr[3] , $arr[4] , $arr[5] ] ) ;
        this.asignaExamToEvaluados( ex1 , $temp , $arrTemp2 ) ;

    } //al llegar a este punto todos los evaluadores y evaluados se cargaron en el objeto
}

oEvalDsmp.muestraClaves = function(){ 
    var $salida = "" ;
    var $i = 0 ;
    var $elem ;
    var $coma = "," ;

    //20210624: formato adicional para crear CSV para envío en outlook
    $salida += "<br>Formato para archivo .CSV y uso en outlook:<br>" ;
    $salida += '<textarea  rows="30" cols="100">' ;
    //$salida += "<pre>" ;
    $salida += "Email" + $coma + "Nombre" + $coma + "Codigo" + $coma + "Clave\n" ;
    for ( $i = 0 ; $i < this.arrExamsConTarget.length ; $i++ ){
        $elem = this.arrExamsConTarget[$i] ;
        $salida += $elem.miEstud.correo + $coma + $elem.miEstud.nombre + $coma + $elem.miEstud.posic + $coma + oMiEvalua.codifica( $i ) + "\n" ;        
    }
    $salida += '</textarea><br><br>' ;
    //$salida += "</pre>" ;

    for ( $i = 0 ; $i < this.arrExamsConTarget.length ; $i++ ){
        $elem = this.arrExamsConTarget[$i] ;
        //$salida += "Evaluador " + $i + ": " ;
        $salida += " Código:" + $elem.miEstud.posic ;
        $salida += " Clave:" + oMiEvalua.codifica( $i ) ;
        $salida += ": " + JSON.stringify( $elem.miEstud ) ;
        $salida += "<br>" ;
    }

    return $salida ;
}


oEvalDsmp.muestraInicio = function(){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;

    var $html ;
    if ( document.getElementById( "tituloHtml" ).innerHTML == "" ){
        $html = "<h2>" + ex1.titulo + "</h2>" ;
        $html += "<p>" + ex1.instrucciones +"</p>" ;
        document.getElementById( "tituloHtml" ).innerHTML = $html ;
    }
    
    $html = "<h3>Identificación del Evaluador</h3>" ;
    document.getElementById( "salida" ).innerHTML = $html ;

    $html = '<form action="" method="get" id="elCargue" onsubmit="return false;">' ;    
    
    $html += 'Código asignado: <input type="text" name="jsonMsj" id="fname" size="5"> ' ;
    //$html += '<textarea name="jsonMsj" id="fname" rows="2" cols="100">Ingrese acá el texto que le fue enviado al email</textarea><br>';
    $html += 'Clave asignada: <input type="password" name="jsonMsj1" id="fname1"><br>' ;
    //$html += '<input type="text" name="jsonMsj1" id="fname1" rows="20" cols="100" value="Zona">  <br>';
    //$html +='<br><br><button type="submit">Otra carga</button>' ;
    $html +='<br><button type="button" onclick="oMiEvalua.miEvaluador()">Ingresar</button><br>' ;
    $html += '</form>' ;

    document.getElementById( "salidaTexto" ).innerHTML = $html ;
    document.getElementById( "salidaHtml" ).innerHTML = "" ;
    //document.getElementById( "QnA" ).innerHTML = "" ;    
}

oEvalDsmp.codifica = function( $posic ){ 
    var $temp =  this.arrExamsConTarget[$posic] ;
    var $miTexto = JSON.stringify( $temp.miArrEval ) ;
    var $num = (($miTexto.length / $temp.miEstud.nombre.length) * 10) + $miTexto.length ;
    $num = parseInt($num) ;
    var $num2 = $temp.miEstud.nombre.charCodeAt(3) ;
    $num2++ ;
    $miTexto = String.fromCharCode($num2) ;
    $num2 = $temp.miEstud.nombre.charCodeAt(1) ;
    $num2++ ;
    $miTexto += String.fromCharCode($num2) ;
    $miTexto += $num ;
    return $miTexto ;
}

oEvalDsmp.miEvaluador = function(){
    var $miTexto = document.getElementById( "fname" ).value ;        
    var $miClave = document.getElementById( "fname1" ).value ;
    var $obj ;
    var $ok = true ;
    var $num ; 



    $ok = true ;

    if ( $ok ){
        //var pos = $obj.posic ;
        var pos =  parseInt( $miTexto ) ;
        var oEstudiante = this.arrExamsConTarget[pos].miEstud ;
        var $codigo = this.codifica( pos ) ;
        if ( $miClave == $codigo ){
            $ok = true ;
            est1 = oEstudiante ;  //20200410: variable global 
            alert("Bienvenido " + oEstudiante.nombre ) ;
        }else{
            $ok = false ;
            $glError = "ERROR: Credenciales de acceso incorrectas" ;
            //alert("codigo=" + $codigo + " el mio:" + $miClave ) ;
        }
    }
    
    if ( $ok ){   //si se recibieron credenciales de evaluador válidas
        var $html = this.muestraTituloExamen( ex1 , oEstudiante , 0 ) ;
        document.getElementById( "tituloHtml" ).innerHTML = $html ;
        $html = this.muestraPreguntaExamen( ex1 , oEstudiante , 0 ) ;
        document.getElementById( "salidaHtml" ).innerHTML = $html ;
        document.getElementById( "salida" ).innerHTML = "" ;
        document.getElementById( "salidaTexto" ).innerHTML = "" ;
        document.getElementById( "QnA" ).innerHTML = qna ;
    }else{
        alert( $glError ) ;
        //document.getElementById( "fname" ).value = "Intente nuevamente" ;
    }
    return $ok ;
}

oEvalDsmp.miEvaluador_back = function(){
    var $miTexto = document.getElementById( "fname" ).value ;        
    var $miClave = document.getElementById( "fname1" ).value ;
    var $obj ;
    var $ok = true ;
    var $num ; 

    try {
        $obj = JSON.parse( $miTexto ) ;
    }
    catch (err){
        $glError = "ERROR: Texto tiene errores no se puede procesar" ;
        $ok = false ;
    }

    //alert("entré") ;

    if ( $ok ){
        var pos = $obj.posic ;
        var oEstudiante = this.arrExamsConTarget[pos].miEstud ;
        if ( oEstudiante.nombre == $obj.nombre ){
            var $codigo = this.codifica( pos ) ;
            if ( $miClave == $codigo ){
                $ok = true ;
                est1 = oEstudiante ;  //20200410: variable global 
                alert("Bienvenido!") ;
            }else{
                $ok = false ;
                $glError = "ERROR: Credenciales de acceso incorrectas" ;
                //alert("codigo=" + $codigo + " el mio:" + $miClave ) ;
            }
        }else{
            $ok = false ;
            $glError = "ERROR: El nombre del evaluador no concuerda con listado" ;
        }
    }
    
    if ( $ok ){   //si se recibieron credenciales de evaluador válidas
        var $html = this.muestraTituloExamen( ex1 , oEstudiante , 0 ) ;
        document.getElementById( "tituloHtml" ).innerHTML = $html ;
        $html = this.muestraPreguntaExamen( ex1 , oEstudiante , 0 ) ;
        document.getElementById( "salidaHtml" ).innerHTML = $html ;
        document.getElementById( "salida" ).innerHTML = "" ;
        document.getElementById( "salidaTexto" ).innerHTML = "" ;
    }else{
        alert( $glError ) ;
        //document.getElementById( "fname" ).value = "Intente nuevamente" ;
    }
    return $ok ;
}


/* 
console.log("arrlistas antes de leer" ,  arrlistas ) ;
var $mihtml = oEvalDsmp.leeArrAsignados( arrlistas ) ;
document.write( $mihtml ) ;
console.log("oMiEvalua" ,  oMiEvalua ) ;
alert("stop") ;
oEvalDsmp.muestraInicio() ; 
*/