(function () {
	var Vehicle = Backbone.Model.extend({
		prop1: '1'
	});
	var v1= new Vehicle();
	var v2= new Vehicle();
	v1.prop1='one';
	console.log(v1.prop1);
	console.log(v2.prop1);

})();