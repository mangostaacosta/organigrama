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

function oMundoExamen(){
    this.arrExamenesTodos = [] ;
    this.cantidad = 0 ;

    this.insertaExamen = function( nodo ){
        this.arrExamenesTodos[this.cantidad] = nodo ;
        this.cantidad++ ;
        return (this.cantidad - 1) ;
    }
}


function oExamen(){

    this.posic = 0 ;
    this.arrExamenes = [] ;
    this.arrPreguntasTodas = [] ;
    this.arrEstudiantes = [] ;
    //this.arrRespuestas = [][][] ;
    this.arrRespuestas = [] ;
    this.arr1 = [] ;
    this.arr2 = [] ;

    this.insertaEstudiante = function( nombre ){
        var nodo = [] ;
        nodo.nombre = nombre ;
        nodo.posic = this.arrEstudiantes.length ;
        iConsola( "this.insertaEstudiante nodo" , [nodo.posic] ) ;
        this.arrEstudiantes[nodo.posic] = nodo ;
        return nodo ;
    }



    //function creaExamen( texto , categ , texto , texto )    
    //function creaExamen( asignatura , tipo2 , titulo , instrucciones ){
    this.creaExamen = function( asignatura , tipo2 , titulo , instrucciones ){
    //this.creaExamen = function( asignatura , tipo2 , titulo , instrucciones , arrExamenesTodos ){
        
        //this.asignatura = asignatura ;
        //this.tipo2 = tipo2 ;
        //this.titulo = titulo ; 
        //this.instrucciones = instrucciones ; 
        //this.arrPreguntas = [] ; //arr de oPregunta (o casi porque incluye unos parámetros adicionales)
        
        var p = [] ;
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

    //function creaPregunta( texto, categ, categ, texto, arr texto , arr int , int )
    //function creaPregunta( tema , nivel , tipo1 , sPregunta , arrDistractor , arrPuntos , correcta ){
    this.creaPregunta = function ( tema , nivel , tipo1 , sPregunta , arrDistractor , arrPuntos , correcta ){
        var preg = [] ;
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

    this.listaPreguntas = function( oExamen ){
        var temp = this.arrExamenes[oExamen.posic].arrPreguntas ;
        var long = temp.length ;
        var arrSalida = [] ;
        for (var $i = 0 ; $i < long ; $i++ ){
            arrSalida[$i] = temp[$i] ;
        }
        return arrSalida ;
    }

    //this.insertaRespuesta = function( oExamen , oEstudiante , oPregunta , int , int )
    //esta implmentación sirve sólo en casos con pregutnas tipo select
    this.insertaRespuesta = function( oExamen , oEstudiante , oPregunta , respuesta , pesoEstudiante ){
        var dato = [] ;
        dato.rsp = respuesta ;
        dato.peso = pesoEstudiante ;

        //var arr1 = [] ;
        this.arr1[oEstudiante.posic] = dato ;
        //var arr2 = [] ;
        this.arr2[oPregunta.posic] = this.arr1 ;
        this.arrRespuestas[oExamen.posic] = this.arr2 ;
        //this.arrRespuestas[oPregunta.posic][oExamen.posic][oEstudiante.posic] = dato ;
        iConsola( "this.insertaRespuesta arrRespuestas" , [ oExamen.posic , oPregunta.posic , oEstudiante.posic ,  oPregunta.tema ] ) ;
        return dato ; 
    }

    this.promediaPregunta = function( oExamen ){
        var posExam = oExamen.posic ; //ya tengo la posción del examen
        var preg = null ;
        var posPreg = 0 ;
        var posEstud = 0 ;
        var oSalida = [] ;
        var arrRespts = [] ;
        var arrtemp1 = []
        var correcta = [] ;
        iConsola("promediaPregunta oExamen.arrPreguntas.length" , [oExamen.arrPreguntas.length] ) ;
        for ( var $i = 0 ; $i < oExamen.arrPreguntas.length ; $i++ ){
            arr = oExamen.arrPreguntas[$i] ;
            preg = arr[2] ;
            posPreg = preg.posic ;  //ya tengo la posición de la pregunta
            //lo que se debe hacer es buscar la pregunta y crear un arreglo con todas las posibles respuestas
            oPreg = this.arrPreguntasTodas[posPreg] ;
            //oSalida.correcta[$i] = oPreg.correcta ; //esta línea no funciona porque hay que crear el arreglo y al final si asignarlo a oSalida, no es muy viable crearlo de una con todos los juguetes en oSalida, lo mismo me imagino que pasará con oSalida.preg El riesgo a revisar es si la variable se muere al salir del procedimiento/for
            correcta[$i] = oPreg.correcta ;
            oSalida.ptotal = 0 ;
            for (var $k = 0 ; $k < oPreg.arrDistractor.length ; $k++ ){
                var temp = [] ;
                temp["txt"] = oPreg.arrDistractor[$k] ;
                temp["cant"] = 0 ;
                temp["cantpeso"] = 0 ;
                temp["sumpond"] = 0 ;
                //arrtemp1 = [] ;
                arrtemp1[$k] = temp ;
                arrRespts[$i] =  arrtemp1 ;
                //arrRespts[$i][$k]["spond"] = 0 ;
                /* oSalida.preg[$i]["spondpeso"] = 0 ;
                oSalida.preg[$i]["spond"] = 0 ; */
                iConsola("this.promediaPregunta for de oSalida", [$i,$k]) ;                         
            }

            var $dato = null ;
            for ( var $j = 0 ; $j < this.arrEstudiantes.length ; $j++ ){
                posEstud = this.arrEstudiantes[$j].posic ;
                iConsola("promediaPregunta [posExam][posPreg][posEstud]" , [posExam,posPreg,posEstud] ) ;
                if (typeof this.arrRespuestas[posExam] !== 'undefined') {
                    iConsola("promediaPregunta SI entró [posExam]" , [posExam,posPreg,posEstud] ) ;
                    if (typeof this.arrRespuestas[posExam][posPreg] !== 'undefined') {
                        iConsola("promediaPregunta SI entró [posExam][posPreg]" , [posExam,posPreg,posEstud] ) ; 
                        if (typeof this.arrRespuestas[posExam][posPreg][posEstud] !== 'undefined') { //aca ya estamos dnd queremos estar es donde se hacen las acciones
                            iConsola("promediaPregunta SI entró [posExam][posPreg][posEstud]" , [posExam,posPreg,posEstud] ) ;
                            //var arrTemp = [ orden , peso , oPregunta ] ;
                            $dato = this.arrRespuestas[posExam][posPreg][posEstud] ;
                            $distractor = $dato.rsp ;
                            arrRespts[$i][$distractor]["cant"]++ ;
                            arrRespts[$i][$distractor]["cantpeso"] += $dato.pesoEstudiante ;

                            iConsola("this.promediaPregunta cant++ distractor", [ $i , arrRespts[$i][$distractor]["cant"] , $distractor ] ) ;

                        }else{
                            iConsola("promediaPregunta NO entró [posExam][posPreg][posEstud]" , [posExam,posPreg,posEstud] ) ;
                        }
                    }else{
                        iConsola("promediaPregunta NO entró [posExam][posPreg]" , [posExam,posPreg,posEstud] ) ;
                    }
                }else{
                    iConsola("promediaPregunta NO entró [posExam]" , [posExam,posPreg,posEstud] ) ;
                }
            }    
        }
        oSalida.correcta = correcta ;
        oSalida.estats = arrRespts ;
        return oSalida ;
    }    
}

function activaExamen( oExamen , fechaIni , fechaFin ){

}



function promediaExamen(  oExamen ){

}

function calificaEstudianteExamen( oEstudiante, oExamen ){

}

function archivaResultados ( arr_oExamen , fechaIni , fechaFin ){

}

function iConsola( sitio , arrVariable ){
    var texto = sitio + ">>" ;
    console.log( texto ) ;
    for (var i = 0 ; i < arrVariable.length ; i++ ){
        //texto += " :" + arrVariable[i] ;
        console.log( texto , arrVariable[i] ) ;        
    }
    //console.log( texto ) ;
}

var sPregunta = "El funcionario compromete recursos adicionales cuando se requieren, priorizando el cumplimiento y cumple con las tareas y actividades que tiene asignadas (orientación al logro) "

var arrDistr = [ "1. Se ubica en el 10% superior (decil 9 a 10) de similitud con el ideal descrito, es decir se alinea excepcionalmente bien" , "2. Se ubica en el siguiente 30% (decil 6 a 9) de similitud con el ideal descrito, es decir más que el común" , "3. Se ubica en el siguiente 20% (decil 4 a 6) de similitud con el ideal descrito, es decir está en el promedio" , "4. Se ubica en el siguiente 20% (2 a 4) de similitud con el ideal descrito, es decir está por debajo del promedio" , "Se ubica en el siguiente 20% (0 a 2) de similitud con el ideal descrito, es decir está bastante por debajo del promedio" , "6. No conozco su desempeño en este aspecto" ] ;
var arrPuntos = [ 10 , 6 , 4 , 1, 0 , "na" ] ;
var correcta = null ;

var oExam = new oExamen() ;

var ex1 = oExam.creaExamen( "Mauricio Acosta" , "Desempeño" , "Evaluación de Desempeño" , "" ) ;
iConsola("saliendo oExam.creaExamen ex1.posic" , [ex1.posic] ) ;

var oPregunta = oExam.creaPregunta( "Orientación al Logro" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;
iConsola( "oPregunta salida y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;

var cant = oExam.insertaPregunta( ex1 , oPregunta , 10 , null ) ;
iConsola( "saliendo oExam.insertaPregunta cant" , [ cant , ex1 ] ) ;
iConsola( "oPregunta despues de insertaPregunta y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;


oPregunta = oExam.creaPregunta( "Proactividad" , "base" , "select" , sPregunta , arrDistr , arrPuntos , correcta ) ;

cant = oExam.insertaPregunta( ex1 , oPregunta , 5 , null ) ;
iConsola( "saliendo oExam.insertaPregunta cant" , [ cant , ex1 ] ) ;
iConsola( "oPregunta despues de insertaPregunta y con tema" , [ oPregunta.arrPuntos , oPregunta.tema ] ) ;


var arrPregs = oExam.listaPreguntas( ex1 ) ;
iConsola( "saliendo  oExam.listaPreguntas( ex1 ) arrPregs" , [ arrPregs ] ) ;

var oEstud1 = oExam.insertaEstudiante("Carlos Vanegas") ;
iConsola( "saliendo  oExam.insertaEstudiante arrPregs oEstud1" , [oEstud1.nombre] ) ;

oExam.insertaEstudiante("Mauricio Acosta") ;
oExam.insertaEstudiante("Gener Muñoz") ;
var oEstud2 = oExam.insertaEstudiante("Ivonne castañeda") ;

oExam.insertaRespuesta( ex1 , oEstud1 , oPregunta , 1 , 1 ) ;
iConsola("oEstud2 antes del for de respuestas", [oEstud2.nombre,oEstud2.posic] ) ;
for (var $i = 0 ; $i < arrPregs.length ; $i++ ){
    oPregunta = arrPregs[$i][2] ;
    iConsola("oPregunta dentro del for de respuestas", [oPregunta.posic, oPregunta.tema] ) ;
    oExam.insertaRespuesta( ex1 , oEstud2 , oPregunta , $i+1 , 1 ) ;
}

iConsola("oExam.arrRespuestas", oExam.arrRespuestas[0][0][3] ) ;

/* 
var arr1 = [] ;
var arr2 = [arr1] ;
var arr3 = [arr2] ;
//arr3[0][0][0] = 11 ;

var dato = [ "jorge" , 40 ] ;
//lo quiero meter en la posicion arr3[5][1][4]
arr1[4] = dato ;
arr2[1] = arr1 ;
arr3[8] = arr2 ;

//arr3[0][0][1] = 11 ;
iConsola( "arr3" , [ arr3 ] ) ;
iConsola( "arr3 arr3[8][1][4]" , [ arr3[8][1][4] ] ) ;
iConsola( "arr3 arr3[0][0][0]" , [ arr3[0][0][0] ] ) ;
 */

iConsola("ex1 posic" , [ex1.posic]) ;
var $tempsalida = oExam.promediaPregunta( ex1 ) ;
iConsola ("nada", [$tempsalida] ) ;
console.log( $tempsalida , "hola" , "caballo", ex1 ) ;

var arrtemp = [] ;
/* arrtemp["a"] = "pollo" ;
arrtemp["b"] = "pizza" ;
arrtemp["c"] = "carne" ;
arrtemp["d"] = "tres" ; */

/* arrtemp[0] = "pollo" ;
arrtemp[1] = "pizza" ;
arrtemp[2] = "carne" ;
arrtemp[3] = "tres" ;
*/
arrtemp = [ "cero" , "uno" , "dos" , "tres" ] ;
//arrtemp = { a:"cero" , b:"uno" , c:"dos" , d:"tres" } ;

//OJO: los objetos no se consideran iterables en JS

iConsola ("nada2", [arrtemp] ) ;

var $val ;
for ( $val of arrtemp ) {
    document.write ( $val + "" ) ;
    document.write ( "<br>" ) ;       
}

