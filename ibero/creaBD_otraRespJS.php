<?php
/****************************************************************************
creaBD_otraRespJS.php
20200503
Abre el archivo donde están guardadas las respuestas de los evaluadores separadas por "/n", a partir de alli genera un arreglo de cadenas de texto similiares a las que requiere leeJSON para anexar a arrRespuestas1
******************************************************************************/
  
  
  ini_set('display_errors', TRUE) ;
  error_reporting(E_ALL) ;
  echo '<a href="index2.html">Inicio IberoEvaluator</a><br>' ;
  
  $archtemp = "datos/minipp.dat" ;  //esta es la BD donde está guardado arrRespuestas1
  if (file_exists( $archtemp )){
    echo "<br> si encontró el archivo $archtemp" ;
    $myfile = fopen( $archtemp , "r") or die("Unable to open file!");
    $myText = fread( $myfile , filesize( $archtemp ));
    fclose($myfile);

    
    echo "<pre>" ;
    echo "<br>texto puro es: $myText" ;
    $arrTextos = explode("/n", $myText ) ;
    echo "<br>Ahora la versión en arreglo<br>" ;
    array_pop( $arrTextos ); // quitar el último '/n'
    print_r($arrTextos) ;

    //ahora constuir el js

    $jsText = "arrGlOtrasResp = [] ; " ;
    foreach ( $arrTextos as $key => $elem ){
      $texto = htmlspecialchars_decode( $elem ) ;
      $texto = "arrGlOtrasResp[$key] = '$texto' ; " ;
      $jsText .= $texto ;
    }

    echo "<br>Ahora el equivalente JS<br>" ;
    echo $jsText ;
   
    $archtemp = "datos/bd_otrasResp.js" ;
    $handle = fopen($archtemp, "w" ) ; 
    fwrite($handle, $jsText);
    fclose($handle) ;
  
  }else{
    echo "<br>falló: $archtemp" ;
  }
  echo "<br>saliendo" ;
  echo "</pre>" ;

?>