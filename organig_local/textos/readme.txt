20210626
    Le metí un archivo primitivo para controlar el logueo de usuario. Está en log_login.php y ya con este archivo se tiene un primer pequeño control para no acceder al nuevo enlace de totales del organigrama. Está con sguridad muy básica (si se escribe directamente index_3.php se llega al código "privado") que no sirve mucho, pero que es la que habría que propagar en los demás archivos para lograr navegación con usuario

20210625
    Logré que funcionara OK totales_organigrama.html, el problema que tuve inicialmente es que los valores del objeto organigrama estaban todos en texto! toco hcaerles un CAST
    
    Logré que se genere una funcionalidad capaz de generar un listado en el formato que permite a outlook crear una serie de correos automatizados que le reparta la clave a todo el mundo
        me enrede un poco buscando donde era que se armaban los listado de evaluación para finalmente descubrir que estaban en edita_organigrama2.hml como uno de los botones al final
    
20210306
    volver a poner funcional el aplicativo
    recuerdo que el año pasado hice un cambio para que dejara de estar visible públicamente
    noto que hay una versión de arma_evlua2.html que está modificada para no dejar hacer pruebas
    parece que cambie http://52.44.24.192/ibero/datos/bd_organigrama.js por una versión simplificada entonces voy a reemplazar ese archivo por el que está en el local via FTP
        result: funcionó
    también noté que otros links están funcionales como los de los exámenes entonces los voy a desactivar:
        bd_arrlistas.js: comenté la JSON largo y descomenté el de la cadena vacía


20200530: Vamos a migrar el ambiente de prueba a producción ahora si
    Borrar, copiar y pegar archivos
        La carpeta de producción no tiene datos relevantes debido a que el paso a producción pasado resulto corrupto porque uno de los scripts de pruebas estaba fallando
        Por el motivo anterior no se hará backup de ambiente de producción ni de los datos de producción
        Se entra por https://aws.amazon.com/es/console/ y se arreglan los permisos de la carpeta ibero/datos/ (que se habían dañado por borrar la carpeta)
        Desagar por filezilla los archivos más actualizados de: ibero_prueba/datos/ a sophix_lite/ibero_prueba/datos/
        Se borra todo el contenido en sophix_lite/ibero
        Se copia todo el contenido en sophix_lite/ibero_prueba en sophix_lite/ibero
        Se copia sophix_lite/ibero-bkp20200528/encabezado.js a sophix_lite/ibero
        Se borra por filezila http://52.44.24.192/ibero/ (OJO no se borran las carpetas)
            Se borra todo el contenido en /ibero/datos
            Se borra todo el contenido en /ibero/css (y etc...)    
        Se carga por filezila: sophix_lite/ibero a http://52.44.24.192/ibero/
        Se entra por https://aws.amazon.com/es/console/ y se arrglan los permisos de la carpeta ibero/datos/ (que se habían dañado por borrar la carpeta)
    Pruebas básicas de funcionalidades
        Se compara edita_organigrama2.html entre ibero e ibero_prueba (iguales!OK)
        Probar edita_organigrama2.html para validar que guarde en servidor OK
        Probar arma_evalua2.html para validar que guarde
        Probar armar_respuetas.html para validar que operen todos los botones
    Monitoreo de respuestas realizadas
        ibero/arma_respuestas.html:
            click: JS New Resp Servidor (php)   esperar...
            click: REINICIO Nuevas Resp (php)
            click: RECUPERAR Resp Servidor
            click: INTEGRAR Nuevas Resp
            click: ARCHIVAR Resp Servidor texto(php) nombre: pp
            click: JS Resp Servidor (php)    esperar...
            acá se debe verificar que efectivamente hayan quedado las nuevas respuestas integradas:
            click: RECUPERAR Resp Servidor: verificar que estén las nuevas Respuestas
            ahora reinicializar los archivos de las nuevas respuestas
            click: JS New Resp Servidor (php) (verificar si no entraron nuevas respuestas mientras)
            verificar en filezilla que los dos archivos minipp.dat y bd_otrasResp.js estén peques



20200528: Vamos a migrar el ambiente de prueba a producción
    Faltó hacer un download del http://52.44.24.192/ibero/ especialmente la carpeta de datos: http://52.44.24.192/ibero/datos/ que pueden estar actualizados en servidor y no en local
    Hacer backup del ambiente de producción
        Se crea una copia en sopix_lite asi: sophix_lite/ibero a sophix_lite/ibero-bkp20200528
        
        Se borra todo el contenido en sophix_lite/ibero
        por filezilla se verifica que archivos están más actualizados en servidor http://52.44.24.192/ibero_prueba/ que en local sophix_lite/ibero_prueba y se procura dejar las carpetas emparejadas
        se copia todo el contenido en sophix_lite/ibero_prueba en sophix_lite/ibero
          OJO: acá se requiere un análisis adicional porque es posible que los documentos en datos/ y en general todos los documentos que sirvan para guardar "datos" del servidor en iber_prueba sean distintos a los que están en local sophix_lite/ibero_prueba
        
        se copia sophix_lite/ibero-bkp20200528/encabezado.js en sophix_lite/ibero
        se borra por filezila http://52.44.24.192/ibero/ (OJO no se borran las carpetas)
            Se borra todo el contenido en /ibero/datos
            Se borra todo el contenido en /ibero/css (y etc...)
        se carga por filezila: sophix_lite/ibero a http://52.44.24.192/ibero/
            OJO: esta subida es tan masiva dado que los datos de producción realmente no son relevantes puesto que el último trabajo "real" se venía haciendo en /ibero_prueba/
            al comparar la vista de edita_organigrama2.html entre prueba y producción, deberían ser iguales (excepcional porque lo "real" estaba en pruebas) 
            tema curioso edita_organigrama2.html presenta distintos organigramas en /ibero/ y en /ibero_prueba/
            Solución: puede ser que no descargue los archivos del servidor a local de datos en ambiente de pruebas, entonces por filezilla descargue ibero_prueba/datos a local y de ahí lo paso a /ibero/ y por filezila va para arriba
        nuevamente comparación de edita_organigrama2.html
        parece que ahora si está OK
        Ahora toca redireccionar al equipo de gestión humana



20200527: Salida a producción Ibero fase 1
    http://52.44.24.192/ibero_prueba/prueba_organigrama.html: fue donde trabajó el equipo de RRHH, se carga el js remitido en edita_organigrama2.html (267 cargos)
    click: Generar listados de Evalución (6,6)
    quitar Evaluado: 162 y 18 (que estaban vacíos)
    Editar bd_arrlistas.js: insertar el resultado de edita_organigrama "Generar listados de Evaluación"
    Subir bd_arrlistas.js al servidor sophix_lite/ibero_prueba
    arma_evalua5.html:
        se valida que los quita evaluado estén bien, y además se evidencian algunos correos que están mal
    arma_respuestas.html:
        click: ARCHIVAR Resp Servidor texto(PHP), nombre:pp //sobreescribe pp.txt (2b)
        click: JS Resp Servidor (php) //sobreescribe bd_respuestas.js (25b)
        click: RECUPERAR Resp Servidor 
            este click es para verificar que aparezca totalmente vacío el arreglo, si no sucede verificar cache y archivos del servidor
        click: REINICIO Nuevas Resp(php) //sobreescribe minipp.dat (0kb)
        click: JS New Resp Servidor(php) //sobreescribe bd_otrasResp.js (22b)
        click: INTEGRAR Nuevas Resp
            este click es pare verificar que esté en 0s

20200524:
    prueba_organigrama.html: se renombró a prueba_organigrama_back.html(este archivo hacía lo mismo que editaorganigrama.html sólo que usaba el archivo de bd en .js que estaba en el servidor)
    Y adicionalmente se asignó a prueba_organigrama.html una copia gemela de edita_organigrama2.html que también trabaja sobre el archivo de organigrama guardado en js pero adicionalmente usa una salida formateada bonito con css
    Esto se hizo así para no tener que enviar un nuevo link al equipo de rrhh.

20200516: Intento paso a producción
    primer inconveniente: no es fácil identificar con que organigrama está trabajando PG porque:
        hay unos que están en texto en organigrama_RRHH.txt
        hay otros que estan guardados en el "cache" de la pagina
        al ojo conjeturo que es la versión "prueba3"
        la solución está en identificar claramente la fuente en el comentario de bd_arrlistas.js
    Creación del ambiente de pruebas en servidor
        se crea htdocs/ibero_prueba en servidor con filezila
        se copian todos los archivos de sophix_lite/ibero en sophix_lite/ibero_prueba
        se edita encabezado.js en sophix_lite/ibero_prueba
        se actualizan los archivos editados en organigrama/ a sophix_lite/ibero_prueba
        se sube con filzila sophix_lite/ibero_prueba a servidor
        https://aws.amazon.com/es/console/
        service: Lightsail
        LAMP_PHP_7-1_SOPHIX
        Connect using SSH
        linux:cd htdocs/ibero_prueba
        chmod -R 766 datos //con recursividad
        chmod 777 datos //solo para el directorio
    Montar la nueva evaluación que se va a realizar en IBERO real
        se toma el archivo de recursos humanos y se monta en el edita_organigrama.html
        se arregla el nombre del rector
        click: Archivar
            se le da archivar, nombre:real1
        click: ARCHIVAR Organigrama Servidor
            Se ensaya opción de ARCHIVAR organigrama servidor, nombre r1
        Se descarga el archivo datos/bd_organigrama.js y se pasa al ambiente de pruebas organigrama/ (este archivo podrá servir para despues)
        click: Generar listado de Evaluación
            5 cargos y 5 fuera del equipo
        Editar bd_arrlistas.js: insertar el resultado de edita_organigrama "Generar listados de Evaluación"
        Subir bd_arrlistas.js al servidor sophix_lite/ibero_prueba

        Ir a arma_respuestas.html: (con la memoria vacía)
        click: ARCHIVAR Resp Servidor (PHP), nombre:pp //sobreescribe pp.txt (0kb)
        click: JS Resp Servidor (php) //sobreescribe bd_respuestas.js (25 bytes)
        click: RECUPERAR Resp Servidor 
            este click es para verificar que aparezca totalmente vacío el arreglo, si no sucede verificar cache y archivos del servidor
        click: REINICIO Nuevas Resp(php) //sobreescribe minipp.dat (0kb)
        click: JS New Resp Servidor(php) //sobreescribe bd_otrasResp.js 
        click: INTEGRAR Nuevas Resp
            este click es pare verificar que esté en 0s
        
        LISTO!!! al aire
        Usuarios para contestar:
            http://52.44.24.192/ibero_prueba/arma_evalua2.html        
        RRHH para asignan claves:
            http://52.44.24.192/ibero_prueba/arma_evalua3.html


20200505: operativo para reinicializar y aceptar las respuestas de la prueba PG
    INICIO - es decir REINICIALIZACION:
        Borrar pp.txt ¿?    
        Borrar minipp.dat  // click: REINICIO Nuevas Resp(php)

    PROCESO 1
    renombrar archivo datos/pp.txt
    arma_respuestas.html: con la memoria vacía:
    click: ARCHIVAR Resp Servidor (PHP) //imagino que reescribe pp.txt a "nada" (2 bytes)
    click: JS Resp Servidor (php) //imagino que sobreescribe bd_respuestas.js (25 bytes)
        NO -> inserto un JSON aleatorio via botón "Cargar" (Sandra Liliana Moreno Rojas)
        NO -> click: ARCHIVAR Resp Servidor (PHP) //imagino que sobreescribe pp.txt (2kb)
        NO -> click: JS Resp Servidor (php) //imagino que sobreescribe bd_respuestas.js (1kb)
    click: RECUPERAR Resp Servidor //aparece evaluación de SLMR (ok! OJO hay que limpliar cache)
        OJO NO -> click: JS New Resp Servidor(php) //imagino que sobreescribe bd_otrasResp.js (23kb) (creo que fallé este paso debi borrar bd_otrasResp.js) OJO
        DADO el error anterior entonces:

        NO -> renombrar datos/bd_otrasResp.js (NO -> 23kb)
    click: JS New Resp Servidor(php) //imagino que sobreescribe bd_otrasResp.js (22kb)
        OJO: volvió a generar el mismo archivo (14 evaluadores), el error pudo ser no reiniciar minipp.dat cuando le dije a PG!! (y mirando el resultado en realidad son 9 hmmm)
    click: INTEGRAR Nuevas Resp
    click: ARCHIVAR Resp Servidor (PHP) //imagino que sobreescribe pp.txt (35kb)
    click: JS Resp Servidor (php) //imagino que sobreescribe bd_respuestas.js (19kb)
    click: RECUPERAR Resp Servidor //voila! aparecen 10 evaluadores hmmm
    click: REINICIO Nuevas Resp(php) //¿puede ser?
    
    PROCESO 2 ya recurrente mientras van diligenciando
    click: RECUPERAR Resp Servidor (ok! OJO hay que limpliar cache)
    click: JS New Resp Servidor(php) //imagino que sobreescribe bd_otrasResp.js (22kb)
    click: INTEGRAR Nuevas Resp


Resumen operativo
    arbol.html: crea un organigrama artificial e invoca código para generar el arreglo de todos los evaluadores y evaludos del organigrama, el arreglo lo transforma en un JSON que se muestra al final
    edita_organigrama2.html:
        edición de organigrama con css, y además usando el archivo de bd del servidor bd_organigrama.js 
    edita_organigrama.html: 
        edición de organigrama, tiene la opción de "Generar listados de Evaluación" con la cual se crea el JSON que se puede incorporar a la siguiente fase
        Botón Recuperar: si se deja en blanco, activa el cuadro para ingresar la estructura desde texto JSON
    bd_arrlistas.js: en este archivo se debe insertar el resultado de edita_organigrama cuando se le da la opcion "Generar listados de Evaluación"
    arma_evalua3.html: utiliza el JSON que se descifra en el archivo bd_arrlistas.js para crear el oEvaluador y generar el listado de usuarios y claves de acceso
    arma_evalua2.html: 
        Utiliza el JSON que se descifra en el archivo bd_arrlistas.js para crear una estructura de evaluación y así mismo muestra toda la funcionalidad de usuarios final, las credenciales de acceso están en arma_evalua3.html
        Adicionalmente se le activó la opción para que al final del examen guarde en servidor las respuestas en datos/minipp.dat
        Y al final de cada examen de evaluador generar un JSON que se debía guardar por parte del estudiante, y ser enviado a RRHH para insertarlo en arma_evalua4.html
    arma_evalua4.html: 
        Utiliza el JSON que se descifra en el archivo bd_arrlistas.js para crear el oEvaluador, recible los JSON con las respuestas de los exámenes que se han generado en arma_evalua2.html para poblar arrRespuestas1 global y mostrar los resultados (botón Cargar)
        Tiene el nuevo botón "ARCHIVAR Respuestas Servidor" que crea el archivo en el servidor "datos/" a traves de js_canal.php. Por cosas de la vida el archivo definitivo se llama actualmente datos/pp.txt (es decir para fines de seguir el nombre a guardar es "pp")
    creaBD_respuestasJS.php:
        Lee datos/pp.txt y con base en esta información sobreescribe el archivo en js: datos/bd_respuestas.js que tiene la infomración equivalente de la cadena stringfy de arrRespuestas1, y queda asingado a la variable en js: glTextoArrResp1, como el archivo "datos/bd_respuestas.js" es parte de los scrips de arma_evalua4.html; entonces a partir de ahí se puede reconstruir las respuestas, que es lo que hace oEvalDsmp.recuperaServerJSON
    creaBD_otraRespJS.php:
        Lee datos/minipp.dat y con base en esta información sobreescribe el archivo en js: datos/bd_OtrasResp.js que tiene la infomración de un arreglo de stringyfy el cual se asigna a la variable global arrGlOtrasResp
    arma_respuestas.html
        Se utiliza una vez existen los dos archivos anteriores datos/bd_OtrasResp.js y datos/bd_respuestas.js
        click: RECUPERAR Resp Servidor: lee respuestas de datos/bd_respuestas.js
        click: JS New Resp Servidor(php): lee datos/minipp.dat y crea bd_otrasResp.js
        click: INTEGRAR Nuevas Resp: lee datos de bd_otrasResp.js y las integra en respuestas de la memoria
        click: ARCHIVAR Resp Servidor texto (PHP): pide un nombre de archivo para generar un .txt (po algun motivo siento que el nombre del archivo debe ser datos/pp.txt)
        click: JS Resp Servidor (PHP): lee a datos/pp.txt y crea datos/bd_respuestas.js
        click: REINICIO Nuevas Resp (php): reinicia el archivo datos/minipp.dat



    arma_evalua.html: utilizaba el arreglo creado en arbol.html para crear oEvaluador, posiblemente no funciona por algunos cambios que se hicieron en las funciones de de arma_evalua.js (tenía el inconveniente de que dependía de la creacion del árbol y los evaluados cada vez, que al ser un proceso aleatorio, podía cambiar al reiniciar la página)
    evalua_dsmpn.html: implementa la evaluación de desempeño, con base en un oEvaluador "prototipo" que no se basa en un organigrama, asume que le mandan en un JSON el (uno) evaluador y la lista de evaluados y el procesa la info para llegar a los resultados que salen en un JSONpara ser copiados
 


20200502: Voy a tratar de lograr arreglar los permisos de daemon (apache) en lightsail
    https://aws.amazon.com/es/console/
    Primaysegmindos de aws amazon
    Connect using ssh
    linux:ls -l (muestra los permisos)
    cree un directorio usando FILEZILA /datos
    linux:chmod 666 datos
    linux:chmod -R 666 datos (no funcionó)
    linux:chmod -R 777 datos (a ver)
    linux:chmod -R 666 apto3.dat (dentro de datos)
    después de lo anterior parece que finalmente PHP lo logra ( queda con usuario deamon y permisos 644 )
        linux:ls -l //muestra los permisos
        linux:cd - //baja al directorio raiz
        linux:cd .. //baja un directorio
        linux:ls -l //muestra los permisos
        cree un directorio usando FILEZILA /datos


    https://docs.bitnami.com/aws/how-to/troubleshoot-permission-issues/
        Cloud Images and Virtual Machines:    
        Have a system user for SSH/SFTP access: bitnami
        Have a system user and group for each daemonized process. These users will have extremely limited privileges. The reason for having multiple system users is to minimize the impact if a process’ security is compromised. The following are the most common processes:
            Apache: daemon
            MySQL: mysql
            PostrgreSQL: postgresql
            Tomcat: tomcat


20200426: Instalación del ambiente de producción web
    Instalar node.js: https://nodejs.org/en/   (en mi caso parece que yas estaba instalado (posiblemente por "visual studio code"))
    Conocer mi propia IP: http://ip4.me/   ( 181.63.106.106 )
    ACA paré porque noté que podía enredarme configurando el router de la casa, y me dicidí a buscar un alojamiento en laWEB, y para ser moderno retomé AWS
    https://console.aws.amazon.com
    Endpoint : http://evaluator001.s3-website.us-east-2.amazonaws.com

    https://www.youtube.com/watch?v=z9bSwsvJFtg: explicación en Ingles Indio puro de aws lightsail
    lightsail: StaticIP: 52.44.24.192
    passw: 4jKv4Zb2Nzs0
    Ahora instalar Filezilla Client
    52.44.24.192/ibero/index2.html


20200426: ensayo de mystical el implmentador de aplicativos aws "rápido"
    Ahora el ensayo de mystical misfits de aws
    Así se llama el bucket: ensayo.rma.misfits
    aws s3 cp ~/environment/aws-modern-application-workshop/module-1/web/index.html s3://ensayo.rma.misfits/index.html 
    http://ensayo.rma.misfits.s3-website.us-east-2.amazonaws.com
    aws cloudformation create-stack --stack-name MythicalMysfitsCoreStack --capabilities CAPABILITY_NAMED_IAM --template-body file://~/environment/aws-modern-application-workshop/module-2/cfn/core.yml
    aws cloudformation describe-stacks --stack-name MythicalMysfitsCoreStack > ~/environment/cloudformation-core-output.json
    docker build . -t 791261945591.dkr.ecr.us-east-2.amazonaws.com/mythicalmysfits/service:latest (acá se presento error con algo de la descarga de python)