var shoppingList = {
	listItems: [],
	addListItem: function(newItem){
		this.listItems.push(newItem);
		this.renderList();
	},
	renderList: function(){
		$('.shopping-list').empty();
		for (var i = 0; i < this.listItems.length; i++){
			$('.shopping-list').append('<li>' + '<span class="shopping-item">' + this.listItems[i] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		}
		buttonClicks();
	},
	deleteListItem: function(str) {
		this.listItems = this.listItems.filter(function(item){
			return (item === str)
		});
		this.renderList();
	}
}

$('#add-item').click(function() {
	shoppingList.addListItem($('#shopping-list-entry').val());
});

function buttonClicks(){
	$( '.shopping-item-toggle').on( 'click', function( event ) {
		$( event.target ).toggleClass('shopping-item__checked');
	});
	$('.shopping-item-delete').on('click', function(event){
		shoppingList.deleteListItem($(event.target).closest('.shopping-item').text());
		console.log('click');
		console.log($(event.target).closest('.shopping-item').text())
	});
}

// function addListItem(){
// 	var newItem = $('#shopping-list-entry').val();
// 	$(".shopping-list").append("<li>" + newItem + "</li>");
// 		};
// 	}

	// .remove()
// $( "button" ).click(function( event ) {
// 	event.preventDefault();

// push into array, show in the DOM, and when removing it take out of the DOM
