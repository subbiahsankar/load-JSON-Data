app = app || {};

app.views.secondaryView = Backbone.View.extend({
	el:"#list",
	events:{
		
	},
	template : _.template($('#template-private').html()),
	initialize:function(){
		this.listenTo(app.collectt, 'sync', this.render);
		this.listenTo(app.collectt, 'add', this.render);
	},
	render: function(){
		var that = this;
		console.log("render");
		this.$el.empty();
		_.each(app.collectt.models,function(model){
				that.$el.append(that.template(model.attributes));
				},this);
	},
	filter: function(){
		var that = this;
		this.$el.empty();
		app.collectt.filter($("#search").val());
		_.each(app.searchResult,function(model){
				that.$el.append(that.template(model.attributes));
				},this);
	}
});
app.views.view = Backbone.View.extend({
	el: '#date',
	events:{
		"click #save" : "save_model",
		"keyup #search" : "search"
	},
	
	
	initialize: function(){
		var that = this;
		app.collectt = new app.collections.collect();
		app.collectt.fetch({
			success: function(){
				that.add_data();
			},
			error: function(arguments) { console.log(arguments); }
		}).complete(function () {
    });
	},
	save_model: function(){
		var name = $("#name").val();
		var age = $("#age").val();
		//alert(name+""+age);
		if(!((name == "" || name == undefined) || (age == "" || age == undefined))) {
		app.modu = new app.models.mode({
			"Name": name,
			"Age": age
		});
		app.collectt.add(app.modu);
		console.log(name+" "+age);
	}
	},
	add_data:function(){
		app.views.secondView = new app.views.secondaryView();
		//app.viewobj.render();
	},
	search: function(){
		//console.log("hello");
		app.views.secondView.filter();
	}
});