<div class="modalWindowMessages">
    	<div id="welcomeModal">
			<div class="welcome-title">Nivel <?= $level; ?></div>
			<div class="welcome-content">
				<div class="welcome-image"><img src="" /></div>
				<div class="welcome-message"></div>
				<div class="completed-buttons"><button class="welcome-button">Cerrar</button></div>
			</div>
		</div>
      <div id="jsModal">jsmodal</div>
      <div id="errorModal">&iexcl;Tienes bloques sueltos! Aseg&uacute;rate de que todos los bloques que uses est&aacute;n conectados al bloque "al inicio".</div>
      <div id="codigoVacioModal">No has puesto bloques... Arrastra bloques en "Acciones disponibles" hasta el bloque "Al inicio" para que estos se ejecuten.</div>
      <div id="completedModal"><b>
	  <div class="completedTitle">&iexcl;Has completado el nivel!</div>
	  <div>Completaste la tarea que se te ha pedido, &iexcl;Felicitaciones!</div></b>
	<br />
	<div class="completedExtra">Este nivel pudo ser completado utilizando solamente <span class="blockNumber"></span> bloques. Puedes volver a intentarlo.</div>
	
	<div class="completed-buttons">
	  <button class="completed-repeat-btn">Repetir nivel</button>
	  <button class="completed-next-btn">Siguiente nivel</button>
	</div>
      </div>
      <div id="incompletedModal"><b>
	  <div class="completedTitle">&iexcl;A&uacute;n no has completado este nivel!</div></b>
	<div>Intenta utilizar tus bloques de manera diferente o agregar m&aacute;s para alcanzar los objetivos.</div>
	<br />
	<div class="completed-buttons">
	  <button class="completed-repeat-btn">Reintentar</button>
	  <button class="completed-help-btn">Necesito ayuda</button>
	</div>
      </div>
      <div id="failedModal"><b>
	  <div class="completedTitle">&iexcl;Has fallado!</div></b>
	<div>Debes utilizar el bloque <b><span class="incompleted-block">bloque_x</span></b> para completar este nivel</div>
	<br />
	
	<div class="completed-buttons">
	  <button class="completed-repeat-btn">Reintentar</button>
	  <button class="completed-help-btn">Necesito ayuda</button>
	</div>
      </div>
    </div>