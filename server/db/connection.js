const mongoose = require('mongoose');
const io = require('socket.io');

// const socketIo = io(server, {
//   cors: {
//     origin: ["http://localhost:3000"],
//   },
// });

mongoose.connect('mongodb://localhost/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log('Connected to DB')).catch((e) => console.log('Error', e));

