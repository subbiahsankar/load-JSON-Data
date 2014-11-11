app = {
	models:{},
	views:{},
	collections:{},
	routers:{},

	init:function(){
		new app.routers.route();
		new app.views.view();
		Backbone.history.start();
	}
};
app.routers.route = Backbone.Router.extend({
	initialize:function(){
		console.log("Router initialized");
	}
});