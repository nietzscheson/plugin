
jQuery.fn.extend({
	setBackground: function(options){
		defaults = {
			color: '#999',
			text: 'Soy Cristian',
			resena: 'Y soy programador'
		}

		var options = $.extend({}, defaults, options);
		
		this.each(function(){
			$(this).css('background-color',options.color);
			$('h1').text(options.text);
			$('span').text(options.resena);
		});
	}
});


/*

-- Primera forma--

jQuery.fn.extend({
	setBackground: function(color){
		this.each(function(){
			jQuery(this).css('background-color',color);
		});
	}
});
*/


/*

-- Segunda forma--

(function($){
	$.fn.extend({
		setBackground: function(color){
			$(this).each(function(){
				$(this).css('background-color',color)
			});
		}
	});
})(jQuery);

*/

/*

-- Tercera forma--

jQuery.fn.setBackground = function(color){
	this.each(function(){
		jQuery(this).css('background-color',color);
	});
}

*/