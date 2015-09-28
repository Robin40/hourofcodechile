var completeStorage = 'hoc-stage';
var incompleteStorage = 'hoc-istage';
var linesStorage = 'hoc-lns';
var htmlLevelPrefix = 'index';
function initLevels(i){
	var clean = localStorage[completeStorage];
	if(!clean){
		localStorage[completeStorage] = 0;
		localStorage[incompleteStorage] = 0;
		
		for(var i = 1; i <= 20; i++){
			localStorage[linesStorage+i] = 0;
		}
	}
}

function isLevelCompleted(i){
	var data = localStorage[completeStorage];
	var idata = localStorage[incompleteStorage];
	var val;
	while(i>1){
		idata = idata>>1;
		data = data>>1;
		i--;
	}
	
	return (data&1)*2+(idata&1);
}

function setLevelAsCompleted(i){
	var mask = 1;
	while(i > 1){
		mask = mask << 1;
		i--;
	}
	localStorage[completeStorage] = mask | localStorage[completeStorage];
	localStorage[incompleteStorage] = ~mask & localStorage[incompleteStorage];
	localStorage[linesStorage+i] = bloques_usados()-1;
}

function setLevelAsIncompleted(i){
	var mask = 1;
	while(i > 1){
		mask = mask << 1;
		i--;
	}
	localStorage[incompleteStorage] = mask | localStorage[incompleteStorage];
	localStorage[completeStorage] = ~mask & localStorage[completeStorage];
	localStorage[linesStorage+i] = bloques_usados()-1;
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
$('#levels-bar li').each(function (i){
	applyColor($(this), i+1);
	$(this).click(function(){
		window.location.href = htmlLevelPrefix+'.php?level='+(i+1);
	});	
});


$("#game-info-title").html(HOC_LEVEL.nombre+': ');
$("#game-info-desc").html(HOC_LEVEL.descripcion);
$(".welcome-image img").attr('src', 'media/welcome/'+HOC_LEVEL.imagen_inicial);
$(".welcome-message").html(HOC_LEVEL.mensaje_inicial);
$(".help-title").html(HOC_LEVEL.titulo_ayuda);
$(".help-image img").attr('src', 'media/help/'+HOC_LEVEL.imagen_ayuda);
$(".help-message").html(HOC_LEVEL.comentario_ayuda);

$("#game-tutorial span").click(function(){
		$(document).modalVideoDisplay(HOC_LEVEL.tutorial);
	});


function showHelp(){
	$("#helpModal").modalContentDisplay(500);
	$(".help-button").click(function(){
			$('#hoc-fullmodal').hide();
		});
}

function completedStage(){
	$("#completedModal").modalContentDisplay(548);
	$(".completedExtra").hide();
	var lv = parseInt($('#i-level').val());
	setLevelAsCompleted(lv);
	console.log("level "+lv+ " completed");
	$(".completed-repeat-btn").click(function(){
			resetear_nivel();
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
	
	$('.completed-code-btn').click(function(){
		$('#hoc-fullmodal').hide();
		mostrar_javascript();
		var btn = $('#hoc-fm-accept button');
		btn.html("Siguiente nivel");
		btn.click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		});
	});
}

function semiCompletedStage(n){
	$("#completedModal").modalContentDisplay(548);
	$(".blockNumber").html(n);
	$(".completedExtra").show();
	var lv = parseInt($('#i-level').val());
	setLevelAsIncompleted(lv);
	$(".completed-repeat-btn").click(function(){
			resetear_nivel();
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
	$('.completed-code-btn').click(function(){
		$('#hoc-fullmodal').hide();
		mostrar_javascript();
		var btn = $('#hoc-fm-accept button');
		btn.html("Siguiente nivel");
		btn.click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		});
	});
}

function incompletedStage(){
	$("#incompletedModal").modalContentDisplay(500);
	$(".completed-repeat-btn").click(function(){
			resetear_nivel();
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			var lv = parseInt($('#i-level').val());
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
	
	$(".completed-help-btn").click(function(){
		$('#hoc-fullmodal').hide();
		showHelp();
	});
}

function failedStage(){
	$("#failedModal").modalContentDisplay(500);
	$(".completed-repeat-btn").click(function(){
			resetear_nivel();
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			var lv = parseInt($('#i-level').val());
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
	
	$(".completed-help-btn").click(function(){
		$('#hoc-fullmodal').hide();
		showHelp();
	});
}

function welcomeWindow(){
	$("#welcomeModal").modalContentDisplay(525);
	$(".welcome-button").click(function(){
			$('#hoc-fullmodal').hide();
		});
}

welcomeWindow();


