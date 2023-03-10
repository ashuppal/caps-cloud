const clientSqs = require('@aws-sdk/client-sqs');
const { SQSClient } = clientSqs;

const REGION = 'us-west-2';
const sqsClient = new SQSClient({region: REGION});

const QUEUES = {
  pickup: 'https://sqs.us-west-2.amazonaws.com/883464615084/pickup.fifo',
};

module.exports = { sqsClient, QUEUES };