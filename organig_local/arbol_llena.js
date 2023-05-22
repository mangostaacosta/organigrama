function llenaOrg1(){
    var jerarquia ;   

    if ( typeof jerarquia == 'undefined' ){
        var cargo = "inicial" ;
        var ocup = true ;
        var niv = "auxiliar" ;
        var empresa = "Ibero"
        var nombre = "inicial" ;
        var email = "mail_@gm.com" ;
        var sueldo = 1000000 ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        var jerarquia = new Arbol(elem) ;
        
        
        cargo = "rectoría" ;
        nombre = "rectoría" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0." , elem ) ;
        
        cargo = "secretaria general" ;
        nombre = "secretaria general" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Sicologo medio universitario" ;
        nombre = "Sicologo medio universitario" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor comercial DISOA" ;
        nombre = "Asesor comercial DISOA" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Coordinador admisiones y registro" ;
        nombre = "Coordinador admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Coordinador registro y control" ;
        nombre = "Coordinador registro y control" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Director de programa Contaduria" ;
        nombre = "Director de programa Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Vicerrectoría de estudiantes y egresados" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Vicerrectoría académica" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Vicerrectoría servicio, tecnología e innovación" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Decanatura de educación" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Decanatura de humanas y sociales" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Decanatura de salud" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Decanatura de empresariales" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Decanatura de ingeniería" ;
        nombre = cargo ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor lider atencion al estudiante" ;
        nombre = "Asesor lider atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio DISOA" ;
        nombre = "Asesor de servicio DISOA" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Coordinador de Bienestar Medio Universitario" ;
        nombre = "Coordinador de Bienestar Medio Universitario" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Coordinador de servicio Atención al estudiante" ;
        nombre = "Coordinador de servicio Atención al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio Atencion al estudiante" ;
        nombre = "Asesor de servicio Atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Analista de CRM estudiantes y atencion integral" ;
        nombre = "Analista de CRM estudiantes y atencion integral" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio CEI estudiantes y atencion integral" ;
        nombre = "Asesor de servicio CEI estudiantes y atencion integral" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Directora de innovacion Rectoria" ;
        nombre = "Directora de innovacion Rectoria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Referencista Biblioteca" ;
        nombre = "Referencista Biblioteca" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar administrativo vicerrectoria academica" ;
        nombre = "Auxiliar administrativo vicerrectoria academica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asistente administrativa y financiera" ;
        nombre = "Asistente administrativa y financiera" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor comercial DISOA" ;
        nombre = "Asesor comercial DISOA" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Abogado Secretaria general" ;
        nombre = "Abogado Secretaria general" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera Logistica" ;
        nombre = "Docente de carrera Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Logistica" ;
        nombre = "Docente Logistica" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera administracion y finanzas" ;
        nombre = "Docente de carrera administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera administracion y finanzas" ;
        nombre = "Docente de carrera administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera administracion y finanzas" ;
        nombre = "Docente de carrera administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera administracion y finanzas" ;
        nombre = "Docente de carrera administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente administracion y finanzas" ;
        nombre = "Docente administracion y finanzas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Analista admisiones y registro" ;
        nombre = "Analista admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asistente admisiones y registro" ;
        nombre = "Asistente admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asistente de registro y control admisiones y registro" ;
        nombre = "Asistente de registro y control admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar admisiones y registro" ;
        nombre = "Auxiliar admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar admisiones y registro" ;
        nombre = "Auxiliar admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar de registro admisiones y registro" ;
        nombre = "Auxiliar de registro admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar de registro admisiones y registro" ;
        nombre = "Auxiliar de registro admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar de registro admisiones y registro" ;
        nombre = "Auxiliar de registro admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar de registro admisiones y registro" ;
        nombre = "Auxiliar de registro admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar de registro y control admisiones y registro" ;
        nombre = "Auxiliar de registro y control admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar de registro y control admisiones y registro" ;
        nombre = "Auxiliar de registro y control admisiones y registro" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asistente archivo" ;
        nombre = "Asistente archivo" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio atencion al estudiante" ;
        nombre = "Asesor de servicio atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio CEI atencion al estudiante" ;
        nombre = "Asesor de servicio CEI atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor de servicio CEI atencion al estudiante" ;
        nombre = "Asesor de servicio CEI atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor desarrollo regional virtual atencion al estudiante" ;
        nombre = "Asesor desarrollo regional virtual atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asesor lider atencion al estudiante" ;
        nombre = "Asesor lider atencion al estudiante" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Analista autoevaluacion" ;
        nombre = "Analista autoevaluacion" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Director autoevaluacion" ;
        nombre = "Director autoevaluacion" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar bienestar universitario virtual" ;
        nombre = "Auxiliar bienestar universitario virtual" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Coordinador bienestar universitario" ;
        nombre = "Coordinador bienestar universitario" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Director comercial y de servicio regional CEIBucaramanga" ;
        nombre = "Director comercial y de servicio regional CEIBucaramanga" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Jefe zonal CEIKennedy" ;
        nombre = "Jefe zonal CEIKennedy" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Ciencias Basicas" ;
        nombre = "Docente Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera Ciencias Basicas" ;
        nombre = "Docente de carrera Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera Ciencias Basicas" ;
        nombre = "Docente de carrera Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera Ciencias Basicas" ;
        nombre = "Docente de carrera Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente de carrera Ciencias Basicas" ;
        nombre = "Docente de carrera Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente virtual Ciencias Basicas" ;
        nombre = "Docente virtual Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente virtual Ciencias Basicas" ;
        nombre = "Docente virtual Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente virtual Ciencias Basicas" ;
        nombre = "Docente virtual Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente virtual Ciencias Basicas" ;
        nombre = "Docente virtual Ciencias Basicas" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria" ;
        nombre = "Docente Contaduria" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria Virtual" ;
        nombre = "Docente Contaduria Virtual" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria Virtual" ;
        nombre = "Docente Contaduria Virtual" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Docente Contaduria Virtual" ;
        nombre = "Docente Contaduria Virtual" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Analista de sistemas de informacion coordinacion de registro y control" ;
        nombre = "Analista de sistemas de informacion coordinacion de registro y control" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Coordinador de registro y control acercamiento a la primera infancia" ;
        nombre = "Coordinador de registro y control acercamiento a la primera infancia" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Asistente de servicio al estudiante acercamiento a la primera infancia" ;
        nombre = "Asistente de servicio al estudiante acercamiento a la primera infancia" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar Direccion administrativa" ;
        nombre = "Auxiliar Direccion administrativa" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Auxiliar Direccion administrativa y financiera" ;
        nombre = "Auxiliar Direccion administrativa y financiera" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Director administrativo y financiero Direccion administrativa y financiera" ;
        nombre = "Director  administrativo y financiero Direccion administrativa y financiera" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Director de contabilidad Direccion administrativa y financiera" ;
        nombre = "Director de contabilidad Direccion administrativa y financiera" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;
        
        cargo = "Director de contabilidad Direccion administrativa y financiera" ;
        nombre = "Director de contabilidad Direccion administrativa y financiera" ;
        email = cargo.substr(0,5) + "mail@gm.com" ;
        var elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        jerarquia.insertaNodo( "0.0." , elem ) ;   
    }
    return jerarquia ;
}

function llenaOrg2( $n ){
    var aT = [] ;
    var index ;
    var sueldoTot = 0 ;
    var cargo ;
    var ocup = true ;
    var niv ;
    var empresa = "Ibero" ;
    
    for ( index = 0; index < $n ; index++) {
        cargo = "Cargo_" + index ;
        ocup = true ;
        niv = "auxiliar" ;
        empresa = "Ibero" ;
        nombre = " Nombre_" + index ;
        email = "mail_" + index + "@gm.com" ;
        sueldo = 4000000 - ( 100000 * index * 0.5 ) ;
        sueldoTot = sueldoTot + sueldo ;
        elem = new losDatos(cargo,niv,empresa,ocup,0,0,0,0,0,0,nombre,0,email,0,0,0,0,0,0,0,0,0,0,sueldo) ;
        aT[index] = elem ;
    }
    //console.log( aT[4].sueldoTotal ) ;
    console.log("el total de sueldos asignado es:" + sueldoTot +"<br>") ;
    
    var organigrama = new Arbol( aT[0] ) ;
    organigrama.myName = "organigrama" ;
    aT.shift() ;
    
    for ( $nodo of aT ){
        organigrama.insertaNodo( "0." , $nodo ) ;
    }
    return organigrama ;
}
 
var organigrama = {} ;
organigrama.myName = "organigrama" ;



