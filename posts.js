function json(obj, status) {
  status = status || 200;
  
  return [
    status,
    {'Content-Type': 'application/json'},
    JSON.stringify(obj)
  ];
}

module.exports = {
  index: function(req) {
    return json({
      posts: [
        {id: 1, title: 'zomg'},
        {id: 2, title: 'yay'}
      ]
    });
  }
};