

$.ajax({
	method: 'GET',
	url: 'http://jsonplaceholder.typicode.com/username'
  try{
    complete: function(submit){
  		console.log(submit.statusText);
  	} catch (e) {
      console.warn(err, 'username not found');
    }
  }

})

$.get('http://jsonplaceholder.typicode.com/username/user', function(data){
	console.log(data);
});

$.get('http://jsonplaceholder.typicode.com/username/post/title', function(data){
	console.log(data);
});

$.get('http://jsonplaceholder.typicode.com/username/album', function(data){
	console.log(data);
});
