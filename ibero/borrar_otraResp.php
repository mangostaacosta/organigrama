<?php
/****************************************************************************
borrar_otraResp.php
20200503
Borra el contenido de datos/minipp.dat
OJO: se borra todo lo que está ARCHIVADO en texto en el servidor, posiblmente para usar únicamente despues de que se ha creado el arreglo en JS (y eso) lo mejor es usarla después de que se ha archivado el arrRespuestas1 después de incluir los cambios de este mismo archivo
******************************************************************************/
  
  ini_set('display_errors', TRUE) ;
  error_reporting(E_ALL) ;
  echo '<a href="index2.html">Inicio IberoEvaluator</a><br>' ;
  
  $nomArch = "datos/minipp.dat" ;
  $myfile = fopen( $nomArch , "w" ) or die("Unable to open file!") ;
  fwrite( $myfile , "" ) ;
  fclose($myfile) ;

?>