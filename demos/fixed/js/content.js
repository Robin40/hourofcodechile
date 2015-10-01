var completeStorage = 'hoc-stage';
var incompleteStorage = 'hoc-istage';
var linesStorage = 'hoc-lns';
var failStorage = 'hoc-fail';
var crashStorage = 'hoc-crash';
var incompleteAttempsStorage = 'hoc-incomplete';
var connectedStorage = 'hoc-connected';
var htmlLevelPrefix = 'index';
function initLevels(i){
  var clean = localStorage[completeStorage];
  if(!clean){
    localStorage[completeStorage] = 0;
    localStorage[incompleteStorage] = 0;
    
    for(var i = 1; i <= 20; i++){
      localStorage[linesStorage+i] = 0;
      localStorage[failStorage+i] = 0;
      localStorage[crashStorage+i] = 0;
      localStorage[incompleteAttempsStorage+i] = 0;
      localStorage[connectedStorage+i] = 0;
    }
  }
}

function isLevelCompleted(i){
  var data = localStorage[completeStorage];
  var idata = localStorage[incompleteStorage];
  while(i>1){
    idata = idata>>1;
    data = data>>1;
    i--;
  }
  
  return (data&1)*2+(idata&1);
}

function getLevelBlocks(){
	var str = "";
	for (var i=1; i < 20; i++) {
	  str = str+localStorage[linesStorage+i]+",";
	};
	return str+localStorage[linesStorage+20];
}

function getLevelFails(){
	var str = "";
	for (var i=1; i < 20; i++) {
	  str = str+localStorage[failStorage+i]+",";
	};
	return str+localStorage[failStorage+20];
}

function getLevelCrashs(){
	var str = "";
	for (var i=1; i < 20; i++) {
	  str = str+localStorage[crashStorage+i]+",";
	};
	return str+localStorage[crashStorage+20];
}

function getLevelIncompletedAttemps(){
	var str = "";
	for (var i=1; i < 20; i++) {
	  str = str+localStorage[incompleteAttempsStorage+i]+",";
	};
	return str+localStorage[incompleteAttempsStorage+20];
}

function getLevelConnected(){
	var str = "";
	for (var i=1; i < 20; i++) {
	  str = str+localStorage[connectedStorage+i]+",";
	};
	return str+localStorage[connectedStorage+20];
}

var hoc_completed = false;
function setLevelAsCompleted(i){
  if(hoc_completed){
    return;
  }
  hoc_completed = true;
  var mask = 1;
  var level = i;
  while(i > 1){
    mask = mask << 1;
    i--;
  }
  localStorage[completeStorage] = mask | localStorage[completeStorage];
  localStorage[incompleteStorage] = ~mask & localStorage[incompleteStorage];
  localStorage[linesStorage+level] = bloques_usados()-1;
  
  $.post( "ajax/updateCompletedLevels.php", { level_completed: localStorage[completeStorage]}).done(function( data ) {
  });
  $.post( "ajax/updateBlocks.php", { level_block: getLevelBlocks()}).done(function( data ) {
  });
}

function setLevelAsIncompleted(i){
  var mask = 1;
  var level = i;
  while(i > 1){
    mask = mask << 1;
    i--;
  }
  localStorage[incompleteStorage] = mask | localStorage[incompleteStorage];
  localStorage[completeStorage] = ~mask & localStorage[completeStorage];
  localStorage[linesStorage+level] = bloques_usados()-1;
  
  $.post( "ajax/updateCompletedLevels.php", { level_completed: localStorage[completeStorage]}).done(function( data ) {
  });
  $.post( "ajax/updateBlocks.php", { level_block: getLevelBlocks()}).done(function( data ) {
  });
}

function getAllBlocks(){
  var sum = 0;
  for(var i = 1; i <= 20; i++){
    sum += parseInt(localStorage[linesStorage+i]);
  }
  sum -= parseInt(localStorage[linesStorage+parseInt($('#i-level').val())]);
  return sum+bloques_usados()-1;
}

function applyColor(level,  i){
  level.addClass("lcolor"+isLevelCompleted(i));
}

function stagesCompleted(){
  var s = localStorage[completeStorage];
  var c = 0;
  while(s != 0){
    c += s & 1;
    s = s >> 1;
  }
  return c;
}


initLevels();
$('.levels li').each(function (i){
  applyColor($(this), i+1);
  $(this).click(function(){
    window.location.href = htmlLevelPrefix+'.php?level='+(i+1);
  });	
});


$("#game-info-desc").html(HOC_LEVEL.descripcion);
$(".welcome-image img").attr('src', 'media/welcome/'+HOC_LEVEL.imagen_inicial);

if("tutorial" in HOC_LEVEL) {
  $('#video').removeClass('invisible');
  
  $("#videoModal").on('hide.bs.modal', function(e) {
    $('#video-tutorial').remove();
  });

  $("#videoModal").on('show.bs.modal', function(e) {
    $('#video-modal-body').append('<iframe id="video-tutorial" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>');
    $("#video-tutorial").attr("src", HOC_LEVEL.tutorial + "?rel=0");
  });
}

$("#welcome-message").html(HOC_LEVEL.mensaje_inicial);
$(".help-title").html(HOC_LEVEL.titulo_ayuda);
$(".help-message").html(HOC_LEVEL.comentario_ayuda);
$("#reset-level-btn").click(function(){location.reload();});
if(parseInt($('#i-maxlevel').val()) <= parseInt($('#i-level').val())){
  $('.completed-next-btn').html('He terminado');
}
function lastLevelMessage(){
  if(parseInt($('#i-maxlevel').val()) <= parseInt($('#i-level').val())){
    $('.completed-next-btn').html('He terminado');
    $('.cd-btn2').html('He terminado');
  }
}


$("#game-tutorial span").click(function(){
  $(document).modalVideoDisplay(HOC_LEVEL.tutorial);
});

function linkReference(){
  var max = parseInt($('#i-maxlevel').val());
  var lv = parseInt($('#i-level').val());
  return lv<max?htmlLevelPrefix+'.php?level='+(lv+1):'felicitaciones.php';
}


function showHelp(){
  $('#helpModal').modal();
  
  // $("#helpModal").modalContentDisplay(500);
  // $(".help-button").click(function(){
  // 		$('#hoc-fullmodal').hide();
  // 	});
}

function completedStage(){
  $("#completedModal").modal();
  $(".completedExtra").hide();
  var lv = parseInt($('#i-level').val());
  setLevelAsCompleted(lv);

  $('.completed-next-btn').removeClass('invisible');
  
  $(".completed-repeat-btn").click(function(){
    resetear_nivel();
    $('#completedModal').modal('hide');
  });
  
  $(".completed-next-btn").click(function(){
    window.location.href = linkReference();
  });
  
  $('.completed-code-btn').click(function(){
    $('#completedModal').modal('hide');
    mostrar_javascript();
    $("button.cd-btn2").show();
  });
}

function semiCompletedStage(n){
  $("#completedModal").modal();
  $(".blockNumber").html(n);
  $(".completedExtra").show();
  var lv = parseInt($('#i-level').val());
  setLevelAsIncompleted(lv);
  $(".completed-repeat-btn").click(function(){
    resetear_nivel();
    $('#completedModal').modal('hide');
  });
  
  $(".completed-next-btn").click(function(){
    window.location.href = linkReference();
  });
  $('.completed-code-btn').click(function(){
    $('#completedModal').modal('hide');
    mostrar_javascript();
    $("button.cd-btn2").show();
  });
}

function incompletedStage(n){
  $("#incompletedModal").modal();
  $(".completed-repeat-btn").click(function(){
    resetear_nivel();
    $('#incompletedModal').modal('hide');
  });
  $(".completed-help-btn").click(function(){
    $('#incompletedModal').modal('hide');
    showHelp();
  });

  var lv = parseInt($('#i-level').val());
  localStorage[incompleteAttempsStorage+lv] = 1+parseInt(localStorage[incompleteAttempsStorage+lv]);
  $.post( "ajax/updateIncompletedAttempt.php", { level_incompleted: getLevelIncompletedAttemps()}).done(function( data ) { });
}

function failedStage(block){
  $("#failedModal").modal();
  $(".completed-repeat-btn").click(function(){
    resetear_nivel();
    $('#failedModal').hide();
  });
  
  $(".completed-help-btn").click(function(){
    $('#failedModal').modal('hide');
    showHelp();
  });
  
  $('.incompleted-block').html(block);
  
  var lv = parseInt($('#i-level').val());
  localStorage[failStorage+lv] = 1+parseInt(localStorage[failStorage+lv]);
  $.post( "ajax/updateFail.php", { level_fail: getLevelFails()}).done(function( data ) { });

}

function wallCrash(){
  $('#murallaModal').modal();
  $(".completed-repeat-btn").click(function(){
    resetear_nivel();
    $('#murallaModal').modal('hide');
  });
  
  $(".completed-help-btn").click(function(){
    $('#murallaModal').modal('hide');
    showHelp();
  });
  
  execbtn.html('Reiniciar');
  execbtn.toggleClass("btn-danger btn-success");
  
  var lv = parseInt($('#i-level').val());
  localStorage[crashStorage+lv] = 1+parseInt(localStorage[crashStorage+lv]);
  $.post( "ajax/updateCrash.php", { level_crash: getLevelCrashs()}).done(function( data ) { });

}

function forModal(){
  $("#emptyForErrorModal").modal();
  
  $(".completed-repeat-btn").click(function(){
    resetear_nivel();
    $("#emptyForErrorModal").modal('hide');
  });
  
  $(".completed-help-btn").click(function(){
    $("#emptyForErrorModal").modal('hide');
    showHelp();
  });
}

function welcomeWindow(){
  if("tutorial" in HOC_LEVEL) {
    $("#videoModal").modal();
  }

  $('#welcomeModal').modal();
}

function unconnectedBlocks(){
	var lv = parseInt($('#i-level').val());
	localStorage[connectedStorage+lv] = 1+parseInt(localStorage[connectedStorage+lv]);
	$.post( "ajax/updateConnected.php", { level_connected: getLevelConnected()}).done(function( data ) {
	});
	$("#errorModal").modal();
}

welcomeWindow();


