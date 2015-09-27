var storageName = 'hoc-stage'
var htmlLevelPrefix = 'index';
function initLevels(i){
	var clean = localStorage[storageName];
	if(!clean){
		localStorage[storageName] = 0;
	}
}

function isLevelCompleted(i){
	var data = localStorage[storageName];
	var val;
	while(i>0){
		val = data & 1;
		data = data>>1;
		i--;
	}
	return val;
}

function setLevelAsCompleted(i){
	var mask = 1;
	while(i > 1){
		mask = mask << 1;
		i--;
	}
	localStorage[storageName] = mask | localStorage[storageName];
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




