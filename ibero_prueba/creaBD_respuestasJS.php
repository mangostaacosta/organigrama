<?php
/****************************************************************************
creaBD_respuestasJS.php
20200502
Abre el archivo donde están guardadas las respuesta en el servidor y crea
un archivo js que servira para que sea usado como los archivos de BD por arma_evalua4.html para lograr el efecto de armar el arreglo que nutre arrRespuestas1.
Esto se logra dado que el script llena la variable global: glTextoArrResp1
******************************************************************************/
  
  
  ini_set('display_errors', TRUE) ;
  error_reporting(E_ALL) ;
  echo '<a href="index2.html">Inicio IberoEvaluator</a><br>' ;
  
  $archtemp = "datos/pp.txt" ;  //esta es la BD donde está guardador arrRespuestas1
  if (file_exists( $archtemp )){
    echo "<br> si encontró el archivo $archtemp" ;
    $myfile = fopen( $archtemp , "r") or die("Unable to open file!");
    $myText = fread( $myfile , filesize( $archtemp ));
    fclose($myfile);

    $archtemp = "datos/bd_respuestas.js" ;
    $handle = fopen($archtemp, "w" ) ;
    $texto = htmlspecialchars_decode($myText);
    $texto = "glTextoArrResp1 = '$texto' ; " ;
    fwrite($handle, $texto);
    fclose($handle) ;
  }else{
    echo "<br>falló: $archtemp" ;
  }
  echo "<br>saliendo" ;

?>