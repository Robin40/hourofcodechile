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
  </style>
  </head> 
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 text-center" style="padding-top: 20px;">
          <img src="media/hoc-logo-medium.png" />
          <h1>&iexcl; Felicitaciones !</h1>
  	  <p>&iexcl;Has superado el nivel 20 de la Hora del
  	    C&oacute;digo!</p>


          <!-- <p>Te contamos un secreto, hay niveles bonus escondidos en -->
          <!-- el juego, para eso, solo debes avanzar al nivel 21 :-). ¡Suerte!</p> -->
          
          <div class="col-xs-12" style="padding-top: 20px">
            <a class="btn btn-warning btn-lg" href="http://c-100.cl/recursos/"
               target="_blank">¿Qu&eacute; pasa despu&eacute;s de la Hora
              del C&oacute;digo?</a>
          </div>
            
          <div class="col-xs-12" style="padding-top: 20px;">
            <p>Obt&eacute;n tu diploma</p>
          
            <form class="form-inline" id="form-diploma" method="post" action="crear_diploma.php">
              <div class="form-group has-feedback" id="nombreDiv">
                <input type="text" class="form-control" id="nombre" name="nombre"
                       aria-describedby="inputSuccess2Status"
                       placeholder="Ingresa tu nombre">
              </div>

              <button id="submit" type="submit" class="btn btn-primary">&iexcl;Crear Diploma!</button>
            </form>
          </div>

          <div class="col-xs-12" style="padding-top: 20px">
            <img src="media/diploma.png" width="150" />
          </div>
        </div>
      </div>
    </div>
    
  </body>
</html>
