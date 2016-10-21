const debug = require('debug')('poker');

const GameMessage = require('../message/GameMessage');

const onJoinedGame = (socket) => (data) => {
  const message = new GameMessage(data);

  socket.join(`game-${message.id}`);
  debug(`Socket ${socket.id} joined to game ${message.id}`);
};

module.exports = {
  onJoinedGame
};