<?php
  /****************************************************************************
  testXHR.php
  20200503
  Prueba para recibir un POST y escribirlo en un archivo del servidor 
  ******************************************************************************/

  ini_set('display_errors', TRUE) ;
  error_reporting(E_ALL) ;

  echo "soy testXHR.php<br>" ;
  
  $var1[0] = $_POST['nombre'] ;
  $var1[1] = $_POST['sexo'] ;
  $var1[2] = $_POST['edad'] ;
  $var1[3] = $_POST['php_estado'] ;
  $var1[4] = $_POST['error'] ;
  $var1[5] = "fin del arreglo" ;

  $texto = "print_r( $var1 ) :" ;
  $texto .= " $var1[2]" ; 
  $texto .= " $var1[3]" ;
  $texto .= " $var1[5]" ;
  echo  "este es el texto: $texto <br>" ;
  
  $myfile = fopen( "datos/testXHR.dat" , "w" ) or die("Unable to open file!") ;
  fwrite( $myfile , $texto ) ;
  fclose($myfile) ;  

?>