
var PubNub = require('pubnub');
let pubnub = new PubNub({
  publish_key: 'pub-c-bfbee523-9bd4-4ef7-abba-713798349d83',
  subscribe_key: 'sub-c-215d2220-0ee3-11ec-9dd2-6e30de5dc30d',
  uuid: 'Lucas Macbook'
});


setTimeout(() => {
  pubnub.publish({channel: "hello_world",message: {title: "greeting", data: Math.random()}})
},1000)

