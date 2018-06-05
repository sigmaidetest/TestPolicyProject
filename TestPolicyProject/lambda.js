let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	codestar.listProjects({
    maxResults: 0,
    nextToken: 'STRING_VALUE'
}).promise()
  .then(data => {
      console.log('Response -> data:', data);
      let response = {
          'statusCode': 200,
          'headers': {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          },
          'body': JSON.stringify({
              'Data': data
          }),
          'isBase64Encoded': false
      };
      callback(null, response);
  })
  .catch(err => {
      console.log('Response -> error:', err);
      let response = {
          'statusCode': err.statusCode,
          'headers': {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          },
          'body': JSON.stringify({
              'Code': err.code,
              'Message': err.message
          }),
          'isBase64Encoded': false
      };
      callback(null, response);
  });
}