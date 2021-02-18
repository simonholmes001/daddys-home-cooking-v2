// Twilio set-up
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC9d05a6d957e01b92c80d128f06cfc0dd'; // NEED TO SWITCH TO ENRIVONMENT VARIABLE
const authToken = '43b0d52e9126d543d939c40c1104a976'; // NEED TO SWITCH TO ENRIVONMENT VARIABLE
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: "Quick! Daddy's Home Cooking has just released a new recipe #yum",
     from: '+12487800071',
     to: '+33631292338'
   })
  .then(message => console.log(message.sid));
