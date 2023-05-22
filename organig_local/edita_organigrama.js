/********************************************
 edita_organigrama.js 
 20200301
 despliega las funciones que permiten imprimir y editar el organigrama, desde la perspectiva de datos básicos de jerarquía en la estructura
*******************************************/

//<script src="datos_nodo.js"></script>
//<script src="arbol.js"></script>

/*
organigrama.html = function(){
organigrama.editaElem = function( $pos , $estado ){
organigrama.pintaInsertaForm1 = function(){
organigrama.clickCambiaNivel = function( $menu ){
organigrama.pintaMasRama = function( $posicion ){
function borraElem(  $oOrganigrama , $pos ){
function pintaOrganigrama( $oOrganigrama , $destino ){
function pintaOrganigramaPrimero( $oOrganigrama , $destino , $titulo ){
function guardaElem( $oOrganigrama ){
organigrama.clickCambiaNivel = function( $menu ){
*/

if ( typeof organigrama == 'undefined' ){
    organigrama = new Arbol(0) ;
}

organigrama.html = function(){
    //document.write("llegue al organigrama.html") ;
    document.getElementById( "salidaHtml" ).innerHTML = "" ;
    document.getElementById( "salida" ).innerHTML = "" ;
   // document.getElementById( "salida2" ).innerHTML = "" ;
    pintaOrganigramaPrimero( this , "padre" ,"Organigrama" ) ;
    this.pintaInsertaForm1() ;
}

organigrama.editaElem = function( $pos , $estado ){
/* 
    var elem = new losDatos("cargo","nivel",0,true,0,0,0,0,0,0,"nombre",0,"correo",0,0,0,0,0,0,0,0,0,0,sueldo) ;
     */
    var $i ;
    var $tHtml = "" ;
    var $linea = "" ;
    var $target = this.arrDatos[$pos] ;
    console.log("editaElem  $target , $pos:" ,  $target , $pos ) ;

    if ( $estado == "conDatos" ){
        var miObjeto = {} ;

        for ( $i in $target ){
            if (( typeof $target[$i] != "function" ) && ( typeof $target[$i] != "object" )){
                miObjeto[$i] = document.getElementById($i).value ;
            }
        }

        /* 
        miObjeto.nomCargo = document.getElementById("nomCargo").value ;
        miObjeto.nivCargo = document.getElementById("nivCargo").value ;
        miObjeto.ocupado = document.getElementById("ocupado").value ;
        miObjeto.empresa = document.getElementById("empresa").value ;
        miObjeto.nombre = document.getElementById("nombre").value ;
        miObjeto.correo = document.getElementById("correo").value ;
        miObjeto.sueldoTotal = document.getElementById("sueldoTotal").value ; 
        */
        /* 
        var $elem = new losDatos( miNomCargo , miNivel , miEmpresa , miOcup ,0,0,0,0,0,0, miNombre,0, miCorreo ,0,0,0,0,0,0,0,0,0,0, miSueldoTot ) ;
        */

       $target.editar( miObjeto ) ;
       this.html() ;

       return false ;
       
    }else{
        $tHtml += '<br><br><form action="" method="get" id="miMenu2" onsubmit="return organigrama.editaElem(' + $pos + ',\'conDatos\');">' ;

        $sRuta = this.arrRutaN[$pos] ;
        $tHtml += $sRuta + "<br>" ;

        for ( $i in $target ){
            if (( typeof $target[$i] != "function" ) && ( typeof $target[$i] != "object" )){
                $linea = " " + $i + ': <input type="text" name="'+$i+'" id="'+$i+'" size=80 value="'+ $target[$i]+'" ><br>' ;
                $tHtml +=  $linea ;
            }    
        }
        $tHtml += '<button  type="button" onclick="organigrama.html()">Cancelar</button>'
        $tHtml += '<input type="submit" value="Guardar">' ;
        document.getElementById( "salida" ).innerHTML = $tHtml ;
        document.getElementById( "salida2" ).innerHTML = "" ;

    }
}

organigrama.pintaInsertaForm1 = function(){
    var elem = new losDatos("cargo","nivel",0,true,0,0,0,0,0,0,"nombre",0,"correo",0,0,0,0,0,0,0,0,0,0,1000000) ;
    var $i ;
    var $tHtml = "<h3>Diligencie los campos para generar un nuevo cargo</h3>" ;
    var $linea = "" ;
    var elem = {
        nomCargo : "Nuevo Cargo" ,
        nivCargo : "nivel del cargo" ,
        empresa : "Ibero"
    } ;

    $tHtml += '<form action="" method="get" id="miMenu2" onsubmit="return guardaElem( organigrama );">'

    for ( $i in elem ){ 
        $linea = " " + $i + ': <input type="text" name="'+$i+'" id="'+$i+'" size=80 value="'+elem[$i]+'" ><br>' ;
        $tHtml +=  $linea ;
    }

    $tHtml += '<input type="submit" value="Insertar">' ;
    document.getElementById( "salida2" ).innerHTML = $tHtml ;
}    

//organigrama.clickCambiaNivel( $menu ){: cambia el valor de la variable global de profundidad para que se cambien los niveles de visibilidad del organigrama
organigrama.clickCambiaNivel = function( $menu ){
    if (( $menu == 1 ) && ( $gProfundidad < 20 )){
        $gProfundidad++ ;
    }else if (( $menu == -1 ) && ( $gProfundidad > 0 )){
        $gProfundidad-- ;
    }
    this.html() ;
}

organigrama.pintaMasRama = function( $posicion ){
    var $form = "miMenu2" ;
    var tHtml = this.pintaArbol( $gProfundidad , $form , $posicion ) ;
    document.getElementById("salidaHtml").innerHTML = tHtml ;
}

function borraElem(  $oOrganigrama , $pos ){
    var $target = $oOrganigrama.buscaRutaNodo( $pos ) ;
    var $ok = confirm("De acuerdo con borrar: " + $target + "?" ) ;

    if ( !$ok ){
        return 0 ;
    }else{
        console.log("borraElem  $target , $pos:" ,  $target , $pos ) ;
        $oOrganigrama.quitaNodo( $target ) ;
        pintaOrganigramaPrimero( $oOrganigrama , "padre" ,"Organigrama" ) ;
    }    
}




/* 
function pintaOrganigrama1( $oOrganigrama , $destino ){
    var $form = "miMenu2" ;
    var $nomChkbx = "mover" ;
    $oOrganigrama.accionMenu( $destino , $form , $nomChkbx ) ;
    var tHtml = $oOrganigrama.pintaArbol( $gProfundidad , $form ) ;
    document.getElementById("salidaHtml").innerHTML = tHtml ;
}
*/
/* 
function pintaOrganigramaPrimero1( $oOrganigrama , $destino , $titulo ){
    var $form = "miMenu2" ;
    var $nomChkbx = "mover" ;
    //$oOrganigrama.accionMenu( $destino , $form , $nomChkbx ) ;
    var tHtml = $oOrganigrama.pintaArbol( $gProfundidad , $form ) ;
    tHtml = "<h2>"+$titulo+"</h2>" + tHtml ;
    document.getElementById("salidaHtml").innerHTML = tHtml ;
} 
*/

function pintaOrganigrama( $oOrganigrama , $destino ){
    var $form = "miMenu2" ;
    var $nomChkbx = "mover" ;
    $oOrganigrama.accionMenu( $destino , $form , $nomChkbx ) ;
    var tHtml = $oOrganigrama.pintaArbol( $gProfundidad , $form ) ;
    document.getElementById("salidaHtml").innerHTML = tHtml ;
}

function pintaOrganigramaPrimero( $oOrganigrama , $destino , $titulo ){
    var $form = "miMenu2" ;
    //var $nomChkbx = "mover" ;
    //$oOrganigrama.accionMenu( $destino , $form , $nomChkbx ) ;
    var tHtml = $oOrganigrama.pintaArbol( $gProfundidad , $form ) ;
    tHtml = "<h2>"+$titulo+"</h2>" + tHtml ;
    document.getElementById("salidaHtml").innerHTML = tHtml ;
}

/* 
function pintaOrganigramaPrimero( $oOrganigrama , $destino , $titulo ){
    var $form = "miMenu2" ;
    var $nomChkbx = "mover" ;
    //$oOrganigrama.accionMenu( $destino , $form , $nomChkbx ) ;
    var tHtml = $oOrganigrama.pintaArbol( $gProfundidad , $form ) ;
    tHtml = "<h2>"+$titulo+"</h2>" + tHtml ;
    document.getElementById("salidaHtml").innerHTML = tHtml ;
} 
*/

function guardaElem( $oOrganigrama ){
    
    var miNomCargo = document.getElementById("nomCargo").value ;
    var miNivel = document.getElementById("nivCargo").value ;
    var miEmpresa = document.getElementById("empresa").value ;
    var miOcup = true ;

    var $elem = new losDatos( miNomCargo , miNivel , miEmpresa , miOcup ,0,0,0,0,0,0,"inserte nombre",0, "correo@ibero.edu.co" ,0,0,0,0,0,0,0,0,0,0,0 ) ;

    $oOrganigrama.insertaNodo( "0." , $elem ) ;

    pintaOrganigramaPrimero( $oOrganigrama , "padre" ,"Organigrama" ) ;
    //$oOrganigrama.pintaInsertaForm( "salida" ) ;
    
    return false ;
}

$gProfundidad = 10 ;
//organigrama.html1() ;
