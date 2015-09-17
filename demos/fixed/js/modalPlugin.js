function setCss(){
	
	var fm = $('#hoc-fullmodal');
	fm.css("position", "fixed");
	fm.css("top", "0");
	fm.css("left", "0");
	fm.css("right", "0");
	fm.css("bottom", "0");
	
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

function createFullModal(){
	$('body').append('<div id=\'hoc-fullmodal\'></div>');
	var fm  = $('#hoc-fullmodal');
	fm.append('<div id=\'hoc-trans\'></div>');
	fm.append('<div id=\'hoc-div\'></div>');
	
	var div = $("#hoc-div");
	div.append('<div id=\'hoc-fm-content\'></div>');
	div.append('<div id=\'hoc-fm-accept\'></div>');
	
	$('#hoc-fm-accept').append('<button>Aceptar</button>');
	
	setCss();
	$('#hoc-fm-accept button').click(function(){
		fm.hide();
	});
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

$.fn.modalSmallDisplay = function() {
    this.css( "display", "block" );
};

