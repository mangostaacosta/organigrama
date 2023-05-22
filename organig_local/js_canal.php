<?php
  /****************************************************************************
  js_canal.php
  20200502
  Archivo de servidor que gestiona en primera instancia el guardado de arrResuestas1

  ******************************************************************************/
  
  
  ini_set('display_errors', TRUE) ;
  error_reporting(E_ALL) ;

  /* 
  $archtemp = "apto.dat" ;
  if (file_exists( $archtemp )){
    echo "<br> si encontró el archivo $archtemp" ;
  }else{
    echo "<br>falló: $archtemp" ;
  }
	$handle = fopen($archtemp, "r" );
	$data = fread($handle, filesize($archtemp));
  fclose($handle);

  $archtemp = "datos/apto3.dat" ;
  if (file_exists( $archtemp )){
    echo "<br> si encontró el archivo $archtemp" ;
  }else{
    echo "<br>falló: $archtemp" ;
  }
	$handle = fopen($archtemp, "r" );
	$data = fread($handle, filesize($archtemp));
  fclose($handle);
  
  
  $archtemp = "apto2.dat" ;
  if (file_exists( $archtemp )){
    echo "<br> si encontró el archivo $archtemp" ;
  }else{
    echo "<br>falló: $archtemp" ;
    $handle = fopen($archtemp, "w" );
    fclose($handle) ;
  }

  $archtemp = "datos/apto4.dat" ;
  if (file_exists( $archtemp )){
    echo "<br> si encontró el archivo $archtemp" ;
  }else{
    echo "<br>falló: $archtemp" ;
    $handle = fopen($archtemp, "w" );
    fclose($handle) ;
  }
  */


  //echo "<br>Entrando js_canal.php<br>" ;

  if ( isset( $_POST['php_estado'] )){
    
    $estado = htmlspecialchars( $_POST['php_estado'] ) ;
    echo "estado: $estado<br>" ;
    //echo "estado error: $estado1<br>" ;

    if ( $estado == 1 ){ //llamado desde arma_evalua4.html, para insertar datos en "datos/$nomArch.txt"
      //echo '<a href="arma_evalua4.html">Inicio IberoEvaluator</a><br>' ;
      $respuestas = htmlspecialchars( $_POST['php_respuestas'] ) ;
      //$respuestas =  $_POST['php_respuestas']  ;
      $nomArch = htmlspecialchars( $_POST['php_nombre'] ) ;
      //$nomArch =  $_POST['php_nombre']  ;

      echo "<br>archivo: $nomArch" ;
      echo "<br>arrRespuestas1: $respuestas" ;

      $myfile = fopen( "datos/$nomArch.txt" , "w" ) or die("Unable to open file!") ;
      fwrite( $myfile , $respuestas ) ;
      fclose($myfile) ;

      echo '<br>Se han guardado las respuestas en el servidor ' ;
      echo '<br><a href="arma_evalua4.html">Volver al manejador de respuestas generalizado</a>' ;
      die("finaliza para php_estado == 1 OK ") ;
    }
    if ( $estado == 2 ){ //llamado desde arma_evalua2.html, para insertar datos en datos/minipp.dat
      $miRespuestas = htmlspecialchars( $_POST['php_prueba'] ) . '/n' ;
      //echo "<br>arrMiRespuestas: $miRespuestas" ;
      //echo '<br><a href="arma_evalua2.html">Volver a la evaluación</a>' ;
      $nomArch = "datos/minipp.dat" ;
      $myfile = fopen( $nomArch , "a" ) or die("Unable to open file!") ;
      fwrite( $myfile , $miRespuestas ) ;
      fclose($myfile) ;
      $nomArch = "datos/minipp_back.dat" ;
      $myfile = fopen( $nomArch , "a" ) or die("Unable to open file!") ;
      fwrite( $myfile , $miRespuestas ) ;
      fclose($myfile) ;
      //realmente, al ser un llamado directo desde XHR no sé si esto se muestre porque no se redirecciona
      echo '<br><br>Se han guardado las respuestas en el servidor, favor Tomar Pantallazo y enviar a Recursos Humanos' ;
      echo '<br><a href="arma_evalua2.html">Volver a la Evaluación</a>' ;

      //$miRespuestas = substr( $miRespuestas , 0, 80 ) ;
      echo "<br><br>Codificación Respuestas: $miRespuestas" ;
      die() ;
    }
    if ( $estado == 3 ){ //llamado desde edita_organigrama.html, para insertar datos en datos/$nom.dat 
      //echo '<a href="index2.html">Inicio IberoEvaluator</a><br>' ;
      
      echo '<br><a href="edita_organigrama2.html">Volver al Organigrama</a><br>' ;
      $nomArch = htmlspecialchars( $_POST['php_nombre'] ) ;
      $textArch = $_POST['php_prueba'] ;
      $myfile = fopen( "datos/org_$nomArch.dat" , "w" ) or die("Unable to open file!") ;
      fwrite( $myfile , $textArch ) ;
      fclose($myfile) ;

      //Ahora voy a crear el JS de una vez a ver que tal
      $textJS = '$miTexto = \'' . $textArch . '\' ; ' ;
      echo "<br>$textJS" ;
      $textJS .= ' 
      organigrama.reinicia() ;
      organigrama.myName = "organigrama" ;
      organigrama.unserialize( $miTexto ) ;
      pintaOrganigramaPrimero( organigrama , "padre" ,"Organigrama" ) ;
      //document.getElementById( "salida2" ).innerHTML = $previoTexto ;
      document.getElementById( "salida" ).innerHTML = "" ;' ;
      echo "<br>$textJS" ;

      $archtemp = "datos/bd_organigrama.js" ;
      $handle = fopen($archtemp, "w" ) ;
      fwrite($handle, $textJS) ;
      fclose($handle) ;

      echo '<br><br>Se ha guardado el organigrama en el servidor.' ;
      
    }      
  }


?>