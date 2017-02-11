var {ChatItem} = require('./../models/chatItem.model');

module.exports = (router) => {

  router.get('/chat_items', (req, res) => {
    ChatItem.find(req.query)
      .then((items) => {
        res.send({items});
      })
      .catch((e) => res.status(500).send(e));
  });

  router.post('/chat_items', (req, res) => {
    var chatItem = new ChatItem(req.body);
    chatItem.save()
      .then((doc) => {
        res.send({doc});
      })
      .catch((e) => res.status(500).send(e));
  });
};
