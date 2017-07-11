$(document).ready(function(){
	$(".js-menu").hide(); // hide ocultara la clase js-menu

	$(".js-back").show();// show mostrara la clase anteriormente ocultada en el archivo script-index.js (Flecha)

	console.log("Hola Mundo");

	$(".js-show-recipe").click(function(){
		console.log("funciona")
	$(".js-show-recipe").append("<div><p class=saludo>Botón Recipe</p></div>")
	})

	$(".js-show-make").click(function(){
		console.log("funciona")
	$(".js-show-make").append("<div><p class=saludo>Botón Make</p></div>")
	})

	$("div.page").click(function(){
		$("js-show-make").append("make");
		console.log("funciona");
	});
})
	
	
