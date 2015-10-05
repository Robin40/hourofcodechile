<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <title>Has completado la Hora del Código</title>
  <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
  <script src="js/jquery.validate.min.js" type="text/javascript"></script>
  <script>
  $(function() {
    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    $("body").css("background-color", getRandomColor());
    $("#ahora").css("background-color", getRandomColor());
    $("#peticion").css("background-color", getRandomColor());
    
    success = '<span id="success1" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span><span id="inputSuccess2Status" class="sr-only">(success)</span>';
    error = '<span id="error1" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span><span id="inputError2Status" class="sr-only">(error)</span>';

    $("#nombre").on('input', function(e) {
      var value = $.trim($("#nombre").val()).length;
      if(value == 0) {
        $("#success1").remove();
        $("#error1").remove();
        $("#inputError2Status").remove();
        $("#inputSuccess2Status").remove();
        $("#nombreDiv")
          .removeClass("has-success")
          .removeClass("has-error");
      } else if($("#success1").length == 0) {
        $("#error1").remove();
        $("#inputError2Status").remove();
        $("#nombreDiv")
          .removeClass("has-error")
          .addClass("has-success")
          .append(success);
      }
    });
    
    $("#form-diploma").submit(function(e) {
      var value = $.trim($("#nombre").val()).length;
      if(value == 0) {
        $("#success1").remove();
        $("#inputSuccess2Status").remove();
        
        $("#nombreDiv")
          .removeClass("has-success")
          .addClass("has-error")
          .append(error);
        e.preventDefault();
      }
     });
   });
</script>

  <link rel="stylesheet"
        href="bootstrap-3.3.5-dist/css/bootstrap.min.css">
  <style>
    body { color: white; background-color: #00ca9b }
    h1, h2, h3, h4, h5 { text-shadow: 2px 2px gray; }
    p { text-shadow: 1px 1px gray; font-size: 20px }
    #ahora, #peticion { height: 250px; border-radius: 5px;}
    .pt { padding-top: 30px }
    .container-fluid { padding-bottom: 30px; }
  </style>
  </head> 
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 text-center" style="padding-top: 20px;">
          <img src="media/hoc-logo-medium.png" width="120" />
          <h1>&iexcl; Felicitaciones !</h1>
  	  <p>&iexcl;Has completado una Hora del C&oacute;digo!</p>

          <!-- Te contamos un secreto, hay niveles bonus escondidos en -->
          <!-- el juego, para eso, solo debes avanzar al nivel 21 :-). ¡Suerte! -->

          <div class="col-xs-12" style="padding-top: 20px">
            <img src="media/diploma.png" width="150" />
          </div>
          
          <div class="col-xs-12" style="padding-top: 20px;
                                        padding-bottom: 30px;">
            <p>Obt&eacute;n tu diploma</p>
          
            <form target="_blank" class="form-inline" id="form-diploma" method="post" action="crear_diploma.php">
              <div class="form-group has-feedback" id="nombreDiv">
                <input type="text" class="form-control" id="nombre" name="nombre"
                       aria-describedby="inputSuccess2Status"
                       placeholder="Ingresa tu nombre">
              </div>
              <button id="submit" type="submit" class="btn btn-primary">&iexcl;Crear Diploma!</button>
            </form>
          </div>


          <div class="col-xs-3"></div>
          <div id="ahora" class="col-xs-3 pt" style="margin-right: 5px">
            <a class="btn btn-warning btn-lg" href="http://c-100.cl/recursos/"
               target="_blank">¿Qu&eacute; pasa ahora?</a>
            <p style="padding-top: 10px">¡Sigue aprendiendo o ense&ntilde;ando con estos recursos!</p>
          </div>
          <div id="peticion" class="col-xs-3 pt" style="margin-left: 5px">
            <a class="btn btn-success btn-lg" href="https://www.change.org/p/ministerio-de-educación-de-chile-quiero-que-todos-los-estudiantes-de-chile-puedan-aprendan-programación-computacional"
               target="_blank">Firma nuestra petición</a>
            <p style="padding-top: 10px">¡Para ense&ntilde;ar Programaci&oacute;n Computacional
            en todas las escuelas de Chile!</p>
          </div>
          <div class="col-xs-3"></div>
        </div>
      </div>
    </div>

    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67801102-2', 'auto');
  ga('send', 'pageview');

</script>
  </body>
</html>
