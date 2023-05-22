/********************************************
 multiarr.js 
 202002
 define ala estructura de datos para trabajar arreglos bidimensionales
 *******************************************/

function biArreglo(){
    
    this.arr1 = [] ;  //arreglo de arreglos donde se guarda la información

    //this.inserta = function( $p1 , $p2 , $val )
    //this.valor = function( $p1 , $p2 )
    //this.long = function()
    //this.longFila = function( $p1 )
    //this.arreglo = function()

    
    this.inserta = function( $p1 , $p2 , $val ){
        if ( typeof this.arr1[$p1] !== 'undefined' ){
            this.arr1[$p1][$p2] = $val ;
        }else{
            var arr2 = [] ;
            arr2[ $p2 ] = $val ;
            this.arr1[$p1] = arr2 ;
        }
        console.log ( "this.inserta:" +  $p1 + "|" + $p2 + ":" + $val ) ;
        return $val ;
    }
    

    this.valor = function( $p1 , $p2 ){
        if ( typeof this.arr1[$p1] !== 'undefined' ){
            return this.arr1[$p1][$p2] ;
        }else{
            //return 'undefined' ;
            return undefined ;
        }
    }

    this.long = function(){
        return this.arr1.length ;
    }

    this.longFila = function( $p1 ){
        if ( typeof this.arr1[$p1] !== 'undefined' ){
            return this.arr1[$p1].length ;
        }else{
            return 0 ;
        }
    }

    this.arreglo = function(){
        return this.arr1 ;
    }

    this.poblar = function ( fils , cols , val ){
        if ( this.arr1.length > 0 ){  //la matriz ya tiene valores, se abandona método
            return false ;
        }
        var $i , $j ;
        for ( $i = 0 ; $i < fils ; $i++ ){
            for ( $j = 0 ; $j < cols ; $j++ ){
                this.inserta( $i , $j , val ) ;
            }
        }
    }
}

//pruebas generales de asignación y typedef a en arrreglos de js
var arr1 = [] ;
arr1[5] = 25 ;
var arr2 = [] ;
arr2[2] = arr1 ;
console.log( arr2 ) ;

var arr1 = [] ;
arr1[5] = 45 ;
arr2[4] = arr1 ;
console.log( arr2 ) ;

arr2[4][3] = 43 ;
console.log( arr2 ) ;

arr2[2][0] = 20 ;
arr2[2][8] = 28 ;
console.log( arr2 ) ;

var arr1 = [] ;
arr1[3] = 13
arr2[1] = arr1 ;
console.log( arr2 ) ;

//typeof this.arrRespuestas[posExam] !== 'undefined') 

console.log ("typeof arr2[0]" ,typeof arr2[0] ) ;
console.log ("typeof arr2[1]" ,typeof arr2[1] ) ;
console.log ("typeof arr2[2]" ,typeof arr2[2] ) ;
console.log ("typeof arr2[3]" ,typeof arr2[3] ) ;
console.log ("typeof arr2[4]" ,typeof arr2[4] ) ;
console.log ("typeof arr2[5]" ,typeof arr2[5] ) ;

console.log ("typeof arr2[2][8]" ,typeof arr2[2][8] ) ;
console.log ("typeof arr2[2][2]" ,typeof arr2[2][2] ) ;
//console.log ("typeof arr2[3][3]" ,typeof arr2[3][3] ) ;





//prueba de uso del objeto biArreglo
var arr0 = new biArreglo() ;
arr0.inserta( 2 , 5 , 25 ) ;
arr0.inserta( 4 , 5 , 45 ) ;
arr0.inserta( 4 , 3 , 43 ) ;
arr0.inserta( 2 , 8 , 28 ) ;
console.log ("arr0" , arr0.arr1 ) ;
var $valor;
$valor = arr0.valor( 2 , 5 ) ;
console.log ("$valor" , $valor ) ;
if ( $valor !== undefined ){
//if ( typeof $valor !== 'undefined' ){
    //document.write ( "valor es: " + $valor + "<br>" ) ;
    console.log( "valor es: " + $valor + "<br>" ) ;
}else{
    //document.write ( "SIN valor <br>" ) ;
    console.log( "SIN valor <br>" ) ;
}

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
//arrtemp = { a:"cero" , b:"uno" , c:"dos" , d:"tres" } ;

arrtemp = [ "cero" , "uno" , "dos" , "tres" ] ;
//OJO: los objetos no se consideran iterables en JS

var $val ;
for ( $val of arrtemp ) {
    console.log ( $val + "" ) ;
    //document.write ( "<br>" ) ;
}

var arr5 = [] ;
arr5.uno = 1 ;
arr5.dos = 2 ;  
arr5.tres = 3 ;
console.log ("arr5" , arr5 ) ;

var arr4 = [] ;
arr4["uno"] = 1 ;
arr4["dos"] = 2 ;
arr4["tres"] = 3 ;
console.log ("arr4" , arr4 ) ;

var arr3 = { a:1 , b:2 , c:"tres" }
console.log ("arr3" , arr3 ) ;


