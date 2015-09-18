function setFullCss(){
	
	var fm = $('#hoc-fullmodal');
	fm.css("position", "fixed");
	fm.css("top", "0");
	fm.css("left", "0");
	fm.css("right", "0");
	fm.css("bottom", "0");
	fm.css("z-index", "2");
	
	var trans = $('#hoc-trans');
    trans.css("width", "100%");
    trans.css("height", "100%");
	trans.css("opacity", "0.5");
	trans.css("filter", "alpha(opacity=50)");
	trans.css("background-color", "#444444");
	trans.css("z-index", "-1");
	trans.css("position", "absolute");
	trans.css("left", "0px");
	trans.css("top", "0px");
	
	var fm = $('#hoc-div');
	fm.css("width", "400px");
	fm.css("height", "200px");
	fm.css("border", "1px solid #cccccc");
	fm.css("background-color", "#ffffff");
	fm.css("padding", "10px");
	fm.css("margin", "200px auto");
	
	var content = $('#hoc-fm-content');
	content.css("font-size", "16");
	content.css("width", "380px");
	content.css("height", "150px");
	
	var accept = $('#hoc-fm-accept');
	accept.css("font-size", "16");
	accept.css("width", "380px");
	accept.css("height", "50px");
	
	var btn = accept.find("button");
	
	btn.css("padding", "10px 20px");
	btn.css("float", "right");
}

function setSizedCss(model, elemId, offx, offy){
	var absPosition = $('#'+elemId).offset();
	//alert('#'+elemId);
	model.css("left", absPosition.left+offx+"px");
	model.css("top", absPosition.top+offy+"px");
}

function createFullModal(){
	$('body').append('<div id=\'hoc-fullmodal\'></div>');
	var fm  = $('#hoc-fullmodal');
	fm.append('<div id=\'hoc-trans\'></div>');
	fm.append('<div id=\'hoc-div\'></div>');
	
	var div = $("#hoc-div");
	div.append('<div id=\'hoc-fm-content\'></div>');
	div.append('<div id=\'hoc-fm-accept\'></div>');
	
	$('#hoc-fm-accept').append('<button>Aceptar</button>');
	
	setFullCss();
	$('#hoc-fm-accept button').click(function(){
		fm.hide();
	});
}

function createSizedModalContainer(){
	$('body').append('<div id=\'hoc-sizedmodal-container\'></div>');
}

function createSizedModal(container, elemId, id, offx, offy){
	container.append('<div id=\''+id+'\' class=\'hoc-sizedmodal\'></div>');
	
	var sm  = $('#'+id);
	
	sm.append('<div class=\'hoc-sm-content\'></div>');
	sm.append('<div class=\'hoc-sm-accept\'></div>');
	
	var accept = sm.find('.hoc-sm-accept');
	accept.append('<button>Aceptar</button>');
	
	sm.find('button').click(function(){
		sm.hide();
	});
	setSizedCss(sm, elemId, offx, offy);
}

$.fn.modalDisplay = function() {
	var modal = $('#hoc-fullmodal');
	if(modal.length == 0){
		createFullModal();
	}
	else{
		modal.show();
	}
    $('#hoc-fm-content').text(this.text());
};

$.fn.modalSmallDisplay = function(relElemId, offx, offy) {
    var container = $('#hoc-sizedmodal-container');
    if(container.length == 0){
		createSizedModalContainer();
		container = $('#hoc-sizedmodal-container');
	}
	var id = $(this).attr("id");
	var modalId = "hoc-sm-"+id;
	var modal = $('#'+modalId);
	if(modal.length == 0){
		createSizedModal(container, relElemId, modalId, offx, offy);
		modal = $('#'+modalId);
	}
	$('#'+modalId+' .hoc-sm-content').text(this.text());
	modal.show();
	
};

