let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	let response = {
          'statusCode': 200,
          'headers': {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          },
          'body': JSON.stringify({
              'Data': 'Hello'
          }),
          'isBase64Encoded': false
      };
      callback(null, response);
}