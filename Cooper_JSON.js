// 1) Get all posts
$.get('http://jsonplaceholder.typicode.com/posts', function(data){
	console.log(data);
});

// 2) Get the post with id of 10
$.get('http://jsonplaceholder.typicode.com/post/10', function(data){
	console.log(data);
});

// 3) Get the comments from posts with id of 12
$.get('http://jsonplaceholder.typicode.com/post/12/comments', function(data){
	console.log(data);
});

// 4) Get all the posts from user with id of 2
$.get('http://jsonplaceholder.typicode.com/user/2/posts', function(data){
	console.log(data);
});

// 5) Create a new post and log the id generated for it by the server
$.post('http://jsonplaceholder.typicode.com/posts',{
	userId: 1,
	title: "My New Post",
	body: "This is the body"
}, function(data){
	console.log(data.id)
})

// 6) Replace the post with id of 12 and render the responseJSON
$.ajax({
	method: 'PUT',
	url: 'http://jsonplaceholder.typicode.com/posts/12',
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		console.log(response.responseJSON);
	}
})

// 7) Update the title of post with id of 12 and render the responseJSON
$.ajax({
	method: 'PATCH',
	url: 'http://jsonplaceholder.typicode.com/posts/12',
	data: {
title: "patched it"
},
	complete: function(response){
		console.log(response.responseJSON);
	}
})

// 8) Delete the post with id of 12 and render a success message
$.ajax({
	method: 'DELETE',
	url: 'http://jsonplaceholder.typicode.com/posts/12',
	complete: function(response){
		console.log(response.statusText);
	}
})

// 9) Display a list of posts
var list = $('ul#postList');

$.get('http://jsonplaceholder.typicode.com/posts', function(data){
	users.forEach(function(data){
		var li = $('<li></li>');
		li.text(data.post);
		list.append(li);
	})
});
