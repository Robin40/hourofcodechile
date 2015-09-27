var completeStorage = 'hoc-stage';
var incompleteStorage = 'hoc-istage';
var htmlLevelPrefix = 'index';
function initLevels(i){
	var clean = localStorage[completeStorage];
	if(!clean){
		localStorage[completeStorage] = 0;
		localStorage[incompleteStorage] = 0;
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
}

function setLevelAsIncompleted(i){
	var mask = 1;
	while(i > 1){
		mask = mask << 1;
		i--;
	}
	localStorage[incompleteStorage] = mask | localStorage[incompleteStorage];
	localStorage[completeStorage] = ~mask & localStorage[completeStorage];
}

function applyColor(level,  i){
	level.addClass("lcolor"+isLevelCompleted(i));
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

var t_c = 0;
$("#game-tutorial div").click(function(){
	if(t_c == 0){
		$(document).modalVideoDisplay(HOC_LEVEL.tutorial);
		t_c = 1;
	}
	else{
		$("#hoc-fm1").modalDisplay();
		t_c = 0;
	}
});



function completedStage(){
	$("#completedModal").modalContentDisplay(500);
	$(".completedExtra").hide();
	var lv = parseInt($('#i-level').val());
	setLevelAsCompleted(lv);
	console.log("level "+lv+ " completed");
	$(".completed-repeat-btn").click(function(){
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
}

function semiCompletedStage(n){
	$("#completedModal").modalContentDisplay(500);
	$(".blockNumber").html(n);
	$(".completedExtra").show();
	var lv = parseInt($('#i-level').val());
	setLevelAsIncompleted(lv);
	$(".completed-repeat-btn").click(function(){
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
}

function incompletedStage(){
	$("#incompletedModal").modalContentDisplay(500);
	$(".completed-repeat-btn").click(function(){
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			var lv = parseInt($('#i-level').val());
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
}

function failedStage(){
	$("#failedModal").modalContentDisplay(500);
	$(".completed-repeat-btn").click(function(){
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			var lv = parseInt($('#i-level').val());
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
}

function showHelp(){
	$("#helpModal").modalContentDisplay(500);
	$(".completed-repeat-btn").click(function(){
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			var lv = parseInt($('#i-level').val());
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
}

function welcomeWindow(){
	$("#welcomeModal").modalContentDisplay(525);
	$(".welcome-button").click(function(){
			$('#hoc-fullmodal').hide();
		});
}

//welcomeWindow();


