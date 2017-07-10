$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	renderActivities(activitiesArray);

	$(".js-back").hide();// hide oculta la clase js-back(Flecha)
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {	
	recipesArray.forEach(function(e){ // recorre el arreglo, validando si highlighted es true, si esto es verdadero, se dirige a la siguente funcion renderRecipe//
		if(e.highlighted == true){
			renderRecipe(e)
		}
	});
	console.log('Recipes: ', recipesArray);
}


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	var miDiv = $(".list-recipes");
	miDiv.append('<a class="item-recipe" href="#"><span class="attribution">'+
    '<span class="title-recipe">'+ recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe"> '+ recipe.source.name + '</span><span class="bookmarks-recipe">'+
    '<span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+ recipe.name + '.jpg" /></a>');

	console.log('Voy a pintar la receta: ', recipe);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {

	activitiesArray.forEach(renderActivity);
	if(activitiesArray.length > 0){
		$(".wrapper-message").hide();
		console.log('Activities: ', activitiesArray);
	}
}


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var miDivList = $(".list-activities");
	miDivList.append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="' + $(recipe).attr('userAvatar') + '"class="image-avatar"></span><span class="meta"><span class="author">' + $(recipe).attr("userName") + '</span> made <span class="recipe">' + $(recipe).attr("recipeName") + '</span>: ' + $(recipe).attr("text") + '<span class="location">&mdash;' + $(recipe).attr("place") + '</span></span></span><div class="bg-image" style="background-image: url(' + $(recipe).attr("image") +');"></div></a>')
}


function printNews(){
	var parrafo = document.getElementsByClassName("parrafo")[0];
	var texto = document.createTextNode("NUEVAS RECETAS");

	parrafo.appendChild(texto);
}

printNews()

