/********************************************
 php_canal.js 
 20200501
 primera prueba para intentar enviar un archivo de JSON al servidor con un button
*******************************************/

function jsTestForm(){
    var $html = "" ;
    $html += '<form action="js_canal.php" method="post" name="miPrueba" onsubmit="return jsEnvio1()">' ;
    $html += 'Presiona cuando estes listo a enviar: ' ;
    $html += '<input type="hidden" id="prueba" name="prueba" value="">' ;
    $html += '<input type="hidden" id="prueba2" name="prueba2" value="ensayo_prueba">' ;
    $html += '<input type="hidden" id="prueba3" name="prueba3" value="">' ;
    $html += '<br><button type="button" onclick="jsEnvio( $oPrueba )">OK XHR</button>' ;
    //$html += '<br><button type="button" onclick="jsEnvio1( $oPrueba )">OK Form</button>' ;
    $html += '<br><input type="submit"></form>' ;
    $html += "hola2" ;
    document.write($html ) ;
}

function jsEnvio2( $obj1 ){
    var $a1 = JSON.stringify( $oPrueba ) ;

    if ( typeof $a1 == undefined ){
        return false ;    
    }else{
        document.forms["miPrueba"]["prueba"].value = $a1 ;
        document.forms["miPrueba"]["prueba3"].value = "ensayo_prueba3" ;
        document.forms["miPrueba"]["prueba2"].value = "nada" ;
        console.log(" jsEnvio1 forms: " , document.forms ) ;
        alert("dentro de jsEnvio1") ;
        return true ;
    }    
}

function jsEnvio1( $obj1 ){
    var $a1 = JSON.stringify( $oPrueba ) ;

    if ( typeof $a1 == undefined ){
        return false ;    
    }else{
        document.forms["miPrueba"]["prueba"].value = $a1 ;
        document.forms["miPrueba"]["prueba3"].value = "ensayo_prueba3" ;
        document.forms["miPrueba"]["prueba2"].value = "nada" ;
        console.log(" jsEnvio1 forms: " , document.forms ) ;
        alert("dentro de jsEnvio1") ;
        return true ;
    }    
}

function jsEnvio( $obj1 ){
    var $a1 = JSON.stringify( $oPrueba ) ;
    
    const XHR = new XMLHttpRequest();
    var FD  = new FormData();

    // Push our data into our FormData object
    FD.append( "prueba" , $a1 ) ;

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
    XHR.open( 'POST', '/js_canal.php' ) ;
    //XHR.open( 'POST', '/js_canal.html' ) ;
    XHR.send( FD );

}



var $oPrueba = {} ;

$oPrueba["uno"] = 1;
$oPrueba["dos"] = "dos es dos";
$oPrueba["tres"] = "three";
$oPrueba["nombres"] = ["ana" , "beto" , "carlos" ] ;

JSON.stringify( $oPrueba ) ;
console.log( "jsForm $oPrueba" , $oPrueba ) ;