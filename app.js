var shoppingList = {
	listItems: [],
	addListItem: function(newItem){
		this.listItems.push(newItem);
		this.renderList();
	},
	deleteListItem: function(str) {
		// this.listItems = this.listItems.filter(function(item){
		// 	return (item !== str)
		// });
		this.listItems.splice(this.listItems.indexOf(str), 1);
		this.renderList();
	},
	renderList: function(){
		$('.shopping-list').empty();
		for (var i = 0; i < this.listItems.length; i++){
			$('.shopping-list').append('<li>' +
				'<span class="shopping-item">' + this.listItems[i] + '</span>' +
					'<div class="shopping-item-controls">' +
						'<button class="shopping-item-toggle">' +
							'<span class="button-label">check</span>' +
						'</button>' +
						'<button class="shopping-item-delete">' +
							'<span class="button-label">delete</span>' +
						'</button>' +
					'</div>' +
				'</li>');
		}
		buttonClicks();
	}
}

$('#js-shopping-list-form').on('submit', function(event){
	event.preventDefault();
	shoppingList.addListItem($('#shopping-list-entry').val());
});

function buttonClicks(){
	$( '.shopping-item-toggle').on( 'click', function( event ) {
		$(event.currentTarget.closest('li')).find('.shopping-item').toggleClass('shopping-item__checked');
		});
	$('.shopping-item-delete').on('click', function(event){
		shoppingList.deleteListItem($(event.currentTarget.closest('li')).find('.shopping-item').text());
	});
}
