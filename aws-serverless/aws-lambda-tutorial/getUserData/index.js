'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-2"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-2"});

  const params = {
    TableName: "Users",
    Key: {
      id: "12345"
    }
  }

  try {
    const data = await documentClient.get(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}