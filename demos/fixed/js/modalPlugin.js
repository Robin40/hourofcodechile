function setFullCss(){
	
	var fm = $('#hoc-fullmodal');
	fm.css("width", "100%");
	fm.css("height", "100%");
	fm.css("position", "fixed");
	fm.css("top", "0");
	fm.css("left", "0");
	fm.css("right", "0");
	fm.css("bottom", "0");
	fm.css("z-index", "2");
	
	var trans = $('#hoc-trans');
    trans.css("width", "100%");
    trans.css("height", "100%");
	trans.css("opacity", "0.7");
	trans.css("filter", "alpha(opacity=70)");
	trans.css("background-color", "#444444");
	trans.css("z-index", "-1");
	trans.css("position", "absolute");
	trans.css("left", "0px");
	trans.css("top", "0px");
	
	var fm = $('#hoc-div');
	fm.css("display", "table");
	fm.css("width", "420px");
	fm.css("height", "100%");
	fm.css("padding", "10px");
	fm.css("margin", "0 auto");
	
	var div = $('#hoc-intr');
	div.css("display", "table-cell");
	div.css("vertical-align", "middle");
	
	var cell = $('#hoc-cell');
	cell.css("padding", "10px");
	cell.css("border", "1px solid #cccccc");
	cell.css("background-color", "#ffffff");
	
	var content = $('#hoc-fm-content');
	content.css("font-size", "16px");
	content.css("width", "400px");
	content.css("height", "150px");
	
	var accept = $('#hoc-fm-accept');
	accept.css("font-size", "16px");
	//accept.css("width", "380px");
	accept.css("height", "35px");
	accept.css("margin-top", "10px");
	
	
	var btn = accept.find("button");
	
	btn.css("padding", "10px 20px");
	btn.css("margin-right", "20px");
	btn.css("float", "right");
	btn.css("color", "#ffffff");
	btn.css("background-color", "#2BBDCA");
	btn.css("cursor", "pointer");
	
	var btn = accept.find("button.cd-btn2");
	
	btn.css("display", "none");
}

function setSizedCss(model, elemId, offx, offy){
	var absPosition = $('#'+elemId).offset();
	model.css("left", absPosition.left+offx+"px");
	model.css("top", absPosition.top+offy+"px");
}

function createFullModal(){
	$('body').append('<div id=\'hoc-fullmodal\'></div>');
	var fm  = $('#hoc-fullmodal');
	fm.append('<div id=\'hoc-trans\'></div>');
	fm.append('<div id=\'hoc-div\'></div>');
	
	var div = $("#hoc-div");
	div.append('<div id="hoc-intr"></div>');
	
	div = div.find('div');
	div.append('<div id="hoc-cell"></div>');
	
	div = div.find('div');
	div.append('<div id=\'hoc-fm-content\'></div>');
	div.append('<div id=\'hoc-fm-accept\'></div>');
	
	$('#hoc-fm-accept').append('<button class="cd-btn2">Siguiente nivel</button>');
	$('#hoc-fm-accept').append('<button class="cd-btn1">Cerrar esta ventana</button>');
	
	setFullCss();
	$('#hoc-fm-accept button.cd-btn1').click(function(){
		fm.hide();
	});
	$('#hoc-fm-accept button.cd-btn2').click(function(){
			window.location.href = linkReference();
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
		setFullCss();
		modal.show();
	}
	$('#hoc-fm-accept').show();
    $('#hoc-fm-content').text(this.text());
};

$.fn.modalCodeDisplay = function(lines, levels) {
	var modal = $('#hoc-fullmodal');
	if(modal.length == 0){
		createFullModal();
	}
	else{
		
		modal.show();
	}
	var ac = $('#hoc-fm-accept');
	ac.show();
	var htmlCode = "<div class='showCodeHeader'><div>Hasta ahora llevas:</div><ul><li>"+lines+" Bloques de c&oacute;digo</li><li>"+levels+" Niveles completados</li></ul></div>";
	htmlCode += "<div class='showCodeBody'><div>Tu c&oacute;digo actual:</div>";
    $('#hoc-fm-content').html(htmlCode+'<pre>'+this.text()+'</pre></div>');
};

$.fn.modalVideoDisplay = function(url) {
	var modal = $('#hoc-fullmodal');
	if(modal.length == 0){
		createFullModal();
	}
	else{
		modal.show();
	}
	$('#hoc-fm-accept').show();
	var fm = $('#hoc-div');
	fm.css("width", "854px");
	//fm.css("margin", "50px auto");
	
	var content = $('#hoc-fm-content');
	content.css("font-size", "16");
	content.css("width", "854px");
	content.css("height", "auto");
	
	
	var title = '<b>'+'Titulo del video'+'</b>';
	var html = '<div>'+title+'</div>';
	html += "<iframe width=\"854px\" height=\"480px\" src=\""+url+"\"></iframe>"; 
    content.html(html);
};

$.fn.modalContentDisplay = function(w) {
	var modal = $('#hoc-fullmodal');
	if(modal.length == 0){
		createFullModal();
	}
	else{
		modal.show();
	}
	$('#hoc-fm-accept').hide();
	var fm = $('#hoc-div');
	fm.css("width", w+"px");
	//fm.css("margin", "150px auto");
	
	var content = $('#hoc-fm-content');
	content.css("width", w+"px");
	content.css("height", "auto");

    content.html(this.html());
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

