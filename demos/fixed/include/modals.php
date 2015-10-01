<!--Welcome-->
<div id="welcomeModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center">Nivel <?=$level;?></h3>
      </div>
      <div class="modal-body" style="height: 150px">
        <div class="col-xs-4">
          <div class="welcome-image"><img src="" style="width:100%"/></div>
        </div>
        <div class="col-xs-8">
          <p id="welcome-message">One fine body&hellip;</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar esta ventana</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!--Help-->
<div id="helpModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center">¿Necesitas ayuda?</h3>
      </div>
      <div class="modal-body">
        <p id="welcome-message">One fine body&hellip;</p>
        <div class="welcome-image"><img src="" /></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar esta ventana</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!--Muralla-->
<div id="murallaModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">¡Oh, no!</h3>
      </div>
      <div class="modal-body">
        <p>Has chocado con un obst&aacute;culo. Revisa bien tus pasos y gira cuando sea necesario.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger completed-repeat-btn">Reintentar</button>
        <button type="button" class="btn btn-warning completed-help-btn">Necesito ayuda</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!--forModal ?-->
<div id="emptyForErrorModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center">Nivel <?=$level;?></h3>
      </div>
      <div class="modal-body">
        <p id="welcome-message">One fine body&hellip;</p>
        <div class="welcome-image"><img src="" /></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger completed-repeat-btn">Reintentar</button>
        <button type="button" class="btn btn-warning completed-help-btn">Necesito ayuda</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- Bloques sueltos -->
<div id="errorModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center">¡Oh, no!</h3>
      </div>
      <div class="modal-body">
        <p>&iexcl;Tienes bloques sueltos! Aseg&uacute;rate de que todos los bloques que uses est&aacute;n conectados al bloque "al inicio".</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar esta ventana</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!-- JS -->
<div id="jsModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center">Código generado</h3>
      </div>
      <div class="modal-body">
        <p>
          <pre><code id="codigoJS" class="javascript"></code></pre>
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar esta ventana</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!-- Codigo vacio -->
<div id="codigoVacioModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title text-center">¡Oh, no!</h3>
      </div>
      <div class="modal-body">
        <p>No has puesto bloques... Arrastra bloques en "Acciones disponibles" hasta el bloque "al inicio" para que estos se ejecuten.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar esta ventana</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<!-- Nivel completado -->
<div id="completedModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">¡Has completado el nivel!</h3>
      </div>
      <div class="modal-body">
        <p>Completaste el nivel. ¡Felicidades!</p>
        <p class="completedExtra">Este nivel pudo ser completado utilizando solamente <span class="blockNumber"></span> bloques. Puedes volver a intentarlo.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success
        completed-next-btn">Siguiente Nivel &nbsp;<span class="glyphicon glyphicon-play"></span></button>
        <button type="button" class="btn btn-primary completed-repeat-btn">Repetir nivel</button>
        <button type="button" class="btn btn-info completed-code-btn">Ver código</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div id="incompletedModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">¡Aún no has completado este nivel!</h3>
      </div>
      <div class="modal-body">
        <p>Intenta utilizar tus bloques de manera diferente o agregar m&aacute;s para alcanzar los objetivos.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger completed-repeat-btn">Reintentar</button>
        <button type="button" class="btn btn-warning completed-help-btn">Necesito ayuda</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->



<!-- failed -->
<div id="failedModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">¡Has fallado!</h3>
      </div>
      <div class="modal-body">
        <p>Debes utilizar el bloque <b><span class="incompleted-block">bloque_x</span></b> para completar este nivel.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger completed-repeat-btn">Reintentar</button>
        <button type="button" class="btn btn-warning completed-help-btn">Necesito ayuda</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

