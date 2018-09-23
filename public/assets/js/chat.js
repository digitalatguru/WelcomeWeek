//make connection

var socket = io.connect('https://localhost:443');

var output = document.getElementById('output');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var message = document.getElementById('message');

//emit events
btn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});


//listen for events
socket.on('chat', function(data){
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});


  var chat = io.connect('http://localhost/chat')
    , news = io.connect('http://localhost/news');
  
  chat.on('connect', function () {
    chat.emit('hi!');
  });
  
  news.on('news', function () {
    news.emit('woot');
  });

