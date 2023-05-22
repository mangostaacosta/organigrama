/********************************************
 evalua.js 
 20200128
 implementa estructura para poder generar, almacenar y procesar resultados de evaluaciones 
 *******************************************/

/* function oPregunta( idpersona , idcompetencia ){
    this.idpersona = idpersona ;
    this.iditem = idcompetencia ;
    this.arrRespuestas = [] ; //arreglo de posibles arrRespuestas
    this.correcta = 0 ; //posición de la respuesta correcta (se podría también incluir un arreglo de valor de cada respuesta)

}

function oRespuesta( pregunta , respuesta , peso , fecha ){
    this.pregunta = preguna ; //tipo Pregunta
    this.respuesta = respuesta ; //cual fue la respuesta que se dio
    this.peso = peso ; //numérico por cuanto vale el resultado
    this.fecha = fecha ; //fecha en que se dió la respuesta
}

function oExamen( nombre ){
    this.nombre = nombre ; //nombre del examen
    this.pregunta = [] ; //arreglo de preguntas
    this.pesos = [] ; //ponderación de cada pregunta
} */


//Lo de acá para abajo no está escrito cristianamente es una combinación de notación función con notación objeto 


function oEstudiante( nombre ){
    this.nombre = nombre ;

    this.pos = function() {
        return 1 ;
    }
}

/* //function creaExamen( texto , categ , texto , texto )    
function creaExamen( asignatura , tipo2 , titulo , instrucciones ){
//this.creaExamen = function( asignatura , tipo2 , titulo , instrucciones ){
    var p ;
    p.asignatura = asignatura ;
    p.tipo2 = tipo2 ;
    p.titulo = titulo ; 
    p.instrucciones = instrucciones ; 
    p.arrPreguntas = [] ; //arr de oPregunta (o casi porque incluye unos parámetros adicionales)
    this.exam = p ;
    this.posic = this.arrBDexam.insertaExamen( p ) ;
    
    //this.arrExamenesTodos.length ;    
    //this.arrExamenesTodos[this.arrExamenesTodos.length] = p ;

    this.pos = function(){
        return this.posic ;
    }
} */

//function oMundoExamen(): colección de objetos de tipo examen
function oMundoExamen(){
    this.arrExamenesTodos = [] ;
    this.cantidad = 0 ;

    this.insertaExamen = function( nodo ){
        this.arrExamenesTodos[this.cantidad] = nodo ;
        this.cantidad++ ;
        return (this.cantidad - 1) ;
    }
}


//function oEvaluador(): implementa toda la estructura de datos requerida para manejar las preguntas, evualaciones, preevaluaciones, notas, estudiantes, evaluadores
function oEvaluador(){

    this.posic = 0 ;
    this.arrExamenes = [] ;
    this.arrPreguntasTodas = [] ;
    this.arrEstudiantes = [] ;
    this.arrRespuestas = [] ;
    this.arrEvaluaciones = [] ;
    //this.arrEvaluados = [] ; este arreglo se movio a evalua_dsmpn.js
    
    /*
    this.insertaEstudiante = function( nombre ){
    this.creaPreExamen = function( asignatura , tipo2 , titulo , instrucciones ){
    this.clonarPreExamen = function( oPreEx ){
    this.creaPregunta = function ( tema , nivel , tipo1 , sPregunta , arrDistractor , arrPuntos , correcta ){
    this.insertaPregunta = function( oExamen , oPregunta , peso, orden ){
    this.listaPreguntas = function( oPExamen ){
    this.insertaRespuesta = function( oExamen , oEstudiante , oPregunta , respuesta , pesoEstudiante ){
    this.traeRespuesta = function( oExamen , oEstudiante , oPregunta ){
    this.asignaExamenEvaluados = function( oPreExamen , $arrEvaluados ){ ??? esta función verificar ya no va acá
    this.muestraPreguntaExamen = function( oArrPregunta , arrExamenes , yoEstudiante ){
    this.promediaPregunta = function( oExamen ){
    */




    this.insertaEstudiante = function( nombre , correo = "nada@ibero.edu.co" ){
        //var nodo = [] ;
        //var nodo = new Object() ;
        var nodo = {} ;
        nodo.nombre = nombre ;
        nodo.correo = correo ;
        nodo.posic = this.arrEstudiantes.length ;
        iConsola( "this.insertaEstudiante nodo" , [nodo.posic] ) ;
        this.arrEstudiantes[nodo.posic] = nodo ;
        return nodo ;
    }

    this.muestraEstudiante = function( posic ){
        return this.arrEstudiantes[posic].nombre ;
    }

    //20200314: esta función se moverá de acá hacia evalua_dsmpn.js
/*     this.insertaEvaluado1 = function( nombre ){
        //var nodo = [] ;
        var nodo = new Object() ;
        nodo.nombre = nombre ;
        nodo.posic = this.arrEvaluados.length ;
        iConsola( "this.insertaEvaluado nodo" , [nodo.posic] ) ;
        this.arrEvaluados[nodo.posic] = nodo ;
        return nodo ;
    } */



    //function creaExamen( texto , categ , texto , texto )    
    //function creaExamen( asignatura , tipo2 , titulo , instrucciones ){
    this.creaPreExamen = function( asignatura , tipo2 , titulo , instrucciones ){
    //this.creaExamen = function( asignatura , tipo2 , titulo , instrucciones , arrExamenesTodos ){
        
        //this.asignatura = asignatura ;
        //this.tipo2 = tipo2 ;
        //this.titulo = titulo ; 
        //this.instrucciones = instrucciones ; 
        //this.arrPreguntas = [] ; //arr de oPregunta (o casi porque incluye unos parámetros adicionales)
        
        var p = [] ;
        p.evaluado = null ; // Un examen sin evaluado es un pre examen
        p.asignatura = asignatura ;
        p.tipo2 = tipo2 ;
        p.titulo = titulo ;
        p.instrucciones = instrucciones ; 
        p.arrPreguntas = [] ; //arr de oPregunta (o casi porque incluye unos parámetros adicionales)
        //this.exam = p ;
        //this.posic = this.insertaExamen( p ) ;
        //this.posic = arrExamenesTodos.length ;
        p.posic = this.arrExamenes.length ;
        iConsola( "creaExamen this.posic" , [p.posic] ) ;
        this.arrExamenes[p.posic] = p ;

        return p ;    
    }


    //20200314: según la nueva eespecificación esta función tendería a desaparecer
    this.clonarPreExamen = function( oPreEx ){
        var $oExamenpre = this.creaPreExamen( oPreEx.asignatura , oPreEx.tipo2 , oPreEx.titulo , oPreEx.instrucciones  ) ;

        var $arrPregs = this.listaPreguntas( oPreEx ) ;

        for ( $i = 0 ; $i < $arrPregs.length ; $i++ ){
            $oExamenpre.arrPreguntas[$i] = arrPregs[$i] ;
        }
        return $oExamenpre ;
    }

    //function creaPregunta( texto, categ, categ, texto, arr texto , arr int , int )
    //function creaPregunta( tema , nivel , tipo1 , sPregunta , arrDistractor , arrPuntos , correcta ){
    this.creaPregunta = function ( tema , nivel , tipo1 , sPregunta , arrDistractor , arrPuntos , correcta ){
        var preg = {} ;
        preg.tema = tema ; 
        preg.nivel = nivel ;
        preg.tipo1 = tipo1 ; 
        preg.sPregunta = sPregunta ;
        preg.arrDistractor = arrDistractor ;
        preg.arrPuntos = arrPuntos ;
        preg.correcta = correcta ;
    
        preg.posic = this.arrPreguntasTodas.length ;
        //this.arrPreguntasTodas.push(1) ; //por ahora esté arreglo solo crece y no hace mas
        this.arrPreguntasTodas[preg.posic] = preg ;

        return preg ;
    }

    //function insertaPregunta( oPregunta , int , int )
    //la funcionalidad del parámetro orden aún no está implementada
    this.insertaPregunta = function( oExamen , oPregunta , peso, orden ){
        var arrTemp = [ orden , peso , oPregunta ] ;
        console.log( "this.insertaPregunta: arrTemp:" + arrTemp ) ;
        iConsola("insertaPregunta oPregunta.posic" , [oPregunta.posic] ) ;
        iConsola("insertaPregunta oExamen.posic" , [oExamen.posic] ) ;

        //preg.posic = this.arrPreguntasTodas.length ;
        //this.arrPreguntasTodas.push(1) ; //por ahora esté arreglo solo crece y no hace mas
        //this.arrPreguntasTodas[preg.posic] = preg ;
        //this.arrPreguntas.push( arrTemp ) ;
        //oExamen.arrPreguntas.push( arrTemp )

        this.arrExamenes[oExamen.posic].arrPreguntas.push( arrTemp ) ;
        return this.arrExamenes[oExamen.posic].arrPreguntas.length ;    
    }

    this.listaPreguntas = function( oPExamen ){
        var temp = this.arrExamenes[oPExamen.posic].arrPreguntas ;
        var long = temp.length ;
        var arrSalida = [] ;
        for (var $i = 0 ; $i < long ; $i++ ){
            arrSalida[$i] = temp[$i] ;
        }
        return arrSalida ;
    }


    //this.insertaRespuesta = function( oExamen , oEstudiante , oPregunta , int , int )
    //esta implmentación sirve sólo en casos con pregutnas tipo select
    //OJO si se inserta una repuesta del mismo, examen, estudiante, pregunta; actualmente la función no sobreescribe sino que la deja exsiter varias veces, este comportamiento afectaría las estadísticas de las sumatorias y demás cosas, habría que definir si un mejor comportamiento se hace desde esta función o desde las consolidadoras
    this.insertaRespuesta = function( oExamen , oEstudiante , oPregunta , respuesta , pesoEstudiante ){
        var dato = [] ;        
        //dato.pPreg = oPregunta.posic ;
        dato.pPreg = oPregunta[2].posic ;
        dato.pExam = oExamen.posic ;  //hay que validar que este más bien no sea un objeto oEvaluacion es decir que sea un examen junto con un Evaluado o la otra alternativa es que antes de tener un Evaluado asociado directamente, un Examen se debería llamara PreExamen o PlantillaExamen
        dato.pEstud = oEstudiante.posic ;
        
        dato.rsp = respuesta ;
        dato.peso = pesoEstudiante ;

        iConsola("this.insertaRespuesta antes de for: dato" , [ dato ] ) ;

        for ( var $k = 0 ; $k < this.arrRespuestas.length ; $k++ ){
            $datoT = this.arrRespuestas[$k] ;
            iConsola("this.insertaRespuesta dentro for: datoT" , [ $datoT ] ) ;
            if (( dato.pExam == $datoT.pExam ) && ( dato.pPreg == $datoT.pPreg ) && ( dato.pEstud == $datoT.pEstud ) ){
                //aca ya estamos dnd queremos estar es donde se hacen las acciones
                //en este caso la acción es averiguar cuál es el distractor que respondió el estudiante
                iConsola("this.insertaRespuesta dentro de pregunta ya respondida: dato" , [ dato ] ) ;
                this.arrRespuestas[$k] = dato ;
                return dato ;
            }
        }
        //si llega acá es porque no había respuesta anterior
        this.arrRespuestas.push( dato ) ;        
        return dato ; 

/*      //var arr1 = [] ;
        this.arr1[oEstudiante.posic] = dato ;
        //var arr2 = [] ;
        this.arr2[oPregunta.posic] = this.arr1 ;
        this.arrRespuestas[oExamen.posic] = this.arr2 ;
        //this.arrRespuestas[oPregunta.posic][oExamen.posic][oEstudiante.posic] = dato ;
        iConsola( "this.insertaRespuesta arrRespuestas" , [ oExamen.posic , oPregunta.posic , oEstudiante.posic ,  oPregunta.tema ] ) ; */
    }
    //this.traeRespuesta( oExamen , oEstudiante , oPregunta ) esta función podría no incluir al estudiante en el caso en que se asuma que cada cliente es realmente el mismo estudiante y solo el servidor necesitaría saber el conjunto de los estudiantes
    this.traeRespuesta = function( oExamen , oEstudiante , oPregunta ){
        var posExam = oExamen.posic ; //ya tengo la posición del examen
        var posPreg = oPregunta.posic ; // ya tengo la posición de la pregunta
        var posEstud = oEstudiante.posic ; //20200211: OJO que hay que ajustar esta función para que también reciba adecuadamente al estudiante y valide condiciones de respuesta valida
        var $distractor = null ;
        for ( var $k = 0 ; $k < this.arrRespuestas.length ; $k++ ){
            $dato = this.arrRespuestas[$k] ;
            if ( (posExam == $dato.pExam) && ( posPreg == $dato.pPreg ) && ( posEstud == $dato.pEstud ) ){
                //aca ya estamos dnd queremos estar es donde se hacen las acciones
                //en este caso la acción es averiguar cuál es el distractor que respondió el estudiante
                $distractor = $dato.rsp ;
                return $distractor ;
            }
        }
        return $distractor ; 
    }


    //20200314: segun la nueva especificación esta función desparaece se traslada a evalua:dsmpn.js
    //this.asignaExamenEvaluados(oExamen ,$arrEvaluados ); asigna un examen a un conjunto de indices de profesores que serán los evaluados
 
    this.asignaExamenEvaluados = function( oPreExamen , $arrEvaluados ){
        var $i = 0 ;
        var $arrResEx = [] ;
        for ( $i = 0 ; $i < $arrEvaluados.length ; $i++ ){
            var oExam = this.clonarPreExamen( oPreExamen ) ;
            oExam.evaluado = $arrEvaluados[$i] ;
            $arrResEx[$i] = oExam ;
        }
        return $arrResEx ;
    }


    //this.msuestraPreguntaExamen( oPregunta , oExamen) 20200211:OJO falta manejar el parametro yoEstudiante
    //POST: muestra la pregunta de todos los evaluados en HTML
    //this.muestraPreguntaExamen = function( oArrPregunta , oExamen ){
    //PRE: arrExamenes.length > 0 && arrExamenes vienen todo del mismo preExamen && oArrPegunta es parte del preExamen 
    this.muestraPreguntaExamen_back = function( oArrPregunta , arrExamenes , yoEstudiante ){
        var oPregunta = oArrPregunta[2] ;
        var oExamen = arrExamenes[0] ;
        var $arrGuardaRespuestas = [] ;
        var $arrSinAsignar = [] ;

        var $t = oPregunta.sPregunta ;
        var $resp ;
        var $html = "<h1>" + oExamen.titulo + "</h1>" + "<p>" + oExamen.instrucciones +"</p>" ;
        $html += "<br><p>" + $t + "</p>" ;
        
        for ( var $i = 0 ; $i < arrExamenes.length ; $i++ ){
        //aca la idea es llenar un par de arreglos, uno indezado por distractores, con el índice de los exámenes que están con ese distractor, y otro arrreglo de los examenes que no tiene respuesta
            oExamen = arrExamenes[$i] ;
            $resp = this.traeRespuesta( oExamen , yoEstudiante , oPregunta ) ;
            iConsola("this.muestraPreguntaExamen: $resp", [ $resp ] ) ;
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
        iConsola("this.muestraPreguntaExamen: $arrGuardaRespuestas : resp", [ $arrGuardaRespuestas, $resp ] ) ;


        for ( var $i = 0 ; $i < oPregunta.arrDistractor.length ; $i++ ){
            $t = oPregunta.arrDistractor[$i] ;
            $html += "<br>" + $t + " >>" ;
            if ( typeof $arrGuardaRespuestas[$i] !== 'undefined' ){
            //20200212: acabo de hacer este ajuste para que no saque error de undefined, ahora toca hacer TEST de si efectivamente muestra lo correcto cuando si hay respuestas ya contestadas a la pregunta
                for ( var $j = 0 ; $j < $arrGuardaRespuestas[$i].length ; $j++ ){
                    $posExam = $arrGuardaRespuestas[$i][$j] ;
                    $t = arrExamenes[$posExam].evaluado.nombre ;
                    $html += "<br>++" + $t ;
                }
            }
            
        }

        $html += "<br> A continuación los elementos a asignar:<br>" ;

        //for ( var $i = 0 ; $i < this.arrEvaluaciones[oExamen.Posic].length ; $i++ ){
        for ( var $i = 0 ; $i < $arrSinAsignar.length ; $i++ ){
            //$t = this.arrEvaluaciones[oExamen.Posic][$i] ;
            $posExam = $arrSinAsignar[$i] ;
            $t = arrExamenes[$posExam].evaluado.nombre ;
            $html +=  "<br>" + $t ;
        }

        document.write( $html ) ;
    }

    /* 20200208: ESTE PEDAZO SE BORRA PORQUE ASUMIA QUE HABIA EXAMEN POR PROFESOR, EN LA NUEVA ESTRUCTURA
    LO QUE SE VA A TRABAJAR ES QUE UN EXAMEN PUEDE TENER VARIOS PROFESORES (LOS EVALUADOS)  
    //this.muestraPreguntaExamenes: oPregunta , $arrExamenes: arreglo de Examenes
    //POST: crea la pregunta en todos los exámens y la muestra en HTML
    this.creaPreguntaExamenes = function( oPregunta , $arrExamenes ){
        var oExamen ;
        for ( var $i ; $i < $arrExamanes.length ; $i++ ){
            oExamen = $arrExamanes[$i] ;        
            this.insertaPregunta( oExamen , oPregunta , 10 , null  ) ;
            oExamen.titulo ;
        }

        

        
        
    } */

    //this.promediaPregunta( oExamen ): analiza todas las respuestas dadas por varios a estudiantes a una examen, sacando un resumen estadístico que da el desempeño del examen, si por ejemplo el examen corresponde a una persona entonces tiene las notas que la personas recibio, no las que dio
    //Puede ser muy pertinente cambiarle el nombre a esta función 
    //esta funcion utiliza biArreglo que está en multiarr.js
    this.promediaPregunta = function( oExamen ){
        var posExam = oExamen.posic ; //ya tengo la posción del examen
        var preg = null ;
        var posPreg = 0 ;
        var posEstud = 0 ;
        //var arrRespts = [] ;
        //var arrtemp1 = []
        var arrRespts = new biArreglo() ;

        iConsola("promediaPregunta oExamen.arrPreguntas.length" , [oExamen.arrPreguntas.length] ) ;
        for ( var $i = 0 ; $i < oExamen.arrPreguntas.length ; $i++ ){
            var arr = oExamen.arrPreguntas[$i] ;
            preg = arr[2] ;
            posPreg = preg.posic ;  //ya tengo la posición de la pregunta
            //lo que se debe hacer es buscar la pregunta y crear un arreglo con todas las posibles respuestas
            var oPreg = this.arrPreguntasTodas[posPreg] ;
            var $k = 0 ;
            for ( $k = 0 ; $k < oPreg.arrDistractor.length ; $k++ ){
                var temp = [] ;
                temp["txt"] = oPreg.arrDistractor[$k] ;
                temp["cant"] = 0 ;
                temp["cantpeso"] = 0 ;
                temp["sumpond"] = 0 ;
                arrRespts.inserta( $i , $k , temp ) ;

                /* var arrtemp1 = [] ;
                arrtemp1[$k] = temp ;
                var cosa = [] ;
                cosa.arr = arrtemp1 ; 
                iConsola("this.promediaPregunta arrtemp1", [ arrtemp1 ] ) ;
                arrRespts[$i] =  cosa ; */
                //PUTA NO SE LOGRA CREAR EL BIDIMENSIONAL BIEN QUE DESGRACIA
                //arrRespts[$i][$k]["spond"] = 0 ;
                /* oSalida.preg[$i]["spondpeso"] = 0 ;
                oSalida.preg[$i]["spond"] = 0 ; */
                //iConsola("this.promediaPregunta for de oSalida  $i", [ $i ]) ;
                //iConsola("this.promediaPregunta for de oSalida  $k", [ $k ]) ;
                //iConsola("this.promediaPregunta for de oSalida_$i $k", [ $i , $k ]) ;
                //iConsola("this.promediaPregunta arrRespts $i $k", [ $i , $k , arrRespts.arr1 ] ) ;        
            }
            iConsola("this.promediaPregunta arrRespts", [ arrRespts.arr1 ]) ;

            var $dato ;
            var $temp ;
            var $distractor ;
            for ( $k = 0 ; $k < this.arrRespuestas.length ; $k++ ){
                $dato = this.arrRespuestas[$k] ;
                for ( var $j = 0 ; $j < this.arrEstudiantes.length ; $j++ ){
                    posEstud = this.arrEstudiantes[$j].posic ;
                    iConsola("promediaPregunta [posExam][posPreg][posEstud]" , [posExam,posPreg,posEstud] ) ;
                    if ( (posExam == $dato.pExam) && ( posPreg == $dato.pPreg ) && ( posEstud == $dato.pEstud ) ){
                        //aca ya estamos dnd queremos estar es donde se hacen las acciones
                        iConsola( "this.promediaPregunta $dato" , [ $dato ] ) ;
                        $distractor = $dato.rsp ;
                        $temp = arrRespts.valor( $i , $distractor ) ;
                        $temp["cant"]++ ;
                        $temp["cantpeso"] += $dato.peso ;
                        arrRespts.inserta( $i , $distractor , $temp ) ;
                        $temp = null ;
                        $temp = arrRespts.valor( $i , $distractor ) ;
                        iConsola("this.promediaPregunta $i $distractor", [ $i , $distractor , $temp ] ) ;
                    }
                }
            }
        }

        var $sumaPonderado ;
        var $suma ;
        var $media ;
        var $moda ;
        var $max ;
        var $cp ;
        var $arrResPregs = [] ;
        var $sumaExam = 0 ;
        var $sumaPeso = 0 ;
        var $contrpts = 0 ;
        var $conteo ;
        for (var $i = 0 ; $i < oExamen.arrPreguntas.length ; $i++ ){
        //for (var $i = 0 ; $i < arrRespts.long() ; $i++ ){
            $suma = 0 ;
            $sumaPonderado = 0 ;
            $arr = oExamen.arrPreguntas[$i] ;
            $preg = $arr[2] ;
            posPreg = $preg.posic ;  //ya tengo la posición de la pregunta
            //lo que se debe hacer es buscar la pregunta y crear un arreglo con todas las posibles respuestas
            oPreg = this.arrPreguntasTodas[posPreg] ;
            $max = 0 ;
            $moda = undefined ;
            $conteo = 0 ;
            for ( $j = 0 ; $j < oPreg.arrDistractor.length ; $j++ ){
            //for (var $j = 0 ; $j < arrRespts.longFila( $i ) ; $j++ ){
                if ( arrRespts.valor( $i , $j ) !== undefined ){                    
                    $cp = arrRespts.valor( $i , $j ).cantpeso ;
                    if ( typeof( oPreg.arrPuntos[$j] ) == "number" ){ //las preguntas que no tiene peso no cuentan para el promedio
                        $sumaPonderado += oPreg.arrPuntos[$j] * $cp ;
                        $suma += $cp ;
                        if ( $cp > $max ){
                            $moda = oPreg.arrPuntos[$j] ;
                            $max = $cp ;
                        }else if ( $cp == $max ){
                            $moda = undefined ;
                        }
                    }
                    var $c = arrRespts.valor( $i , $j ).cant ;
                    $contrpts += $c ;
                    $conteo += $c ;
                    iConsola("$j moda $cp $c los_puntos" , [ $j , $moda , $cp , $c , oPreg.arrPuntos[$j] ] ) ;
                } 
            }
            if ( $suma != 0 ){
                $media = $sumaPonderado / $suma ;    
            }else{
                $media = undefined ;
            }
             
            var $a = [] ;
            $a["media"] = $media ;
            $a["moda"] = $moda ;
            $a["n"] = $conteo ;
            $arrResPregs[$i] = $a ;

            $sumaExam = $media * $arr[1] ;
            $sumaPeso = $arr[1] ;
        }
        if ( $sumaPeso != 0 ){
            $media = $sumaExam / $sumaPeso ;    
        }else{
            $media = undefined ;
        }
        var oSalida = {
            rpts: $contrpts ,
            nota: $media ,
            arrResPregs: $arrResPregs ,
            estats: arrRespts 
        } ;
        return oSalida ;
    }
}

function activaExamen( oExamen , fechaIni , fechaFin ){

}



function promediaExamen(  oExamen ){

}

//esta función le asigna una nota al examen de un estudiante
function calificaEstudianteExamen( oEstudiante, oExamen ){

}

function archivaResultados ( arr_oExamen , fechaIni , fechaFin ){

}

function iConsola( sitio , arrVariable ){
    var texto = sitio + " >> " ;
    console.log( texto ) ;
    texto = texto.substr(0,15) +  " > " ;
    for (var i = 0 ; i < arrVariable.length ; i++ ){
        //texto += " :" + arrVariable[i] ;
        //console.log( texto , arrVariable[i] ) ;
        console.log( texto , arrVariable[i] ) ;
    }
    //console.log( texto ) ;
}

/* //20200410:OJO fue comentado para dar total autonomía a evlua_dsmpn.js NO obstante para que todo funcione OK si se requiere crear un archivo inicial de evalua.js que rellene los arreglos masivos generales como el de estudiantes y evaluados por ejemplo
var arrDistr = [ "1. Se ubica en el 10% superior (decil 9 a 10) de similitud con el ideal descrito, es decir se alinea excepcionalmente bien" , "2. Se ubica en el siguiente 30% (decil 6 a 9) de similitud con el ideal descrito, es decir más que el común" , "3. Se ubica en el siguiente 20% (decil 4 a 6) de similitud con el ideal descrito, es decir está en el promedio" , "4. Se ubica en el siguiente 20% (2 a 4) de similitud con el ideal descrito, es decir está por debajo del promedio" , "5. Se ubica en el siguiente 20% (0 a 2) de similitud con el ideal descrito, es decir está bastante por debajo del promedio" , "6. No conozco su desempeño en este aspecto" ] ;
var arrPuntos = [ 10 , 6 , 4 , 1, 0 , "na" ] ;
var correcta = null ;

var oExam = new oEvaluador() ;

var ex1 = oExam.creaPreExamen( "Administrativos" , "Desempeño" , "Evaluación de Desempeño" , "" ) ;
iConsola("saliendo oExam.creaPreExamen ex1.posic" , [ex1.posic] ) ;

var sPregunta = "<b>Orientación al Logro</b><br>El funcionario cumple con las tareas y actividades asignadas en los tiempos requeridos, compromete recursos adicionales cuando se requieren, priorizando el cumplimiento (orientación al logro) " ;
var oPregunta = oExam.creaPregunta( "Orientación al Logro" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
iConsola( "oPregunta salida y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;

var cant = oExam.insertaPregunta( ex1 , oPregunta , 10 , null ) ;
iConsola( "saliendo oExam.insertaPregunta cant" , [ cant , ex1 ] ) ;
iConsola( "oPregunta despues de insertaPregunta y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;

sPregunta = "<b>Dummy</b>Esta pregunta es una dummy (dummy) " ;
oPregunta = oExam.creaPregunta( "Dummy" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;

cant = oExam.insertaPregunta( ex1 , oPregunta , 5 , null ) ;
iConsola( "saliendo oExam.insertaPregunta cant" , [ cant , ex1 ] ) ;
iConsola( "oPregunta despues de insertaPregunta y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;


var arrPregs = oExam.listaPreguntas( ex1 ) ;
iConsola( "saliendo  oExam.listaPreguntas( ex1 ) arrPregs" , [ arrPregs ] ) ;

var oEstud0 = oExam.insertaEstudiante("Jose Luis") ;
var oEstud1 = oExam.insertaEstudiante("Carlos Vanegas") ;
var oEstud2 = oExam.insertaEstudiante("Mauricio Acosta") ;
var oEstud3 = oExam.insertaEstudiante("Gener Muñoz") ;
var oEstud4 = oExam.insertaEstudiante("Ivonne castañeda") ;
iConsola( "saliendo  oExam.insertaEstudiante arrPregs oEstud1" , [oEstud1.nombre] ) ;
 */

/* 
var $i = 0 ;
var arrNomEval = [ "jorge" , "juan" , "andres" , "caro" , "pedro" , "alejando" , "leo" ,"riki" , "max" , "vanessa" , "amparo" , "raul" , "sofia" , "erenesto" , "adriana" ] ;

var arrOEvalds = [] ;
for ( $i = 0 ; $i < arrNomEval.length ; $i++ ){
    var oEval = oExam.insertaEvaluado1( arrNomEval[$i] ) ; //20200314: esta línea ya no va a funcionar en este módulo porque se movieron las definiciones de funciones a evalua_dsmpn.js
    arrOEvalds[$i] = oEval ;
} 
var $arrExamenes = oExam.asignaExamenEvaluados( ex1 ,arrOEvalds ) ;
*/

/*
iConsola("ex1 posic" , [ex1.posic]) ;
//oExam.muestraPreguntaExamen( arrPregs[0][2] , ex1 ) ;
oExam.muestraPreguntaExamen( arrPregs[0] , $arrExamenes , oEstud1 ) ;

oPregunta = arrPregs[0][2] ;

oExam.insertaRespuesta( $arrExamenes[0] , oEstud1 , oPregunta , 0 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[1] , oEstud1 , oPregunta , 1 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[2] , oEstud1 , oPregunta , 2 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[3] , oEstud1 , oPregunta , 3 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[4] , oEstud1 , oPregunta , 3 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[5] , oEstud1 , oPregunta , 3 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[6] , oEstud1 , oPregunta , 4 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[7] , oEstud1 , oPregunta , 2 , 1 ) ;
oExam.insertaRespuesta( $arrExamenes[8] , oEstud1 , oPregunta , 3 , 1 ) ;

oExam.muestraPreguntaExamen( arrPregs[0] , $arrExamenes , oEstud1 ) ;
oExam.insertaRespuesta( $arrExamenes[3] , oEstud1 , oPregunta , 2 , 1 ) ;
oExam.muestraPreguntaExamen( arrPregs[0] , $arrExamenes , oEstud1 ) ;
*/

/*

oExam.insertaRespuesta( ex1 , oEstud1 , oPregunta , 1 , 1 ) ;
iConsola("oEstud2 antes del for de respuestas", [oEstud2.nombre,oEstud2.posic] ) ;
for ( $i = 0 ; $i < arrPregs.length ; $i++ ){
    oPregunta = arrPregs[$i][2] ;
    iConsola("oPregunta dentro del for de respuestas posi tema lgth", [oPregunta.posic, oPregunta.tema , arrPregs.length ] ) ;
    oExam.insertaRespuesta( ex1 , oEstud2 , oPregunta , $i+1 , 1 ) ;
}
var $tempsalida = oExam.promediaPregunta( ex1 ) ;
$tempsalida = $tempsalida.estats.arreglo() ;
iConsola ("tempsalida", [$tempsalida] ) ;
iConsola ("oExam.arrRespuestas", [oExam.arrRespuestas] ) ;

oPregunta = arrPregs[0][2] ;
oExam.insertaRespuesta( ex1 , oEstud3 , oPregunta , 4 , 1 ) ;
oExam.insertaRespuesta( ex1 , oEstud4 , oPregunta , 4 , 1 ) ;
$tempsalida = oExam.promediaPregunta( ex1 ) ;
$tempsalida = $tempsalida.estats.arreglo() ;
iConsola ("tempsalida", [$tempsalida] ) ;
iConsola ("oExam.arrRespuestas", [oExam.arrRespuestas] ) ;

oExam.insertaRespuesta( ex1 , oEstud3 , oPregunta , 4 , 1 ) ;
oExam.insertaRespuesta( ex1 , oEstud3 , oPregunta , 3 , 1 ) ;
oExam.insertaRespuesta( ex1 , oEstud3 , oPregunta , 2 , 1 ) ;
$tempsalida = oExam.promediaPregunta( ex1 ) ;
//$tempsalida = $tempsalida.estats.arreglo() ;
iConsola ("tempsalida", [$tempsalida] ) ;
iConsola ("oExam.arrRespuestas arrPresgs", [ oExam.arrRespuestas , arrPregs ] ) ;

*/
