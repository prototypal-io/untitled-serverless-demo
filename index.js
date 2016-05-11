var Server = require('untitled-serverless');

var server = new Server();

server.routes(function() {
  this.get('/posts', {from: 'posts', with: 'index'});
});

server.start(3000);

console.dir(server.toJSON(), {depth: null, colors: true});
