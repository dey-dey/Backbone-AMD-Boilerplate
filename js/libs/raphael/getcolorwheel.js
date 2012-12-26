define(function (require){

	require('raphael');

	// RENDER SVG COLOR WHEEL
	return function (id, size, color){
		/*
		 * When palcing the wheel in a containing elelemnt, the x and y coordinates must be set to containing elements
		 * left and top offset otherwise the color wheel controls will not align to the mouse
		 */
		var x_coord = $(id).offset().left;
		var y_coord = $(id).offset().top;
		var size = size || 130;/* width and height of wheel */
		var initial_color = color || '#7E7E80';/* initial color */
		var container_elem = $(id).get(0);/*
											 * Either the ID of the element (without the #) or an HTML DOM element (not
											 * a jQuery element)
											 */
		/* Create and return the color wheel */
		return Raphael.colorwheel(x_coord, y_coord, size, initial_color, container_elem);
	};
});