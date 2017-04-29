// socket.js
var io = require('socket.io')(6001);
var Redis = require('ioredis');
var redis = new Redis();
redis.subscribe('broadcast', function(err, count) {
  console.log('redis connect!');
});
redis.on('message', function(redis_channel, redis_msg) {
    console.log('Redis的頻道名稱:', redis_channel);// chat-room.9453
    console.log('Redis的資料內容', redis_msg);

    const data = JSON.parse(redis_msg);
    console.info('JSON', data);

    // 將Redis的資料內容再透過 socket.io 轉發事件
    io.emit(data.event, data.data);
});