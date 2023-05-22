/********************************************
 datos_nodo.js 
 20200420
 Implementa el nodo de datos que se guardan en el árbol, originalmente estaba definido en arbol.js pero lo saco a un archivo aparte para darle mayor modularidad al tema, esto implica un <script> adicional en cada código html
 *******************************************/


function losDatos(  //cualquier cambio acá se debe replicar en Arbol.uniserialize( texto ) 
    nomCargo , 
    nivCargo , 
    empresa , 
    ocupado , 
    grupo , 
    tipoCargo , 
    centroCosto , 
    dependencia , 
    codigo , 
    ident , 
    nombre , 
    apellido , 
    correo , 
    sexo , 
    fechaNacim , 
    formaContrato , 
    flexibilizado , 
    dedicacion , 
    fechaIngreso , 
    sueldoBase , 
    sueldoFlex , 
    bono , 
    comision , 
    sueldoTotal )
    {

    this.nomCargo = nomCargo ;  
    this.nivCargo = nivCargo ;
    this.dependencia = dependencia ;
    this.empresa = empresa , 
    this.ocupado = ocupado ;
    //grupo , 
    //tipoCargo , 
    //centroCosto , dependencia , codigo , ident , 
    this.nombre = nombre ;
    //apellido , 
    this.correo = correo ;
    // , sexo , fechaNacim , formaContrato , flexibilizado , dedicacion , fechaIngreso , sueldoBase , sueldoFlex , bono , comision , 
    this.sueldoTotal = sueldoTotal ;

    this.editar = function( $target ){
        for ( $i in $target ){
            if (( typeof $target[$i] != "function" ) && ( typeof $target[$i] != "object" )){
                this[$i] = $target[$i] ;
            }    
        }


        /* 
        this.ocupado = $obj.ocupado ;
        this.nomCargo = $obj.nomCargo ;
        this.nivCargo = $obj.nivCargo ;
        this.dependencia = $obj.dependencia ;
        this.empresa = $obj.empresa ;        
        this.nombre = $obj.nombre ;
        this.correo = $obj.correo ;
        this.sueldoTotal = $obj.sueldoTotal ; 
        */
    }
}

var tempDatos = { 
    nomCargo:"cargo" , 
    nivCargo:"nivel cargo" ,
    empresa:"empresa" ,
    ocupado:false ,        
    grupo:"grupo" ,
    tipoCargo:"tipoCargo" ,
    centroCosto:"centroCosto" ,
    dependencia:"dependencia" ,
    codigo:"codigo" ,
    ident:"1.020.020.020" ,
    nombre:"nombre" ,
    apellido:"apellido" ,
    correo:"correo" ,
    sexo:"sexo" ,
    fechaNacim:"fechaNacim" ,
    formaContrato:"formaContrato" ,
    flexibilizado:false ,
    dedicacion:"dedicacion" ,
    fechaIngreso: "fechaIngreso" ,        
    sueldoBase:0 ,
    sueldoFlex:0 ,
    bono:0 ,
    comision:0 ,
    sueldoTotal:0
} 