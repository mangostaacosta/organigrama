<?php
  /****************************************************************************
  js_canal(prueba).php
  20200501
  Primera prueba para recibir el codigo de prueba de php_canal.js 
  ******************************************************************************/

  $var1 = htmlspecialchars($_POST['prueba']);
  $var2 = htmlspecialchars($_POST['prueba2']);
  $var3 = htmlspecialchars($_POST['prueba3']);

  echo "el valor de prueba es $var1 <br>" ;
  echo "el valor de prueba2 es $var2 <br>" ;
  echo "el valor de prueba3 es $var3 <br>" ;
  echo "<br>fin" ;

?>