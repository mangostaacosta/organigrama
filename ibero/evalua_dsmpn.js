/********************************************
 evalua_dsmpn.js 
 20200309
 define e implementa métodos específicos para la funcionalidad requerida en las evaluaciones de desempeño 
 para hacer esto se implementa un examen enriquecido con una propiedad adicional que dice a que target corresponde, el target podrías ser un tema, competencia o un sujeto (en este caso el sujeto al que se evalua el desempeño)
 *******************************************/

//<script src="multiarr.js"></script>
//<script src="evalua.js"></script>



//Por la forma curiosa en que se extiende clases en JS lo que hay es coger ya una instancia de oEvaluador (que es la instacia creada en evalua.js:oExam) y empezar a definir propiedades y métodos adicionales
//var oEvalDsmp = new oEvaluador() ;
var oExam1 = new oEvaluador() ;
oEvalDsmp = oExam1 ; 

oEvalDsmp.arrEvaluados = [] ;
oEvalDsmp.arrExamsConTarget = [] ;
oEvalDsmp.arrRespuestas1 = [] ;
oEvalDsmp.arrEspDistrItem = [] ;
oEvalDsmp.arrEspDistMax = [] ;

/*
oEvalDsmp.insertaEvaluado = function( nombre ){ //cuidado no tiene control de repeticiones
oEvalDsmp.asignaExamToEvaluados = function( oExamen , oEstud , $arrTargets ){
oEvalDsmp.cantidadExamenes = function( oExamen , oEstud ){
oEvalDsmp.insertaRespuesta2 = function( posiExamen , posiEstudiante , posiEvaluado , posiPregunta , respuesta , pesoEstudiante ){
oEvalDsmp.eliminaRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta ){
oEvalDsmp.insertaRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ){
oEvalDsmp.traeRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta ){
oEvalDsmp.maxRespuestas = function( oExamen , oEstudiante ){
oEvalDsmp.numRespuestas = function( oExamen , oEstudiante , oPregunta ){
oEvalDsmp.preValidaRespuesta1 = function( exam , estud , eval , preg , resp ){
oEvalDsmp.insertaRespValida1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ){
oEvalDsmp.validaTodoResp = function( oExamen , oEstudiante ){
oEvalDsmp.muestraTituloExamen = function(  oExamen , oEstudiante , posMiPregunta ){
oEvalDsmp.muestraPreguntaExamen = function(  oExamen , oEstudiante , posMiPregunta ){
oEvalDsmp.miFuncion = function( $posDistractor , oExamen , oEstudiante , oPregunta , numPregunta ){
oEvalDsmp.clickCambioPregunta = function( oExamen , oEstudiante , $direcc ){
oEvalDsmp.serializeRpta2 = function(){
oEvalDsmp.unserializeRpta2 = function( $texto ){
oEvalDsmp.serializeRpta1 = function(){
oEvalDsmp.unserializeRpta1 = function( $miTexto ){
oEvalDsmp.archivar = function( menu ){
oEvalDsmp.archivar1 = function( nomArchivo , opcion ){
    oEvalDsmp.archivaJSONresp = function(){
    oEvalDsmp.recuperaJSONresp = function(){
    oEvalDsmp.leeJSONresp = function(){
oEvalDsmp.muestraCarga = function(){
    oEvalDsmp.muestraCarga2 = function(){
    oEvalDsmp.listaRespuestas = function(){
*/

oEvalDsmp.insertaEvaluado = function( nombre ){ //cuidado no tiene control de repeticiones
    //var nodo = [] ;
    //var nodo = new Object() ;
    var nodo = {} ;
    nodo.nombre = nombre ;
    nodo.posic = this.arrEvaluados.length ;
    iConsola( "this.insertaEvaluado nodo" , [nodo.posic] ) ;
    this.arrEvaluados[nodo.posic] = nodo ;
    return nodo ;
}


oEvalDsmp.muestraEvaluado = function( posic ){
    console.log( "oEvalDsmp.muestraEvaluado this" , this )
    return this.arrEvaluados[posic].nombre ;
}


//oEvalDsmp.asignaExamToTargets( oExamen , $arrTargets ){: este metodo es equivalente a asignaExamenEvaluados, no tiene control de errores de repeticion de asignación por lo que si se asigna dos veces podría haber error por inncosistencia en duplicidad
oEvalDsmp.asignaExamToEvaluados = function( oExamen , oEstud , $arrTargets ){
    var $i = 0 ;
    var $miNodo ;

    iConsola("oEvalDsmp.asignaExamToEvaluados $arrTargets" , $arrTargets ) ;

    for ( $i = 0 ; $i < this.arrExamsConTarget.length ; $i++ ){
        $miNodo = this.arrExamsConTarget[$i] ;
        if (( $miNodo.posExamen == oExamen.posic ) && ( $miNodo.posEstud == oEstud.posic )){ //quiere decir que es una asignación repetida, no se crea un nodo nuevo sino sobreescribir el actual
            $miNodo.miArrEval = $arrTargets ;
            this.arrExamsConTarget[$i] = $miNodo ;
            return $miNodo ;
        }
    }
    //si llega acá es porque la inserción no está repetida y efectivamente se inserta un nodo nuevo
    iConsola( "oEvalDsmp.asignaExamToEvaluados oEstud" , [oEstud] ) ;
    var nodo = {
        posExamen : oExamen.posic ,
        posEstud : oEstud.posic ,
        miEstud : oEstud ,
        miArrEval : $arrTargets ,
        posic :  this.arrExamsConTarget.length 
    }
    iConsola( "oEvalDsmp.asignaExamToEvaluados" , [nodo] ) ;
    this.arrExamsConTarget[nodo.posic] = nodo ;
    return nodo ;
}

//oEvalDsmp.cantidadExamenes = function( estud , preExam ){: retorna la cantidad de examenes generados a paritr de preExam que tiene asignados estud 
oEvalDsmp.cantidadExamenes = function( oExamen , oEstud ){
    var $i = 0 ;
    for ( $i = 0 ; $i < this.arrExamsConTarget.length ; $i++ ){
        $miNodo = this.arrExamsConTarget[$i] ;
        if (( $miNodo.posExamen == oExamen.posic ) && ( $miNodo.posEstud == oEstud.posic )){ 
            return $miNodo.miArrEval.length ;
        }
    }
    return 0 ; //si sale del for es que no había targets(evaluados) asignados al examen,estud
}

oEvalDsmp.eliminaRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta ){
    for ( let $k = 0 ; $k < this.arrRespuestas1.length ; $k++ ){
        $datoT = this.arrRespuestas1[$k] ;
        if (( oExamen.posic == $datoT.posExam ) && ( oEstudiante.posic == $datoT.posEstud ) && ( oPregunta.posic == $datoT.posPreg ) && ( oEvaluado.posic == $datoT.posEval )){
            //aca ya estamos dnd queremos estar es donde se hacen las acciones, la acción es eliminar la respuesta
            this.arrRespuestas1.splice( $k , 1) ;
            return true ;
        }
    }
    //si llega acá no encontró respuesta para eliminar
    return false ;
}

//oEvalDsmp.insertaRespuesta2 = function( posiExamen , posiEstudiante , posiEvaluado , posiPregunta , respuesta , pesoEstudiante ){: inserta la respuesta con base en las posiciones de los diferetnes elementos definidos
oEvalDsmp.insertaRespuesta2 = function( posiExamen , posiEstudiante , posiEvaluado , posiPregunta , respuesta , pesoEstudiante ){
    //esta función es super débil de control de inconsistencias, ni siquiera valida si la pregunta existe ni valida nada
    //var dato = [] ; 
    //var dato = new Object() ;
    var dato = {} ;
    dato.posExam = posiExamen ;  
    dato.posEstud = posiEstudiante ;
    dato.posEval = posiEvaluado ;
    //dato.posPreg = oPregunta.posic ;
    dato.posPreg = posiPregunta ;
    dato.rsp = respuesta ;
    dato.peso = pesoEstudiante ;

    iConsola("this.insertaRespuesta1 antes de for: dato" , [ dato ] ) ;

    for ( let $k = 0 ; $k < this.arrRespuestas1.length ; $k++ ){
        $datoT = this.arrRespuestas1[$k] ;
        iConsola("this.insertaRespuesta dentro for: datoT" , [ $datoT ] ) ;
        if (( dato.posExam == $datoT.posExam ) && ( dato.posEstud == $datoT.posEstud ) && ( dato.posEval == $datoT.posEval ) && ( dato.posPreg == $datoT.posPreg ) ){
            //aca ya estamos dnd queremos estar es donde se hacen las acciones, la acción es sobreescribir la respuesta
            iConsola("this.insertaRespuesta dentro de pregunta ya respondida: dato" , [ dato ] ) ;
            this.arrRespuestas1[$k] = dato ;
            return dato ;
        }
    }
    //si llega acá es porque no había respuesta anterior
    this.arrRespuestas1.push( dato ) ;
    return dato ;
}

oEvalDsmp.insertaRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ){
    //esta función es super débil de control de inconsistencias, ni siquiera valida si la pregunta existe ni valida nada
    //var dato = [] ; 
    //var dato = new Object() ;
    var dato = {} ;
    dato.posExam = oExamen.posic ;  
    dato.posEstud = oEstudiante.posic ;
    dato.posEval = oEvaluado.posic ;
    //dato.posPreg = oPregunta.posic ;
    dato.posPreg = oPregunta[2].posic ;
    dato.rsp = respuesta ;
    dato.peso = pesoEstudiante ;

    iConsola("this.insertaRespuesta1 antes de for: dato" , [ dato ] ) ;

    for ( let $k = 0 ; $k < this.arrRespuestas1.length ; $k++ ){
        $datoT = this.arrRespuestas1[$k] ;
        iConsola("this.insertaRespuesta dentro for: datoT" , [ $datoT ] ) ;
        if (( dato.posExam == $datoT.posExam ) && ( dato.posEstud == $datoT.posEstud ) && ( dato.posEval == $datoT.posEval ) && ( dato.posPreg == $datoT.posPreg ) ){
            //aca ya estamos dnd queremos estar es donde se hacen las acciones, la acción es sobreescribir la respuesta
            iConsola("this.insertaRespuesta dentro de pregunta ya respondida: dato" , [ dato ] ) ;
            this.arrRespuestas1[$k] = dato ;
            return dato ;
        }
    }
    //si llega acá es porque no había respuesta anterior
    this.arrRespuestas1.push( dato ) ;
    return dato ;
}

oEvalDsmp.traeRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta ){
    var posExam = oExamen.posic ; //ya tengo la posición del examen
    var posEstud = oEstudiante.posic ; 
    var posEval = oEvaluado.posic ;
    var posPreg = oPregunta.posic ; // ya tengo la posición de la pregunta
    var $distractor = null ;

    for ( $dato of this.arrRespuestas1 ){
        if ( (posExam == $dato.posExam) && ( posEval == $dato.posEval ) && ( posEstud == $dato.posEstud ) && ( posPreg == $dato.posPreg ) ){
            //aca ya estamos dnd queremos estar es donde se hacen las acciones
            //en este caso la acción es averiguar cuál es el distractor que respondió el estudiante
            $distractor = $dato.rsp ;
            return $distractor ;
        }
    }
    // si llegá acá no encontró repuesta
    return $distractor ; 
}

//oEvalDsmp.maxRespuestas = function( oExamen , oEstudiante ){: para esta función introduje un arreglo master que se llama "oEvalDsmp.arrEspDistMax", en esta funcion se revela la contradicción de tener ese arreglo master general para todos los distractores montado sobre un objeto cuyas preguntas puede caad una tener su propio set de distractores, por eso se ve raro, y algún día se podría validar si más bien sacamos lo distractores de la pregunta para esta implmentación y los dejamos como un arreglo global general
//return: un arreglo con la catidad máxima de respuestas validas para cada distractor
oEvalDsmp.maxRespuestas = function( oExamen , oEstudiante ){
    var $arrSalida = [] ;
    var $size = oEvalDsmp.arrEspDistMax.length ;  //busca la máxima cantidad de distractores para la pregunta
    var $fact = 0 ;
    var $total = this.cantidadExamenes( oExamen , oEstudiante ) ;
    if ( $total <= 10 ){
        $fact = 3 ;
    }else if ( $total <= 20 ){
        $fact = 2.4 ;
    }else{
        $fact = 1.6 ;
    }
    for ( let $k = 0 ; $k < $size ; $k++ ){
        //$arrSalida[$k] = Math.floor( oEvalDsmp.arrEspDistMax[$k] * $fact * $total + 0.1 ) ;
        $arrSalida[$k] = ( oEvalDsmp.arrEspDistMax[$k] * $fact * $total + 0.1 ) ;
        if ( $arrSalida[$k] < 1.1 ){
            $arrSalida[$k] = 1.1 ;
        }
    }
    return $arrSalida ;
}

//oEvalDsmp.numRespuestas = function( oExamen , oEstudiante , oPregunta ){: 
//return: un arreglo con la cantidad de respuestas que se han dado a cada distractor
oEvalDsmp.numRespuestas = function( oExamen , oEstudiante , laPregunta ){
    var $arrSalida = [] ;
    var oPregunta = laPregunta[2] ;
    var $size = oPregunta.arrDistractor.length ;  //busca la máxima cantidad de distractores para la pregunta
    for ( let $k = 0 ; $k < $size ; $k++ ){
        $arrSalida[$k] = 0 ;
    }

    for ( let $k = 0 ; $k < this.arrRespuestas1.length ; $k++ ){
        $datoT = this.arrRespuestas1[$k] ;
        //iConsola("oEvalDsmp.numRespuestas" , [ oExamen.posic , oEstudiante.posic , oPregunta.posic ] ) ;
        //iConsola("oEvalDsmp.numRespuestas arrRespuestas1[$k]" , [ $datoT.posExam , $datoT.posEstud , oPregunta.posic ] ) ;
        if (( oExamen.posic == $datoT.posExam ) && ( oEstudiante.posic == $datoT.posEstud ) && ( oPregunta.posic == $datoT.posPreg )){
            //aca ya estamos dnd queremos estar es donde se hacen las acciones, la acción es anotar la respuesta
            if ( $datoT.rsp < $size ){
                iConsola("entre", ["oEvalDsmp.numRespuestas", $datoT.rsp ]) ;
                $arrSalida[$datoT.rsp]++ ;
            }else{
                iConsola("ERROR GRAVE", [ "oEvalDsmp.numRespuestas" , "valor respuesta es mayor que el numero de distractores" , $datoT.rsp , $size ] ) ;
            }
        }
    }
    return $arrSalida ;
}

//oEvalDsmp.preValidaRespuesta1 = function( resp , preg , exam , estud , eval ){: esta función, es parte de la muy particular implementación enfocada a percentiles de la evualación de profes. es decir por ser especifica es función  de una instancia. lo que hace es validar si una respuesta si se puede admitir como respuesta valida, también en este contexto surge la necesidad de "quitar" respuestas en otra función 
oEvalDsmp.preValidaRespuesta1 = function( exam , estud , eval , preg , resp ){
    var $arrResps = this.numRespuestas( exam , estud , preg ) ;
    var $arrMax = this.maxRespuestas( exam , estud ) ;
    console.log( "pevalidarespuesta1", $arrResps , $arrMax ) ;
    //alert("pausa pevalidarespuesta 1") ;
    if (( $arrResps[resp] + 1 ) < $arrMax[resp] ){
        return true ;
    }else{
        return false ;
    }
}

//oEvalDsmp.insertaRespValida1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , numrespuesta , pesoEstudiante ): asigna la respuesta en la posición numrespuesta al target oEvaluado, pero verificanco las condiciones de cantidad de oevauados máximos que puede haber en cada respuestas de cada oPregunta, si el target ya estaba asignado a otra respuesta, lo reasigna al número de respuesta
oEvalDsmp.insertaRespValida1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ){
    var $ok =  this.preValidaRespuesta1( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta ) ;
    if ( $ok ){
        this.insertaRespuesta1( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ) ;
        return true ;
    }else{
        $glError = "Error: excede el percentil del rango. Debe mover un elemento actual a otro rango diferente" ;
        return false ;
    }
}

oEvalDsmp.validaTodoResp = function( oExamen , oEstudiante ){
    var $arrTemp = this.listaPreguntas( oExamen ) ;   
    var oPregunta ; 
    var $elem ;
    var $resp ;
    var $arrEvalds = [] ;
    var $conteo = 0 ;
    var $i = 0 , $j = 0 ;
    for ( $miNodo of this.arrExamsConTarget ){        
        if (( $miNodo.posExamen == oExamen.posic ) && ( $miNodo.posEstud == oEstudiante.posic )){ 
            $arrEvalds = $miNodo.miArrEval ;
            break ;
        }
    }

    $glError = "" ;
    for ( $miPreg of $arrTemp ){
        oPregunta = $miPreg[2] ;
        for ( $i = 0 ; $i < $arrEvalds.length ; $i++ ){
            $elem = $arrEvalds[$i] ;
            $resp = this.traeRespuesta1( oExamen , oEstudiante , $elem , oPregunta ) ;
            console.log("oEvalDsmp.muestraPreguntaExamen: evaluado $resp" , $elem , $resp ) ;
            if ( $resp == null ){
                $j = oPregunta.posic + 1 ;
                $glError += "falta: Pregunta " + $j + "," + $elem.nombre + "<br>" ;
                $conteo++ ;
            }else{
                //nada
            }
        }
    }
    if ( $conteo == 0 ){
        return 1 ;
    }else{
        return 0 ;
    }
}

oEvalDsmp.muestraTituloExamen = function(  oExamen , oEstudiante , posMiPregunta ){
    var $tex ;
    //$tex =  oExamen.instrucciones.slice( 0 , 80 ) + " <b>(desplazarse sobre este texto para ver)</b>" ;
    
    var $html = "<h2>" + oExamen.titulo + " (Evaluador:" + oEstudiante.nombre + ")</h2>" ;
    $html += '<b style=\"background-color:LightSalmon;\" title="' + glInstrucc1 + '">&nbsp Instrucciones: desplazar cursor sobre este aviso &nbsp</b><br>' ;

    //$tex =  glInstrucc1.slice( 0 , 80 ) + " <b  style=\"background-color:Red;\">(desplazarse sobre este texto para ver)</b>" ;
        
    var $arrTemp = this.listaPreguntas( oExamen ) ;
    if ( $arrTemp.length > 1 ){
        //$html += "" ;
        if ( posMiPregunta == 0 ){
            var posiA = 0 ;
            var posiB = 1 ;
            //$html +='<button type="button" onclick="oEvalDsmp.muestraCarga()"><b>ABRIR</b></button>' ;
            //$html +='<button type="button" onclick="oEvalDsmp.muestraInicio()"><b>ABRIR</b></button>' ; //20200418: para empezar a usar las funcionalidades nuevas de arma_evalua.js
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta(  ex1 , est1 , '+posiB+')">Siguiente \>\></button>' ;    
        }else if (( posMiPregunta + 1 ) == $arrTemp.length ){
            var posiA = posMiPregunta - 1 ;
            var posiB = posMiPregunta ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta( ex1 , est1 , '+posiA+')">\<\< Anterior </button>' ;
            $html +='<button type="button" onclick="oEvalDsmp.archivar(1)">Validar</button>' ;
        }else{
            var posiA = posMiPregunta - 1 ;
            var posiB = posMiPregunta + 1 ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta( ex1 , est1 , '+posiA+')">\<\< Anterior</button>' ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta(  ex1 , est1 , '+posiB+')">Siguiente \>\></button>' ;
        }
    }

    //$tex = "<b style=\"background-color:Red;\">Instrucciones: desplazar cursor acá para ver</b>" ;
    //$html += ' <b style=\"background-color:Red;\" title="' + glInstrucc1 + '">Instrucciones: desplazar cursor acá </b>' ;

    return $html ;
}

//this.msuestraPreguntaExamen( oPregunta , oExamen) 20200211:OJO falta manejar el parametro yoEstudiante
//POST: muestra la pregunta de todos los evaluados en HTML
//this.muestraPreguntaExamen = function( oArrPregunta , oExamen ){
//PRE: arrExamenes.length > 0 && arrExamenes vienen todo del mismo preExamen && oArrPegunta es parte del preExamen 
//this.muestraPreguntaExamen = function( oArrPregunta , arrExamenes , yoEstudiante ){
//oEvalDsmp.muestraPreguntaExamen = function(  oExamen , oEstudiante , oPregunta ){


oEvalDsmp.muestraPreguntaExamen = function(  oExamen , oEstudiante , posMiPregunta ){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;
    var $arrGuardaRespuestas = [] ;
    var $arrSinAsignar = [] ;
    var $t
    var $resp ;
    var $html ;

    //$html = oEvalDsmp.muestraTituloExamen (  oExamen , oEstudiante , posMiPregunta ) ;

    /* $html = "<h2>" + oExamen.titulo + " (Evaluador:" + oEstudiante.nombre + ")</h2>" ;
    $html += "<p>" + oExamen.instrucciones +"</p>" ;

    var $arrTemp = this.listaPreguntas( oExamen ) ;
    if ( $arrTemp.length > 1 ){
        //$html += "" ;
        if ( posMiPregunta == 0 ){
            var posiA = 0 ;
            var posiB = 1 ;
            $html +='<button type="button" onclick="oEvalDsmp.muestraCarga()"><b>ABRIR</b></button>' ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta(  ex1 , est1 , '+posiB+')">Siguiente \>\></button>' ;    
        }else if (( posMiPregunta + 1 ) == $arrTemp.length ){
            var posiA = posMiPregunta - 1 ;
            var posiB = posMiPregunta ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta( ex1 , est1 , '+posiA+')">\<\< Anterior </button>' ;
            $html +='<button type="button" onclick="oEvalDsmp.archivar(1)"><b>GUARDAR</b></button>' ;
        }else{
            var posiA = posMiPregunta - 1 ;
            var posiB = posMiPregunta + 1 ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta( ex1 , est1 , '+posiA+')">\<\< Anterior</button>' ;
            $html += '<button type="button" onclick="oEvalDsmp.clickCambioPregunta(  ex1 , est1 , '+posiB+')">Siguiente \>\></button>' ;
        }
    } */

    var $arrTemp = this.listaPreguntas( oExamen ) ;
    var oPregunta = $arrTemp[posMiPregunta][2] ;    

    $t = posMiPregunta + 1 ;
    $html = "<p><b>" + $t + ". " ;

    $t = oPregunta.tema ;
    $html +=  $t + "</b><br>" ;


    $t = oPregunta.sPregunta ;
    $html += $t + "</p>" ;
    
    var $arrEvalds = [] ;
    var $i = 0 ;
    //for ( $i = 0 ; $i < this.arrExamsConTarget.length ; $i++ ){
        //$miNodo = this.arrExamsConTarget[$i] ;
    for ( $miNodo of this.arrExamsConTarget ){        
        if (( $miNodo.posExamen == oExamen.posic ) && ( $miNodo.posEstud == oEstudiante.posic )){ 
            $arrEvalds = $miNodo.miArrEval ;
            break ;
        }
    }
    //$arrEvalds tiene un arreglo de todos los evaluados

   
    var $i ;
    var $elem ;

    //for ( var $i = 0 ; $i < arrExamenes.length ; $i++ ){
    //for ( $elem of $arrEvalds ){
    for ( $i = 0 ; $i < $arrEvalds.length ; $i++ ){
    //aca la idea es llenar un par de arreglos, uno indexado por distractores, con el índice de los exámenes que están con ese distractor, y otro arrreglo de los examenes que no tiene respuesta
        $elem = $arrEvalds[$i] ;
        $resp = this.traeRespuesta1( oExamen , oEstudiante , $elem , oPregunta ) ;
        console.log("oEvalDsmp.muestraPreguntaExamen: evaluado $resp" , $elem , $resp ) ;
        if ( $resp != null ){
            if ( typeof $arrGuardaRespuestas[$resp] !== 'undefined' ){
                $arrGuardaRespuestas[$resp].push( $i ) ;
            }else{
                $arrGuardaRespuestas[$resp] = [] ;
                $arrGuardaRespuestas[$resp].push( $i ) ;
            }
        }else{
            $arrSinAsignar.push( $i ) ;
        }
    }
    iConsola("oEvalDsmp.muestraPreguntaExamen: $arrGuardaRespuestas : resp", [ $arrGuardaRespuestas, $resp ] ) ;

    $html += '<form action="" method="get" id="elMenu" onsubmit="return false;">' ;
    
    for ( $i = 0 ; $i < oPregunta.arrDistractor.length ; $i++ ){
        $t = oPregunta.arrDistractor[$i] ;
        //$html += '<br><br>' + $t + '<br> <button type="button" onclick="oEvalDsmp.miFuncion(' + $i + ', ex1 , oEstud3 , oPregunta)">Añadir_'+$i+'</button>' ;
        
        $html += '<b>' + $t + '</b>' ;
        $html +=  '<br><button type="button" onclick="oEvalDsmp.miFuncion(' + $i + ', ex1 , est1 , oPregunta, ' + posMiPregunta + ')">Insertar </button> ' ;


        //$html +=  '<button type="button" onclick="oEvalDsmp.miFuncion(' + $i + ', ex1 , est1 , oPregunta, ' + posMiPregunta + ')">Insertar </button> ' + $t + "<br>" ; 

        if ( typeof $arrGuardaRespuestas[$i] !== 'undefined' ){
        //20200212: acabo de hacer este ajuste para que no saque error de undefined, ahora toca hacer TEST de si efectivamente muestra lo correcto cuando si hay respuestas ya contestadas a la pregunta
            for ( var $j = 0 ; $j < $arrGuardaRespuestas[$i].length ; $j++ ){
                $posExam = $arrGuardaRespuestas[$i][$j] ;
                //$t = arrExamenes[$posExam].evaluado.nombre ;
                $t = $arrEvalds[$posExam].nombre ;
                $html += '[<input type="checkbox" name="enviar"  id="padre' + $posExam + '" value="' + $posExam + '"> ' + $t + ']';
            }
        }else{
            $html += '[ VACIO ]' ;
        }
        $html += "<br><br>"
    }

    var $j = 0 ;
    $html += "<b>Elementos que están pendientes de asignar a un rango</b>" ;
    for ( var $i = 0 ; $i < $arrSinAsignar.length ; $i++ ){
        //$t = this.arrEvaluaciones[oExamen.Posic][$i] ;
        $posExam = $arrSinAsignar[$i] ;
        //$t = arrExamenes[$posExam].evaluado.nombre ;
        $t = $arrEvalds[$posExam].nombre ;
        $html +=  '<br>[<input type="checkbox" name="enviar"  id="padre' + $posExam + '" value="' + $posExam + '" > ' + $t  + ']' ; 
        $j++ ;
    }
    if ( $i == 0 ){
        $html += '<br>[ VACIO ]' ;
    }
    for (  ; $j < 7 ; $j++ ){
        $html += '<br>' ;
    }

    $html += '</form>' ;

    return $html ;
    //document.write( $html ) ;
}


//oEvalDsmp.miFuncion = function( $posDistractor , oExamen , oEstudiante , oPregunta , numPregunta ): funcion onClick que asigna el/los targests elegidos en el formulario "elMenu" en la correspondiente respuesta 
oEvalDsmp.miFuncion = function( $posDistractor , oExamen , oEstudiante , oPregunta , numPregunta ){
    var $arrMeter = [] ;
    var $elegido ;
    var x = document.forms.namedItem( "elMenu" ).elements ;
    console.log("x" ,  x ) ;
    for (let i = 0; i < x.length; i++) {
        if (( x[i].name == "enviar" ) && (x[i].checked == true )){
            $arrMeter.push( x[i].value ) ;
            $elegido = x[i].value ; //para un sólo valor elegido
            //txt += x[i].value + "," ;
        }
    }
    console.log("$arrMeter" , $arrMeter ) ;
    if ( $arrMeter.length == 0 ){
        return 0 ;
    }

    for ( $miNodo of this.arrExamsConTarget ){        
        if (( $miNodo.posExamen == oExamen.posic ) && ( $miNodo.posEstud == oEstudiante.posic )){ 
            $arrEvalds = $miNodo.miArrEval ;
            break ;
        }
    }

    var oEvaluado ;

    for ( mielegido of $arrMeter ){
        //oEvaluado = $arrEvalds[$elegido] ;    
        oEvaluado = $arrEvalds[mielegido] ; 

        //console.log("oEvalDsmp.miFuncion oPregunta:" , oPregunta ) ;
        var $arrTemp = this.listaPreguntas( oExamen ) ;
        var oPregunta = $arrTemp[numPregunta] ;
        console.log("oEvalDsmp.miFuncion oPregunta2:" , oPregunta ) ;
    
        var $ok = this.insertaRespValida1( oExamen , oEstudiante , oEvaluado , oPregunta , $posDistractor , 1 ) ;
        if ( $ok ){
            //alert("asignación correcta") ;
        }else{
            alert($glError) ;
            $win = window.open( "nada.html" , "ventana1" , "width=620,height=300,scrollbars=NO") ;
            var $texto = "<b>¿Por qué no puedo incorporar a '" + oEvaluado.nombre + "' en este rango?</b><br>" ;
            $texto += "El motivo es que hay un número máximo de compañeros que se pueden ubicar en cada rango; este número es más restringido en rangos superiores e inferiores. Así es que si tienes varios candidatos a ubicar en el rango más alto, analiza bien, se muy selectivo y sólo ubica allí a los más destacados del grupo que tienes en mente." ;
            $texto += "<br><b>¿Pero es que todos los del grupo son equivalentes?</b><br>" ;
            $texto += "Si definitivamente no logras identificar algunos elementos que sobresalgan en esta categoría, entonces la sugerencia es que los cambies a todos a una categoría más cercana al promedio, donde el número máximo es menos restringido." ;
            $texto += "<br><br>El motivo es que esta prueba incorpora un filtro para lograr un emparejamiento estadísticamente consistente de los resultados.<br><br>Esperamos que estas indicaciones hayan sido de utilidad." ;
            $win.document.write( $texto ) ;
        }
    }
   
    var $html = this.muestraPreguntaExamen( oExamen , oEstudiante, numPregunta ) ;
    //document.write( $html ) ;
    document.getElementById( "salidaHtml" ).innerHTML = $html ;
    $html = this.muestraTituloExamen( ex1 , oEstudiante , numPregunta ) ;
    document.getElementById( "tituloHtml" ).innerHTML = $html ;
    
}

// oEvalDsmp.clickCambioPregunta = function( oExamen , oEstudiante , $direcc ){ //funcion para mostrar pregunta específica de un examen
oEvalDsmp.clickCambioPregunta = function( oExamen , oEstudiante , $direcc ){
    
    var $arrTemp = this.listaPreguntas( oExamen ) ;
    var oPregunta = $arrTemp[$direcc] ;// OJO 20200317: tal vez lo que se va a hacer es cambiar muestraPregunta examen para que estos parametros sean numéricos y no un objeto

    var $html = this.muestraPreguntaExamen( oExamen , oEstudiante, $direcc ) ;
    //document.write( $html ) ;
    document.getElementById( "salidaHtml" ).innerHTML = $html ;
    $html = this.muestraTituloExamen( ex1 , oEstudiante , $direcc ) ;
    document.getElementById( "tituloHtml" ).innerHTML = $html ;
    document.getElementById( "salida" ).innerHTML = "" ;
    document.getElementById( "salidaTexto" ).innerHTML = "" ;
    
}

// oEvalDsmp.serializeRpta2 = function(){: serializa únicamente this.arrRespuesta1, es una función para usar en el maestro de evaluación donde se van cargando todos los resultados
oEvalDsmp.serializeRpta2 = function(){
    //var $b = new Object() ;
    //var $b = {} ;

    var $texto ;

    $texto = JSON.stringify( this.arrRespuestas1 ) ;
    console.log( "oEvalDsmp:", oEvalDsmp ) ;

    return $texto ;
}

oEvalDsmp.unserializeRpta2 = function( $texto ){
    
    var $obj ; 
    var $ok = true ;
    try {
        $obj = JSON.parse( $texto ) ;
    }
    catch (err){
        $glError = "ERROR: Texto tiene errores no se puede procesar" ;
        $ok = false ;
    }
     
    //console.log( "obj" , $obj ) ;
    //alert( "unserializeRpta1" ) ;

    if ( typeof $obj !== 'undefined' ){
       this.arrRespuestas1 = $obj ;
    }
    return $ok ;
}

oEvalDsmp.serializeRpta1 = function(){
    //var $b = new Object() ;
    var $b = {} ;

    var $nodo ;
    var $texto1 ;
    var $texto ;

    $texto = '{"arrRespuestas1":[' ;

    for ( $nodo of this.arrRespuestas1 ){
        $texto = $texto + JSON.stringify( $nodo ) + "," ;
    }   
    $texto = $texto.slice( 0 , -1 ) + ']' ; 
    
    /*//Esta sección se elimina ya que arrExamsConTarget incluye la identidad del estudiante
    $texto += ',"arrEstudiantes":[' ;
    for ( $nodo of this.arrEstudiantes ){
        $texto = $texto + JSON.stringify( $nodo ) + "," ;
    }
    $texto = $texto.slice( 0 , -1 ) + ']' ; */ 
    
    $texto += ',"arrExamsConTarget":[' ;
    for ( $nodo of this.arrExamsConTarget ){
        $texto = $texto + JSON.stringify( $nodo ) + "," ;
    }
    $texto = $texto.slice( 0 , -1 ) + "]}" ;

    /* $b["estudiantes"] = this.arrEstudiantes ;
    $b["evaluaciones"] = this.arrEvaluaciones ;
    $b["evaluados"] = this.arrEvaluados ;
    $b["evaluados"] = this.arrRespuestas1 ;
    $b["examenes"] = this.arrExamenes ;
    $b["exConTarg"] = this.arrExamsConTarget ;
    $b["preguntas"] = this.arrPreguntasTodas ;
    $b["respuestas"] = this.arrRespuestas ;
    $b["respuestas1"] = this.arrRespuestas1 ;  
    
    console.log( "oEvalDsmp:", oEvalDsmp ) ;
    alert( $b.toString() ) ;
    
    var texto = JSON.stringify( $b ) ; */

    console.log( "oEvalDsmp:", oEvalDsmp ) ;

    return $texto ;
}

oEvalDsmp.unserializeRpta1 = function( $miTexto ){
    
    //var $texto = '{"arrRespuestas1":[{"posExam":0,"posEstud":4,"posEval":5,"posPreg":1,"rsp":1,"peso":1},{"posExam":0,"posEstud":4,"posEval":4,"posPreg":1,"rsp":0,"peso":1},{"posExam":0,"posEstud":4,"posEval":3,"posPreg":1,"rsp":1,"peso":1},{"posExam":0,"posEstud":4,"posEval":1,"posPreg":1,"rsp":1,"peso":1},{"posExam":0,"posEstud":3,"posEval":1,"posPreg":4,"rsp":2,"peso":1}],"arrEstudiantes":[{"nombre":"Jose Luis","posic":0},{"nombre":"Carlos Vanegas","posic":1},{"nombre":"Mauricio Acosta","posic":2},{"nombre":"Gener Muñoz","posic":3},{"nombre":"Ivonne castañeda","posic":4}],"arrExamsConTarget":[{"posExamen":0,"posEstud":2,"miArrEval":[{"nombre":"jorgito2","posic":1},{"nombre":"pablito3","posic":2},{"nombre":"pedrito4","posic":3}],"posic":0},{"posExamen":0,"posEstud":4,"miArrEval":[{"nombre":"jaimito1","posic":0},{"nombre":"jorgito2","posic":1},{"nombre":"pablito3","posic":2},{"nombre":"pedrito4","posic":3},{"nombre":"samy5","posic":4},{"nombre":"max6","posic":5},{"nombre":"jaimitoa11","posic":8},{"nombre":"jorgitoa12","posic":9}],"posic":1},{"posExamen":0,"posEstud":3,"miArrEval":[{"nombre":"jaimito1","posic":0},{"nombre":"jorgito2","posic":1},{"nombre":"pablito3","posic":2},{"nombre":"pedrito4","posic":3},{"nombre":"samy5","posic":4},{"nombre":"max6","posic":5},{"nombre":"jaimitoa11","posic":8},{"nombre":"jorgitoa12","posic":9}],"posic":2},{"posExamen":0,"posEstud":0,"miArrEval":[{"nombre":"max6","posic":5},{"nombre":"peye7","posic":6},{"nombre":"popy8","posic":7},{"nombre":"jaimitoa11","posic":8},{"nombre":"jorgitoa12","posic":9}],"posic":3}]}' ;

    var $texto = $miTexto ;
    var $obj ; 
    var $ok = true ;
    try {
        $obj = JSON.parse( $texto ) ;
    }
    catch (err){
        $glError = "ERROR: Texto tiene errores no se puede procesar" ;
        $ok = false ;
    }
     
    //console.log( "obj" , $obj ) ;
    //alert( "unserializeRpta1" ) ;

    if ( typeof $obj !== 'undefined' ){
        if ( typeof $obj.arrExamsConTarget !== 'undefined' ){
            //this.arrEstudiantes = $obj.arrEstudiantes ;
            this.arrExamsConTarget = $obj.arrExamsConTarget ;
            this.arrRespuestas1 = $obj.arrRespuestas1 ;
        }
        if ( this.arrExamsConTarget.length == 0 ){
            $glError = "ERROR: falta el nombre del evaluador" ;
            $ok = false ;
        }
    }
    return $ok ;
}

oEvalDsmp.archivar = function( menu ){
    //alert("hola") ;
    console.log("en oEvalDsmp.archivar menu" , menu ) ;
    //alert("hola menu:" + menu ) ;
    if ( menu == 1 ){   //opcion archivar
        //var $nom = prompt("Nombre del Archivo para guardar") ;
        var $nom = "temporal__" ;
        this.archivar1( $nom , 1 ) ;
        //alert("La estructura ha sido guardada con el nombre:" + $nom ) ;
                
    }else if( menu == 2 ){  //opcion recuperar
        //20200409: OJO esta sección no se ha implementado
        var $nom = prompt("Nombre del Archivo para recuperar") ;
        if ( $nom == "" ){
            $nom = "temporal__" ;
        }
        this.archivar1( $nom , 2 ) ;
        
    }else{
        //nada
    }
    //organigrama.html() ;
}

oEvalDsmp.archivar1 = function( nomArchivo , opcion ){
    var $miTexto ;
    var $ok ;
    if ( opcion == 1 ){  //quiere decir que voy a archivar
        document.getElementById( "salidaHtml" ).innerHTML = "" ;
        if ( this.validaTodoResp( ex1 , est1 )){
            //localStorage.setItem( "temporal__" , $miTexto ) ;
            //localStorage.setItem( nomArchivo , $miTexto ) ;
            
            $miTexto = "Por favor copie y guarde en archivo llamado prueba.txt:" ;
            //document.getElementById( "salida" ).innerHTML = $miTexto ;
            $miTexto = this.serializeRpta1() ;
            $miTexto = '<textarea name="jsonMsj" id="fname" rows="15" cols="100">' + $miTexto  + '</textarea><br>' ;
            //document.getElementById( "salidaTexto" ).innerHTML = $miTexto ;
            //$win = window.open( "nada.html" , "ventana1" , "width=600,height=300,scrollbars=NO") ;
            //$win.document.write( $miTexto ) ;
            $ok = true ;

            var $html = '<form action="js_canal.php" method="post" name="miPrueba1" onsubmit="return oEvalDsmp.archivaServerPequeJSON()">' ;
            $html += '<br>Validación OK: todos los evaluados han sido asignados, puede archivar repuestas en servidor: ' ;
            $html += '<input type="submit" value="ARCHIVAR Respuestas Servidor">' ;
            $html += '<input type="hidden" id="php_nombre" name="php_nombre" value="">' ;
            $html += '<input type="hidden" id="php_prueba" name="php_prueba" value="">' ;
            $html += '<input type="hidden" id="php_estado" name="php_estado" value="">' ;
            $html += '</form>' ; 

            document.getElementById( "salidaHtml" ).innerHTML = $html ;

/* 
            $miTexto = this.serializeRpta2() ;  //este es el que se va a mandar al servidor
            const XHR = new XMLHttpRequest();
            var FD  = new FormData();
            // Push our data into our FormData object
            FD.append( "php_prueba" , $miTexto ) ;
            FD.append( "php_estado" , 2 ) ;

            // Define what happens on successful data submission
            XHR.addEventListener( 'load', function( event ) {
                alert( 'Yeah! Data sent and response loaded.' );
            } );
            // Define what happens in case of error
            XHR.addEventListener(' error', function( event ) {
                alert( 'Oops! Something went wrong.' );
            } );
            XHR.open( 'POST', '/js_canal2.php' ) ;
            //XHR.open( 'POST', '/js_canal.html' ) ;
            XHR.send( FD );
 */

        }else{
            $miTexto = "<br><b>Aun faltan elementos por asignar<b><br>" ;
            document.getElementById( "salida" ).innerHTML = $miTexto ;
            //$miTexto = '<textarea name="jsonMsj" id="fname" rows="15" cols="100">' + $glError  + '</textarea><br>' ;
            document.getElementById( "salidaTexto" ).innerHTML = $glError ;
        }        
    }else if (  opcion == 2  ) { //quiere decir que voy a desarchivar es decir a recuperar        
        $miTexto = "" ;        
        
        $miTexto = document.getElementById( "fname" ).value ;
        //$miTexto = localStorage.getItem(nomArchivo) ;
        if ( $miTexto ){
            //alert( "SI se encontró registro de '" + nomArchivo + "'." ) ;
            $ok = true ;
                
            /* var $previoTexto = this.serializeRpta1() ;
            $previoTexto = "<p>Estructura del Organigrama que acaba de sobreescribir</p>" + $previoTexto ;
            document.getElementById( "salida" ).innerHTML = $previoTexto ; 
            */
            //$win = window.open( "nada.html" , "ventana1" , "width=320,height=300,scrollbars=NO") ;
            //$win.document.write( $miTexto ) ;

            if ( this.unserializeRpta1( $miTexto ) ){   //si se leyo un json válido
                var oEstudiante = this.arrExamsConTarget[0].miEstud ;  //OJO: esta línea asume que siempre estamos hablando de la primera posición del arreglo, lo cual era útil en el contexto de que sólo se asumía que la página creaba su propia miniestructura de evaluación
                est1 = oEstudiante ;  //20200410: variable global 
                var $html = this.muestraTituloExamen( ex1 , oEstudiante , 0 ) ;
                document.getElementById( "tituloHtml" ).innerHTML = $html ;
                $html = this.muestraPreguntaExamen( ex1 , oEstudiante , 0 ) ;
                document.getElementById( "salidaHtml" ).innerHTML = $html ;
                document.getElementById( "salida" ).innerHTML = "" ;
                document.getElementById( "salidaTexto" ).innerHTML = "" ;
            }else{
                alert( $glError ) ;
                document.getElementById( "fname" ).value = "Intente nuevamente" ;
            }
            //document.getElementById( "salidaTexto" ).innerHTML = $previoTexto ;
        }else{
            alert( "NO se encontró registro de '" + nomArchivo + "'. Recuerde que el backup automático se puede recuperar con: temporal__" ) ;
            nomArchivo = "temporal__" ;
            $ok = false ;
        }
    }
    return $ok ;
}


//oEvalDsmp.archivaJSONresp = function(){: fucnion que debe ser llamada desde el HTML para guardara arrrepuesta. crea una copia en el exploradpor y tambien genera un JOSN para copia externa
oEvalDsmp.archivaJSONresp = function(){
    var $nom = prompt("Nombre del Archivo para guardar") ;
    if ( $nom == "" ){
        $nom = "pordefecto__" ;
    }
    
    if ( $nom != undefined ){
        //this.archivar1( $nom , 1 ) ;
        //document.getElementById( "salidaHtml" ).innerHTML = "" ;
        $miTexto = "Respuestas codificadas para guardar:" ;
        document.getElementById( "salida" ).innerHTML = $miTexto ;
        $miTexto = this.serializeRpta2() ;
        localStorage.setItem( $nom , $miTexto ) ;
        alert("las respuestas han sido guardadas en:" + $nom ) ;
        $miTexto = this.serializeRpta1() ;
        //$miTexto = '<textarea name="jsonMsj" id="fname" rows="15" cols="100">' + $miTexto  + '</textarea><br>' ;
        //document.getElementById( "salidaTexto" ).innerHTML = $miTexto ;
        document.getElementById( "fname" ).value = $miTexto ;
    }
}

oEvalDsmp.archivaServerPequeJSON = function(){
    $miTexto = this.serializeRpta2() ;  //este es el que se va a mandar al servidor
    document.forms["miPrueba1"]["php_prueba"].value = $miTexto ;
    document.forms["miPrueba1"]["php_estado"].value = 2 ; //indica al servidor que va a archivar
    console.log(" jsEnvio2 forms: " , document.forms ) ;
    //alert("dentro archivaServerPequeJSON jsEnvio2") ;
    return true ;
}

oEvalDsmp.archivaServerJSON = function(){
    var $nom = prompt("Nombre del identificador de archivo") ;
    if ( $nom == "" ){
        $nom = "pordefecto__" ;
    }
    
    if ( $nom != undefined ){
        //this.archivar1( $nom , 1 ) ;
        //document.getElementById( "salidaHtml" ).innerHTML = "" ;
        
        //$miTexto = "Respuestas codificadas para guardar:" ;
        //document.getElementById( "salida" ).innerHTML = $miTexto ;

        $miTexto = this.serializeRpta2() ;
        document.forms["miPrueba1"]["php_nombre"].value = $nom ;
        document.forms["miPrueba1"]["php_respuestas"].value = $miTexto ;
        document.forms["miPrueba1"]["php_estado"].value = 1 ; //indica al servidor que va a archivar
        console.log(" jsEnvio2 forms: " , document.forms ) ;
        alert("dentro de jsEnvio2") ;
        return true ;


        //localStorage.setItem( $nom , $miTexto ) ;
        //alert("las respuestas han sido guardadas en:" + $nom ) ;
        
        //$miTexto = this.serializeRpta1() ;
        //$miTexto = '<textarea name="jsonMsj" id="fname" rows="15" cols="100">' + $miTexto  + '</textarea><br>' ;
        //document.getElementById( "salidaTexto" ).innerHTML = $miTexto ;
        //document.getElementById( "fname" ).value = $miTexto ;
    }
}

//oEvalDsmp.recuperaJSONresp = function(){: recupera las respuestas guaradadas en explorador y sobreescribe el arreglo de respuestas
oEvalDsmp.recuperaJSONresp = function(){
    var $nom = prompt("Nombre del Archivo para recuperar") ;
    if ( $nom == "" ){
        $nom = "pordefecto__" ;
    }
    
    var $miTexto = localStorage.getItem( $nom ) ;
    console.log("$miTexto",$miTexto) ;

    if ( $miTexto != null ){
        if ( this.unserializeRpta2( $miTexto ) ){
            this.listaRespuestas() ;
            return true ;
        }else{
            alert( "ERROR de lectura de archivo " ) ;
            return false ;
        }
    }else{
        alert( "ERROR no se encuentra archivo " + $nom ) ;
        return false ;
    }

    
    
}

//oEvalDsmp.recuperaServerJSON = function(){ esta función está en implmentación no esta lista, se está cuadrando via php para crear un archivo js que tenga la info en el servidor
oEvalDsmp.recuperaServerJSON = function(){

    //var $miTexto = localStorage.getItem( $nom ) ;
    var $miTexto = glTextoArrResp1 ; //esta variable global está creada en datos/bd_respuestas.js

    if ( this.unserializeRpta2( $miTexto ) ){
        this.listaRespuestas() ;
        return true ;
    }else{
        alert( "ERROR de lectura de archivo " ) ;
        return false ;
    }
}



//oEvalDsmp.JSONresp = function(){: lee el JSON del <form> lo procesa como un arrRespuestas1 insertando convencionalmente si encuentra reprtido reemplaza la respuesta. Retorna el número de respuestas insertadas
oEvalDsmp.leeJSONresp = function(){
    var $texto = "" ; 
    var $obj ; 
    var $ok = true ;
    var $i = 0 ;
    $texto = document.getElementById( "fname" ).value ;
    //$obj = JSON.parse( $texto ) ;
    if ( $texto ){
        try {
            $obj = JSON.parse( $texto ) ;
        }
        catch (err){
            $glError = "ERROR: Texto tiene errores no se puede procesar" ;
            $ok = false ;
        }
        console.log( "$obj" , $obj , $texto ) ;
        
        if ( typeof $obj !== 'undefined' ){
            if ( typeof $obj.arrRespuestas1 !== 'undefined' ){
                for ( $elem of $obj.arrRespuestas1 ){
                    this.insertaRespuesta2( $elem.posExam , $elem.posEstud , $elem.posEval , $elem.posPreg , $elem.rsp , $elem.peso ) ;
                    $i++ ;
                }
            }else{
                $glError = "ERROR: el objeto no tiene arrRespuestas1 definido" ;
                $ok = false ;
            }
        }else{
            $glError = "ERROR: el objeto no esta definido" ;
            $ok = false ;
        }
    }

    if ( $ok ){
        alert ("se procesaron " + $i + "respuestas") ;
        document.getElementById( "fname" ).value = "Copie el texto en esta zona" ;
    }else{
        alert( $glError ) ;
    }
    this.listaRespuestas() ;
    return $i ;
}

oEvalDsmp.muestraCarga = function(){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;

    var $html ;
    if ( document.getElementById( "tituloHtml" ).innerHTML == "" ){
        $html = "<h2>" + ex1.titulo + "</h2>" ;
        $html += "<p>" + ex1.instrucciones +"</p>" ;
        document.getElementById( "tituloHtml" ).innerHTML = $html ;
    }
    
    $html = "<h3>Abrir información de evaluación</h3>" ;
    document.getElementById( "salida" ).innerHTML = $html ;

    $html = '<form action="" method="get" id="elCargue" onsubmit="return false;">' ;    
    $html +='<button type="button" onclick="oEvalDsmp.archivar(2)">Cargar</button><br>' ;
    $html += '<textarea name="jsonMsj" id="fname" rows="15" cols="100">Pegue el texto que le fue enviado en esta zona</textarea>  <br>';
    //$html += '<input type="text" name="jsonMsj1" id="fname1" rows="20" cols="100" value="Zona">  <br>';
    //$html +='<br><br><button type="submit">Otra carga</button>' ;
    $html += '</form>' ;

    document.getElementById( "salidaTexto" ).innerHTML = $html ;
    document.getElementById( "salidaHtml" ).innerHTML = "" ;
}

//oEvalDsmp.muestraCarga2 = function(){: lee arreglos de respuestas generados por usuarios en arma_evalua2.html y los va integando al arrreglo de respuestas global. Sobreescritura de respuestas repetidas
oEvalDsmp.muestraCarga2 = function(){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;

    var $html ;
    if ( document.getElementById( "tituloHtml" ).innerHTML == "" ){
        $html = "<h2>" + ex1.titulo + "</h2>" ;
        $html += "<p> ATENCIÓN: este es un archivo maestro, no un archivo de usuario. Para que funcione adecuadamente es importante que las preguntas que se carguen se hayan generado con base en el mismo archivo que generó bd_arrlistas.js para que efectivamente corresponda a las identidades correctas  </p>" ;
        document.getElementById( "tituloHtml" ).innerHTML = $html ;
    }
    
    $html = "<h3>Inserte la información del resultado de evaluación</h3>" ;
    document.getElementById( "salida" ).innerHTML = $html ;

    $html = '<form action="" method="get" id="elCargue" onsubmit="return false;">' ;    
    $html +='<button type="button" onclick="oEvalDsmp.leeJSONresp()">Cargar</button><br>' ;
    $html += '<textarea name="jsonMsj" id="fname" rows="15" cols="100">Pegue el texto que le fue enviado en esta zona</textarea>  <br>';
    //$html += '<input type="text" name="jsonMsj1" id="fname1" rows="20" cols="100" value="Zona">  <br>';
    //$html +='<br><br><button type="submit">Otra carga</button>' ;
    $html += '</form>' ;

    document.getElementById( "salidaTexto" ).innerHTML = $html ;
    document.getElementById( "salidaHtml" ).innerHTML = "" ;
    this.listaRespuestas() ;
}

/*
//oEvalDsmp.listaRespuestas = function(){: imprime el listado de respuestas
oEvalDsmp.listaRespuestas_back = function(){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;

    var mat1 = new biArreglo() ;
    var $val , $tot ;
    var $texto ;
    var $html = '<form action="js_canal.php" method="post" name="miPrueba1" onsubmit="return oEvalDsmp.archivaServerJSON()">' ;
    $html += '<h3><b>Botones Nuevos: </b>' ;
    var d = new Date();
    var t= d.getTime();
    $html += '<button type="button" onclick="oEvalDsmp.recuperaServerJSON()">RECUPERAR Resp Servidor</button>' ;
    $html += '<input type="submit" value="ARCHIVAR Resp Servidor texto(php)">' ;
    //$html += '<button type="button" onclick="redirectURL(\'creaBD_respuestasJS.php\')">JS Respuestas Servidor</button>' ;
    $html += '<button onclick="window.location.href=\'creaBD_respuestasJS.php\'">JS Resp Servidor(php)</button>' ;
    $html += '<button onclick="window.location.href=\'creaBD_otraRespJS.php\'">JS New Resp Servidor(php)</button>' ;
    $html += '<button type="button" onclick="oEvalDsmp.integraGlobalesJS()">INTEGRAR Nuevas Resp</button>' ;
    //$html += '<button type="button" onclick="redirectURL(\'borrar_otraResp.php\')">REINICIO Nuevas Respuestas</button>' ;
    $html += '<button type="button" onclick="window.location.href=\'borrar_otraResp.php\'">REINICIO Nuevas Resp(php)</button></h3>' ;
    $html += '<a href="arma_respuestas.html?tiempo=' + t + '">Recargar página sin caché</a><br>' ;
    $html += '<input type="hidden" id="php_nombre" name="php_nombre" value="">' ;
    $html += '<input type="hidden" id="php_respuestas" name="php_respuestas" value="">' ;
    $html += '<input type="hidden" id="php_estado" name="php_estado" value="">' ;

    $html += 'Botones Antiguos (procure no usar): ' ;
    $html += '<button type="button" onclick="oEvalDsmp.archivaJSONresp()">ARCHIVAR Respuestas Memoria</button>' ;
    $html += '<button type="button" onclick="oEvalDsmp.recuperaJSONresp()">RECUPERAR Respuestas Memoria</button>' ;
    
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
/**/

//oEvalDsmp.listaRespuestas = function(){: imprime varios listado de respuestas
oEvalDsmp.listaRespuestas = function(){
    //var oPregunta = oArrPregunta[2] ;
    //var oExamen = arrExamenes[0] ;

    var mat1 = new biArreglo() ;
    //var matTodos = new biArreglo() ;
    var $val , $tot ;
    var $texto ;    
    var $html = 'NUEVO LISTARESPUESTAS<form action="js_canal.php" method="post" name="miPrueba1" onsubmit="return oEvalDsmp.archivaServerJSON()">' ;
    $html += '<h3><b>Botones Nuevos: </b>' ;
    var d = new Date();
    var t= d.getTime();
    $html += '<button type="button" onclick="oEvalDsmp.recuperaServerJSON()">RECUPERAR Resp Servidor</button>' ;
    $html += '<input type="submit" value="ARCHIVAR Resp Servidor texto(php)">' ;
    //$html += '<button type="button" onclick="redirectURL(\'creaBD_respuestasJS.php\')">JS Respuestas Servidor</button>' ;
    $html += '<button onclick="window.location.href=\'creaBD_respuestasJS.php\'">JS Resp Servidor(php)</button>' ;
    $html += '<button onclick="window.location.href=\'creaBD_otraRespJS.php\'">JS New Resp Servidor(php)</button>' ;
    $html += '<button type="button" onclick="oEvalDsmp.integraGlobalesJS()">INTEGRAR Nuevas Resp</button>' ;
    //$html += '<button type="button" onclick="redirectURL(\'borrar_otraResp.php\')">REINICIO Nuevas Respuestas</button>' ;
    $html += '<button type="button" onclick="window.location.href=\'borrar_otraResp.php\'">REINICIO Nuevas Resp(php)</button></h3>' ;
    $html += '<a href="arma_respuestas.html?tiempo=' + t + '">Recargar página sin caché</a><br>' ;
    $html += '<input type="hidden" id="php_nombre" name="php_nombre" value="">' ;
    $html += '<input type="hidden" id="php_respuestas" name="php_respuestas" value="">' ;
    $html += '<input type="hidden" id="php_estado" name="php_estado" value="">' ;

    $html += 'Botones Antiguos (procure no usar): ' ;
    $html += '<button type="button" onclick="oEvalDsmp.archivaJSONresp()">ARCHIVAR Respuestas Memoria</button>' ;
    $html += '<button type="button" onclick="oEvalDsmp.recuperaJSONresp()">RECUPERAR Respuestas Memoria</button>' ;
    
    $html += '</form>' ;

    var $arrSalida = [] ;
    var $arrEstud = [] ;
    var $arrEstudNom = [] ;
    var $arrEstudNom2 = [] ;
    var $arrLosEvaluados = [];
    var $arrLosEvaluados2 = [] ;
    var $i , $j ;
    //var $arrTodosTextos = [] ;
    var $texTodos = "" ;

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

        $j = $arrLosEvaluados2.indexOf( $elem.posEval ) ;
        if (  $j == -1 ){
            $j = $arrLosEvaluados2.push( $elem.posEval ) ;
            $arrLosEvaluados.push( [ $elem.posEval ,this.muestraEvaluado( $elem.posEval ) ] ) ;
        }

        /*
        $texTodos = $elem.posExam + ":" + $elem.posEstud + ":" + $elem.posEval + ":" + $elem.posPreg + ":" ;
        $arrTodosTextos.push( $texTodos ) ;
        */
    }
    $arrSalida.sort() ;
    $arrEstud.sort() ;
    //$arrTodosTextos.sort() ;

    for ( $elem of $arrEstud ){
        $arrEstudNom.push( this.muestraEstudiante( $elem )) ;
        $arrEstudNom2.push( [ $elem , this.muestraEstudiante( $elem ) ] ) ;
    }



    mat1.poblar( $arrSalida.length , this.arrEspDistrItem.length , 0 ) ;
    //matTodos.poblar( $arrTodosTextos.length , this.arrEspDistrItem.length , 0 ) ;

    //$j = 0 ;
    //var $arrTodosDatos = [] ;
    var $arrElem = [] ;
    for ( $elem of this.arrRespuestas1 ){
        $texto = $elem.posExam + ":" + $elem.posEval + ":" + $elem.posPreg + ":" ;
        //$texTodos = $elem.posExam + ":" + $elem.posEstud + ":" + $elem.posEval + ":" + $elem.posPreg + ":" ;
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

        /*
        var $nodoTodo = {} ;
        $nodoTodo["Examen"] = $elem.posExam ;
        $nodoTodo["Estudiante"] = $elem.posEstud ;
        $nodoTodo["Evaluado"] = $elem.posEval ;
        $nodoTodo["Pregunta"] = $elem.posPreg ;
        $nodoTodo["Rpta"] = $elem.rsp ;
        $arrTodosDatos[$j] = $nodoTodo ;
        */
        //$i = $arrSalida.indexOf( $texto ) ;    
    }

    $html += '<br>Examinadores: '  + $arrEstudNom.length ;
    $html += '<br><table style="width:50%" border="1px" >' ;
    $html += '<tr><th>ID</th><th>Nombre Examinador</th></tr>' ;
    for ( $elem of $arrEstudNom2 ){
        $html += '<tr><td>' + $elem[0] + '</td><td>' + $elem[1] + '</td></tr>' ;
    }
    $html += '</table><br>' ;

    $html += '<br>Evaluados: '  + $arrLosEvaluados.length ;
    $html += '<br><table style="width:50%" border="1px" >' ;
    $html += '<tr><th>ID</th><th>Nombre Evaluado</th></tr>' ;
    for ( $elem of $arrLosEvaluados ){
        $html += '<tr><td>' + $elem[0] + '</td><td>' + $elem[1] + '</td></tr>' ;
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
    $tot = 0 ;
    for ( $i = 0 ; $i < $totCols.length ; $i++ ){
        $html += '<td>' + $totCols[$i] + '</td>' ;
        $tot += $totCols[$i] ;
    }
    $html += '<td>' + $tot + '</td></tr></table>' ;

    $html += '<br><br>Detalle de Respuestas:' ;
    $html += '<br><table style="width:80%" border="1px" >' ;
    $html += '<tr><th>Examen</th><th>Examinador</th><th>Evaluado</th><th>Pregunta</th><th>Respuesta</th>' ;
    for ( $i = 0 ; $i < this.arrEspDistrItem.length ; $i++ ){
        $html += '<th>R:' + $i + '</th>' ;
    }
    $html += '</tr>' ;

    for ( $elem of this.arrRespuestas1 ){
        $html += '<tr><td>' +  $elem.posExam + '</td>' ;
        $html += '<td>' +  $elem.posEstud + '</td>' ;
        $html += '<td>' +  $elem.posEval + '</td>' ;
        $html += '<td>' +  $elem.posPreg + '</td>' ;
        $html += '<td>' +  $elem.rsp + '</td>' ;
        for ( $i = 0 ; $i < this.arrEspDistrItem.length ; $i++ ){
            if ( $i == $elem.rsp ){
                $html += '<td>1</td>' ;
            }else{
                $html += '<td></td>' ;
            }            
        }
        $html += '</tr>' ;
    }
    $html += '</table>' ;

    console.log ( "oEvalDsmp.listaRespuestas mat1" , mat1 ) ;
    console.log ( "oEvalDsmp.listaRespuestas $arrSalida" , $arrSalida ) ;
    //$html = "<h3>Inserte la información del resultado de evaluación</h3>" ;
    document.getElementById( "salidaHtml" ).innerHTML = $html ;
}

//borrar se reemplaza por clickCambioPregunta
// oEvalDsmp.miFuncion2 = function( oExamen , oEstudiante , $direcc ){ //funcion para mostrar pregunta específica de un examen
/* oEvalDsmp.miFuncion2 = function( oExamen , oEstudiante , $direcc ){
    
    var $arrTemp = this.listaPreguntas( oExamen ) ;
    var oPregunta = $arrTemp[$direcc] ;// OJO 20200317: tal vez lo que se va a hacer es cambiar muestraPregunta examen para que estos parametros sean numéricos y no un objeto

    var $html = this.muestraPreguntaExamen( oExamen , oEstudiante, $direcc ) ;
    //document.write( $html ) ;
    document.getElementById( "salidaHtml" ).innerHTML = $html ;
    //document.
} */

 
/*
var $arr = [] ;
$arr.push( oEvalDsmp.insertaEvaluado("jaimito1") ) ;
$arr.push( oEvalDsmp.insertaEvaluado("jorgito2")) ;
$arr.push( oEvalDsmp.insertaEvaluado("pablito3")) ;
$arr.push( oEvalDsmp.insertaEvaluado("pedrito4")) ;
$arr.push( oEvalDsmp.insertaEvaluado("samy5")) ;
$arr.push( oEvalDsmp.insertaEvaluado("max6")) ;
$arr.push( oEvalDsmp.insertaEvaluado("peye7")) ;
$arr.push( oEvalDsmp.insertaEvaluado("popy8")) ;
$arr.push( oEvalDsmp.insertaEvaluado("jaimitoa11")) ;
$arr.push( oEvalDsmp.insertaEvaluado("jorgitoa12")) ;
$arr.push( oEvalDsmp.insertaEvaluado("pablitoa13")) ;
$arr.push( oEvalDsmp.insertaEvaluado("pedritoa14")) ;
$arr.push( oEvalDsmp.insertaEvaluado("samya15")) ;
$arr.push( oEvalDsmp.insertaEvaluado("maxa16")) ;
$arr.push( oEvalDsmp.insertaEvaluado("peyea17")) ;
$arr.push( oEvalDsmp.insertaEvaluado("popya18")) ;
iConsola( "$arr" , $arr ) ;  
/**/

/* //las líneas de abajo se comentan puesto que los estudiantes se llenaron en oExam js previo
var oEstud0 = oEvalDsmp.insertaEstudiante("Jose Luis") ;
var oEstud1 = oEvalDsmp.insertaEstudiante("Carlos Vanegas") ;
var oEstud2 = oEvalDsmp.insertaEstudiante("Mauricio Acosta") ;
var oEstud3 = oEvalDsmp.insertaEstudiante("Gener Muñoz") ;
var oEstud4 = oEvalDsmp.insertaEstudiante("Ivonne castañeda") ; 
/**/

/* 
iConsola( "oEvalDsmp" , oEvalDsmp.arrEstudiantes ) ;

oEvalDsmp.asignaExamToEvaluados( ex1 , oEstud2 , [ $arr[1] , $arr[2] , $arr[3] ] ) ;
//oEvalDsmp.asignaExamToEvaluados( ex1 , oEstud3 , [ $arr[0] , $arr[1] , $arr[2] , $arr[3] , $arr[4] , $arr[5] ] ) ;
oEvalDsmp.asignaExamToEvaluados( ex1 , oEstud4 , [ $arr[0] , $arr[1] , $arr[2] , $arr[3] ,$arr[4] , $arr[5] , $arr[8] , $arr[9] ] ) ;
oEvalDsmp.asignaExamToEvaluados( ex1 , oEstud3 , [ $arr[0] , $arr[1] , $arr[2] , $arr[3] ,$arr[4] , $arr[5] , $arr[8] , $arr[9] ] ) ;
oEvalDsmp.asignaExamToEvaluados( ex1 , oEstud0 , [ $arr[5] , $arr[6] , $arr[7] , $arr[8] , $arr[9] ] ) ;

console.log( "oEvalDsmp" , oEvalDsmp ) ;

var $t ;
$t = oEvalDsmp.cantidadExamenes( ex1 , oEstud1 ) ;
document.write( "<br>asignados al estudiante " + oEstud1.posic + ":" + $t ) ;
$t = oEvalDsmp.cantidadExamenes( ex1 , oEstud3 ) ;
document.write( "<br>asignados al estudiante " + oEstud3.posic + ":" + $t ) ;
$t = oEvalDsmp.cantidadExamenes( ex1 , oEstud0 ) ;
document.write( "<br>asignados al estudiante " + oEstud0.posic + ":" + $t ) ;
*/

/*
arrPregs = oEvalDsmp.listaPreguntas( ex1 ) 
iConsola( "arrPregs" , [ arrPregs ] ) ;
//oPregunta = arrPregs[2][2] ;
oPregunta = arrPregs[1] ;

var oEvaluado ; 
oEvaluado = $arr[5] ;
//oEvalDsmp.insertaRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ){
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 2 , 1 ) ;
oEvaluado = $arr[4] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
oEvaluado = $arr[3] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
oEvaluado = $arr[2] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
oEvaluado = $arr[1] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
iConsola( "oEvalDsmp.insertaRespuesta1" , [ oEvalDsmp.arrRespuestas1 ] ) ;

//oEvalDsmp.numRespuestas = function( oExamen , oEstudiante , oPregunta ){
$t = oEvalDsmp.numRespuestas( ex1 , oEstud4 , oPregunta ) ;
console.log( "$t" , $t ) ; 

//oEvalDsmp.maxRespuestas = function( oExamen , oEstudiante ){
$t = oEvalDsmp.maxRespuestas( ex1 , oEstud4) ;
console.log( "maximo respuestas oEstud3" , $t ) ; 


oEvaluado = $arr[1] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;

//oEvalDsmp.preValidaRespuesta1 = function( exam , estud , eval , preg , resp )
$t = oEvalDsmp.preValidaRespuesta1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 ) ;
console.log( "$t" , $t ) ;


//insertaRespValida1

oEvaluado = $arr[3] ;
//oEvalDsmp.eliminaRespuesta1 = function( oExamen , oEstudiante , oEvaluado , oPregunta ){
oEvalDsmp.eliminaRespuesta1( ex1 , oEstud4 , oEvaluado , oPregunta ) ;
iConsola( "despues de oEvalDsmp.eliminaRespuesta1" , [ oEvalDsmp.arrRespuestas1 ] ) ;

oEvaluado = $arr[1] ;
//oEvalDsmp.insertaRespValida1 = function( oExamen , oEstudiante , oEvaluado , oPregunta , respuesta , pesoEstudiante ){
$t = oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 1 , 1 ) ;
console.log( "oEvalDsmp.insertaRespValida1 $t respuestas" , $t ,oEvalDsmp.arrRespuestas1 ) ;

oEvaluado = $arr[5] ;
$t = oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 1 , 1 ) ;
/**/

//en esta sección voy a ensayar meter respuestas en otra pregunta

/* 
//oPregunta = arrPregs[1][2] ;
oPregunta = arrPregs[1] ;
oEvaluado = $arr[1] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
oEvaluado = $arr[2] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 0 , 1 ) ;
oEvaluado = $arr[3] ;
oEvalDsmp.insertaRespValida1( ex1 , oEstud4 , oEvaluado , oPregunta , 1 , 1 ) ;
*/

$glError = "" ;  //variable global

var sPregunta ;
var oPregunta ;
var cant ;

var instrucc = "Apreciado colaborador:<br><br>Bienvenido a la prueba piloto de percepción de competencias para personal administrativo de la Ibero. Esta es una prueba 360 grados, por lo que encontrará la posibilidad de evaluar tanto a sus compañeros de equipo, como a usted mismo. Algunas recomendaciones para diligenciar las preguntas:<br><br>Para clasificar a las personas compare el comportamiento que normalmente presentan sus compañeros y usted frente a la generalidad de personas que trabajan en la institución. En cada pregunta, deberá ubicar a cada miembros del grupo en el rango que mejor se adapte. Esta comparación se debe hacer respecto al ámbito que describe el comportamiento en cada pregunta. La mayoría de las veces el comportamiento es similar al promedio (Rango 3); sin embargo algunos compañeros se pueden asignar en otros rangos que corresponden a percentiles superiores o inferiores. Al final guarde los resultados y tome un pantallazo como registro.<br><br>Para iniciar por favor utilice la información que le envió RRHH a su email. Después presione \"Ingresar\"" ;

glInstrucc1 = "Instrucciones: Para clasificar a las personas compare el comportamiento que normalmente presentan sus compañeros y usted frente a la generalidad de personas que trabajan en la institución. En cada pregunta, deberá ubicar a cada miembros del grupo en el rango que mejor se adapte. Esta comparación se debe hacer respecto al ámbito que describe el comportamiento en cada pregunta. La mayoría de las veces el comportamiento es similar al promedio (Rango 3); sin embargo algunos compañeros se pueden asignar en otros rangos que corresponden a percentiles superiores o inferiores. Al final guarde los resultados y tome un pantallazo como registro." ;


var qna = "<b>PREGUNTAS FRECUENTES (FAQ)</b><br><br>" ;
qna += "<b>¿Por qué aparece mi propio nombre para ser clasificado?</b><br>" ;
qna += "El motivo es que esta prueba de evaluación procura lograr una visión 360 y por lo tanto también debes realizar una autoevaluación de tu propia ubicación en los rangos de la evaluación<br>" ;

qna += "<b>¿Cómo corrijo una asignación que quedó mal ubicada?</b><br>" ;
qna += "En este caso debes marcar el colaborador que está en el rango equivocado y posteriormente dar click para insertar en el rango correcto.<br>" ;

qna += "<b>¿Por qué aparecen personas que no son de mi equipo o no conozco para ser evaluados?</b><br>" ;
qna += "El motivo es que los compañeros a evaluar son seleccionados aleatoriamente para lograr una prueba estadísticamente consitente. Aunque se priorizan compañeros de trabajo que son del mismo equipo es posible que aparezcan algunos más lejanos, en caso de que no conozcas su desempeño ubícalos en el rango 6.  Si en el listado son más los compañeros que no conoces que los que conoces comunicate con RRHH para que se pueda revisar<br>" ;

qna += "<b>¿Por qué no aparecen para evaluar todas las personas de mi equipo?</b><br>" ;
qna += "El motivo es que los compañeros a evaluar son seleccionados aleatoriamente para lograr una prueba estadísticamente consitente y hay un máximo de evaluaciones por cada colaborador. Es posible que entonces no te aparezcan todos tus compañeros. No es problema no te preocupes.<br>" ;

qna += "<b>¿Por qué me impide incluir más compañeros en algunos rangos?</b><br>" ;
qna += "El motivo es que hay un número máximo para ubicar en cada rango; este número es más restringido en rangos superiores e inferiores. Si quieres ubicar varios compañeros en el rango más alto, analiza bien, se muy selectivo y sólo ubica allí a los más destacados del grupo que tienes en mente." ;
qna += "<br><b>¿Pero es que todos los del grupo deberían poderse ubicar en ese rango?</b><br>" ;
qna += "Si definitivamente no logras identificar algún compañero que sobresalga en esta categoría, entonces la sugerencia es que los ubiques a todos a un rango más cercano al promedio, donde el número máximo es menos restringido." ;
qna += " El motivo es que esta prueba incorpora un filtro para lograr un emparejamiento estadísticamente consistente de los resultados." ;

if ( document.getElementById( "QnA" ) != null ){
    //document.getElementById( "QnA" ).innerHTML = qna ;
}




ex1 = oEvalDsmp.creaPreExamen( "Administrativos" , "Desempeño" , "Evaluación de Desempeño" , instrucc ) ; //ex1 es variable global

/* 
oEvalDsmp.arrEspDistrItem = [
    "1. Se ubica en el 10% superior (decil 9 a 10) de similitud con el ideal descrito, es decir se alinea excepcionalmente bien",
    "2. Se ubica en el siguiente 20% (decil 7 a 9) de similitud con el ideal descrito, es decir más que el común",
    "3. Se ubica en el siguiente 40% (decil 3 a 7) de similitud con el ideal descrito, es decir está en el promedio",
    "4. Se ubica en el siguiente 20% (1 a 3) de similitud con el ideal descrito, es decir está por debajo del promedio",
    "5. Se ubica en el siguiente 10% (0 a 1) de similitud con el ideal descrito, es decir está bastante por debajo del promedio",
    "6. No conozco su desempeño en este aspecto"
] ;
 */

oEvalDsmp.arrEspDistrItem = [
    "Rango 1: Se alinea excepcionalmente bien, es decir se ubica en el 10% superior (percentil 90 a 100) de similitud con el ideal descrito.",
    "Rango 2: Se alinea más que el promedio, es decir se ubica en el siguiente 20% (percentil 70 a 90) de similitud con el ideal descrito.",
    "Rango 3: Se ubica en el promedio del equipo, es decir se ubica en el siguiente 40% (percentil 30 a 70) de similitud con el ideal descrito.",
    "Rango 4: Se alinea por debajo del promedio, es decir en el siguiente 20% (percentil 10 a 30) de similitud con el ideal descrito.",
    "Rango 5: Se alinea bastante por debajo del promedio, es decir en el último 10% (percentil 0 a 10) de similitud con el ideal descrito.",
    "Rango 6: No conozco su desempeño en este aspecto."
] ;

oEvalDsmp.arrEspDistMax = [ 0.1 , 0.2 , 0.4 , 0.2 , 0.1 , 1 ] ;
var arrPuntos = [ 10 , 6 , 4 , 1, 0 , "na" ] ;
var correcta = null ;
var arrDistr = oEvalDsmp.arrEspDistrItem ;



/* var ex1 = oEvalDsmp.creaPreExamen( "Administrativos" , "Desempeño" , "Evaluación de Desempeño" , "" ) ;
*/
sPregunta = "(Orientación al Logro) El funcionario cumple con las tareas y actividades asignadas en los tiempos requeridos, compromete recursos adicionales cuando se requieren, priorizando el cumplimiento." ;
oPregunta = oEvalDsmp.creaPregunta( "Logro" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
//iConsola( "oPregunta salida y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;
cant = oEvalDsmp.insertaPregunta( ex1 , oPregunta , 10 , null ) ;

sPregunta = "(Trabajo en Equipo) El funcionario se interrelaciona efectivamente con los miembros del equipo de trabajo para construir juntos." ;
oPregunta = oEvalDsmp.creaPregunta( "Equipo" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
cant = oEvalDsmp.insertaPregunta( ex1 , oPregunta , 10 , null ) ; 
/**/

sPregunta = "(Proactividad) El funcionario identifica desafíos donde sus habilidades son relevantes, incluso por fuera del alcance de su manual de funciones y se anticipa para buscar resultados valiosos." ;
oPregunta = oEvalDsmp.creaPregunta( "Proactividad" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
cant = oEvalDsmp.insertaPregunta( ex1 , oPregunta , 10 , null ) ;

sPregunta = "(Vocación de Servicio) El funcionario siempre va más allá en su atención al cliente interno y externo." ;
oPregunta = oEvalDsmp.creaPregunta( "Servicio" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
cant = oEvalDsmp.insertaPregunta( ex1 , oPregunta , 10 , null ) ;

sPregunta = "(Comunicación Asertiva) El funcionario presenta siempre información altamente confiable, generando credibilidad en sus intervenciones; utiliza canales de comunicación efectivos y fuentes fidedignas; además escucha activamente y procura comprender las opiniones de otros miembros del equipo." ;
oPregunta = oEvalDsmp.creaPregunta( "Comunicación" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
cant = oEvalDsmp.insertaPregunta( ex1 , oPregunta , 10 , null ) ;


/* 
est1 = oEstud0 ;
oEvalDsmp.asignaExamToEvaluados( ex1 , est1 , [ $arr[0] , $arr[1] , $arr[2] , $arr[3] ,$arr[4] , $arr[5] , $arr[8] , $arr[9] , $arr[12] , $arr[13] , $arr[15] ] ) ; 
/**/

/*  
var $html ; 
$html = oEvalDsmp.muestraPreguntaExamen( ex1 , est1 , 1 ) ;
document.getElementById( "salidaHtml" ).innerHTML = $html ;
$html = oEvalDsmp.muestraTituloExamen ( ex1 , est1 , 1 ) ;
document.getElementById( "tituloHtml" ).innerHTML = $html ;  
*/

//oEvalDsmp.muestraCarga() ;  //esta línea se pasó al html