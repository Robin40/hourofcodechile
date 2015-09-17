var storageName = 'hoc-stage'
var htmlLevelPrefix = 'level';
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

function applyColor(level,  i){
	level.addClass("lcolor"+isLevelCompleted(i));
}

$('#levels-bar').load('include/levelList.html', function(){
	initLevels()
	$('#levels-bar li').each(function (i){
		applyColor($(this), i+1);
		$(this).click(function(){
			window.location.href = htmlLevelPrefix+(i+1)+'.html';
		});	
	})
});




