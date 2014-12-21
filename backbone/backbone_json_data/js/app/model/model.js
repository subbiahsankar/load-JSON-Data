app = app || {};
app.models.mode = Backbone.Model.extend({
	default:{
		"Name":"",
		"Age":""
	},
	validate: function(attr){
		console.log("validate");
		if(attr.Name == "" || attr.Name == undefined){
			return "Give some value";
		}
	}
});