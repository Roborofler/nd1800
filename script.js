const repoDBlink = 'https://my-json-server.typicode.com/Roborofler/nd1800/db' 

$.ajax(repoDBlink, 
	{
		success: function (responce) {
			console.log(responce)
			showData(responce)
	}
})
function showData(responce) {
	for(let i = 0; i < responce.products.length; i++)
	{
		$('.main-grid').append(`
		<div class="item"> 
			<p class="item-header">${responce.products[i].name.toUpperCase()}</p>
			<div>
			<img src="${responce.products[i].photo_url}">
			<p><b>Price:</b>${responce.products[i].price}</p>
			<p><b>Description:</b>${responce.products[i].description}</p>
			<a href="${responce.products[i].author_id}">Sellers Link</a>
			</div>
			<button class="buy-button"> Buy </button>
		</div>`)
	}
}