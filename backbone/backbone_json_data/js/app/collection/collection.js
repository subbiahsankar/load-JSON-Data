app = app || {};

app.collections.collect = Backbone.Collection.extend({
	model: app.models.mode,
	url: 'js/data.json',
	initialize: function(){

	},
	save:function(modu){
		app.collectt.save(modu);
	},
	comparator: function(model){
		return model.get("Age");
	},
	filter: function(search){
		app.searchResult = _.filter(app.collectt.models, function(item){
			return (item.get("Name").indexOf(search) !== -1);
		});
	}
});