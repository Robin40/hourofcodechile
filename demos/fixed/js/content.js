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
	while(i>0){
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



function completeStage(){
	$("#completedModal").modalContentDisplay(500);
	var lv = parseInt($('#i-level').val());
	setLevelAsCompleted(lv);
	$(".completed-repeat-btn").click(function(){
			$('#hoc-fullmodal').hide();
		});
	
	$(".completed-next-btn").click(function(){
			window.location.href = htmlLevelPrefix+'.php?level='+(lv+1);
		}
	);
}

function incompleteStage(){
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

incompleteStage();




