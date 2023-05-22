<?php
  
  require_once 'log_config.php' ;
  //echo "hola2" ;

  if ( !isset($_POST['username'], $_POST['password']) ) {
    // Could not get the data that should have been sent.
    exit('Please fill both the username and password fields!');
  }else{
    $user = trim($_POST['username']) ;
    $pass = trim($_POST['password']) ;

    $bd = new BD() ;

    $ok = $bd->query_user( $user , $pass ) ;

    if ( $ok ){
      session_start();
                            
      // Store data in session variables
      $_SESSION["loggedin"] = true ;
      $_SESSION["id"] = 1 ;
      $_SESSION["username"] = "Mister Master" ;                            
      
      // Redirect user to welcome page
      //header("location: welcome.php") ;
      manda_html("index_3.html") ;
    }else{
      echo '<a href="log_login.php">Inicio IberoEvaluator</a><br>' ;
      //header("location:log_login.php?msj=error") ;
    }
  }

   


?>
  