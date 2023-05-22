/********************************************
 nesayo_arbol.js 
 20200118
 Archivo para probar las funcionalidades del objeto arbol definido en arbol.js
 *******************************************/

 //<script src="arbol.js"></script>

 

var gNomObjOrganigrama = "organigrama" ;
$gProfundidad = 10 ;


var aT = [] ;
var index ;
var sueldoTot = 0 ;
var cargo ;
var ocup = true ;
var niv ;
var empresa = "Ibero" ;

for ( index = 0; index < 44 ; index++) {
    cargo = "Cargo_" + index ;
    ocup = true ;
    niv = "auxiliar" ;
    empresa = "Ibero" ;
    nombre = " Nombre_" + index ;
    email = "mail_" + index + "@gm.com" ;
    sueldo = 4000000 - ( 100000 * index * 0.5 ) ;
    sueldoTot = sueldoTot + sueldo ;
    elem = new losDatos(cargo,niv,0,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
    aT[index] = elem ;
}
//console.log( aT[4].sueldoTotal ) ;
document.write("el total de sueldos asignado es:" + sueldoTot +"<br>") ;


organigrama = new Arbol( aT[0] ) ;
organigrama.myName = "Organigrama 44" ;
for ( $nodo of aT ){
    organigrama.insertaNodo( "0." , $nodo ) ;
}


/* organigrama.insertaNodo( "0." , aT[1] ) ;
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
organigrama.insertaNodo( "0.1." , aT[20] ) ; */


tHtml = organigrama.pintaArbol( 6 , "" ) ;
document.write( "<br>Primera asignacion del organigrama: " + organigrama.arrRutaN ) ;

document.write( "<br><br>" ) ;
var miRuta = "" ;
for ( var i = 0 ; i < organigrama.arrRutaN.length ; i++ ){
    miRuta = organigrama.arrRutaN[i] ;
    arrEnsayo = organigrama.escogeEncuestados2( miRuta , 5 ) ;
    document.write("<br>" + miRuta + ">>escogeEncuestados2>> " + arrEnsayo[1] ) ;
    tHtml = organigrama.pintaArbol( 4 , "" ) ;
}

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




//die() ;

/* 
var $miTexto = organigrama.serialize() ;
//localStorage.setItem("temp1" , $miTexto ) ; //esta línea crea un storage del organigrama para borrar el storage toca hacer:
//localStorage.removeItem("temp1");
//alert ( $miTexto ) ;

$miTexto = "" ;
$miTexto = localStorage.getItem("temp1") ;

var dupligrama = new Arbol( 0 ) ;
dupligrama.unserialize( $miTexto ) ;
tHtml = dupligrama.pintaArbol( 4 , "" ) ;
document.write( "Este es dupligrama: " + dupligrama.arrRutaN ) ;
 */
/* Las instrucciones a continuación se utilizan para validar que el objeto dupligrama si se estuviera recuperando adecuadamente del archivo, ya verificado el tema entonces lo comentamos por si se requiere mas adelante para insulmo de otras funcionalidades
pintaOrganigramaPrimero( dupligrama , "padre" ,"Dupligrama" ) ;
dupligrama.pintaInsertaForm( "salida" ) ;
*/





//var total = organigrama.sumaSueldoTotalArbol( "fPrueba" ) ;  //20200123: ensayo fallido de usar función en variable
var total = organigrama.sumaSueldoTotalArbol( 0 ) ;
document.write("resultado sumaSueldoTotalArbol  es: " + total + "<br>" ) ;
organigrama.pintaResult() ;


organigrama.arrDatos[4]["ocupado"] = false ;
organigrama.arrDatos[5]["ocupado"] = false ;
organigrama.arrDatos[6]["ocupado"] = false ;

var total = organigrama.cuentaOcupadosArb( 0 ) ;
document.write("resultado cuentaOcupadosArb es: " + total + "<br>" ) ;
organigrama.pintaResult() ;

/*
//ensayo randomEmail
var arrTemp = organigrama.arrNodos ;
var ensayo = organigrama.randomEmail( arrTemp , 20 ) ;
document.write("<br> los supuestos emails:" + ensayo ) ;
console.log("this.randomEmail saliendo asi es arrTemp:" + arrTemp + " longitud:" + arrTemp.length ) ;

//ensayo para string de emails desde gerente
var arrEnsayo = organigrama.escogeEncuestados2 ("0." , 6 ) ;
document.write("<br> escogeEncuestados2:" + arrEnsayo[1] ) ;

arrEnsayo = organigrama.escogeEncuestados2 ("0.0.1." , 6 ) ;
document.write("<br> escogeEncuestados2:" + arrEnsayo[1] ) ;
*/

document.write( "<br>" ) ;
var miRuta = "" ;
var arrEnsayo = [] ;
for ( var i = 0 ; i < organigrama.arrRutaN.length ; i++ ){
    miRuta = organigrama.arrRutaN[i] ;
    arrEnsayo = organigrama.escogeEncuestados2( miRuta , 8 ) ;
    document.write("<br>" + miRuta + ">> escogeEncuestados2>>" + arrEnsayo[1] ) ;
    //tHtml = organigrama.pintaArbol( 4 , "" ) ;
}

//ensayo de la función de call back
//alert("arranca prueba") ;
//organigrama = llenaOrg2( 16 ) ;
tHtml = organigrama.pintaArbol( 6 , "" ) ;
document.write( tHtml ) ;
var total = organigrama.sumaSueldoTotalArbol( 0 ) ;
document.write("resultado sumaSueldoTotalArbol  es: " + total + "<br>" ) ;

function cuentaHoja( posic , self ){
    var miruta = self.buscaRutaNodo( posic ) ;
    console.log("ruta actual,sueldo actual: " + miruta  + " , " + self.arrDatos[posic].sueldoTotal ) ;
    return 1 ;
}

function cuentaOcupados( posic , self ){
    var miruta = self.buscaRutaNodo( posic ) ;
    console.log("cuentaOcupados ruta actual: " , miruta ) ;
    if ( self.arrDatos[posic]["ocupado"] == true ){
        return 1 ;
    }else{
        return 0 ;
    }
}


function sumaTodo( a , b ){
    return a + b ;
}

var $rr = cuentaHoja( 3 , organigrama ) ;


//$rr = organigrama.iteraFuncionArbol( organigrama.raiz , cuentaHoja , cuentaTodo ) ;
$rr = organigrama.iteraFuncionArbol( organigrama.raiz , cuentaHoja , sumaTodo ) ;
document.write("rr: " +  $rr + "<br><br><br>" ) ;
$rr = organigrama.iteraFuncionArbol( organigrama.raiz , cuentaOcupados , sumaTodo ) ;
document.write("rr: " +  $rr + "<br><br><br>" ) ;
