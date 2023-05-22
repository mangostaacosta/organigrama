<?php



  ini_set('display_errors', TRUE) ;
  error_reporting(E_ALL) ;

  function check_sesion(){
    session_start();  
    // Check if the user is logged in, if not then redirect him to login page
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
      header("location: log_login.php") ;
      exit;
    }
  }  

  Class BD{
    public $nomarchivo = "datos/bd_login.dat" ;

    function query_user( $user , $pass ){
      if ( ($user == 'raulmauricio') && ( $pass == "Evalua2021") ){
        return 1 ;
      }else{
        return 0 ;
      }
    }
  }

  function manda_html( $archtemp ){
    if (file_exists( $archtemp )){
      //echo "<br> si encontró el archivo $archtemp" ;
      $myfile = fopen( $archtemp , "r") or die("Unable to open file!");
      $myText = fread( $myfile , filesize( $archtemp ));
      fclose($myfile);
      echo $myText ;       
    }else{
      echo "<br>falló: $archtemp" ;
    }  
  }
 
?>