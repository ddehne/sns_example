// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'REGION'});

// Create publish parameters
var params = {
  Message: 'Hello Bootcamp!!!', /* required */
  TopicArn: 'MY_TOPIC_ARN'
};

// Create promise and SNS service object
const snsPromise = new AWS.SNS({
    accessKeyId: 'accessKeyId', secretAccessKey: 'secretAccessKey', region: 'region'
}).publish(params).promise();
// Handle promise's fulfilled/rejected states
snsPromise.then(
  function(data) {
    console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });