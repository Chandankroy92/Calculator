function handleInput(key){
	return $('#preview').append(key);
}
function bindkeys(){
	$(document).bind('keyup','8',function(){ handleInput('8')});
	
}
function previewContent(){
	return $('#preview').html();
}

function deleteLastChar(){
	var preview=previewContent()
	var newPre=preview.slice(0,-1);
	$('#preview').html(newPre);
}

$('document').ready(function(){
	$('.key').click(function(){
		var key =$(this).text();
			if (key=="0") {
				if (previewContent()!="0") {
					handleInput(key);
				}
			} else if(key=="DEL"){
				deleteLastChar();
				} else if ((key=="+") || (key=="-") || (key=="*") || (key=="/")){
					var lastChar=previewContent().slice(-1);
					if((lastChar=="+") || (lastChar=="-") || (lastChar=="*") || (lastChar=="/") ){
						deleteLastChar();
					}
					if((previewContent()!="") || (key =="-")){
						handleInput(key);
					}
				}else if(key=="="){
					var result=eval(previewContent());
					$('#preview').html(result);
					$('#result').html(result);
				}else if(key=="."){
					var pattern=/[^\+\-\*\/]*$/;
					var latestNumber=previewContent().match(pattern)[0];
					if (latestNumber.indexOf(".") == -1) {
						handleInput(".")
					}
				}else{

					handleInput(key);
				}
	});

	$('.delete').dblclick(function(){
		$('#preview').html("");
		$('#result').html("");
	});
	bindkeys();
}); 