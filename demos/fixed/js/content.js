var storageName = 'hoc-s'
var htmlLevelPrefix = 'level';
function initLevels(i){
	var clean = localStorage[storageName+i];
	if(!clean){
		localStorage[storageName+i] = 0;
	}
}

function applyColor(level,  i){
	level.addClass("lcolor"+localStorage[storageName+i]);
}

$('#levels-bar').load('include/levelList.html', function(){
	$('#levels-bar li').each(function (i){
		initLevels(i);
		applyColor($(this), i);
		$(this).click(function(){
			window.location.href = htmlLevelPrefix+(i+1)+'.html';
		});	
	})
});




