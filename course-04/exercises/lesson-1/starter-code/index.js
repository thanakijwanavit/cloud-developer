const AWS = require('aws-sdk')
const axios = require('axios')

const serviceName = process.env.SERVICE_NAME
const url = process.env.URL

const cloudwatch = new AWS.CloudWatch();

exports.handler = async (event) => {
  let endTime
  let requestWasSuccessful

  const startTime = timeInMs()
  try {
      await axios.get(url)
      requestWasSuccessful = true

  } catch (e) {
      requestWasSuccessful = false
   /* handle error */
  } finally {
      endTime = timeInMs()
  }


  const totaltime = endTime - startTime


  // Example of how to write a single data point
  await cloudwatch.putMetricData({
    MetricData: [
      {
        MetricName: 'invocationSuccess', // Use different metric names for different values, e.g. 'Latency' and 'Successful'
        Dimensions: [
          {
            Name: 'ServiceName',
            Value: serviceName
          }
        ],
        Unit: 'Count', // 'Count' or 'Milliseconds'
        Value: requestWasSuccessful ? 1 : 0 // Total value
      },
      {
        MetricName: 'timeTaken', // Use different metric names for different values, e.g. 'Latency' and 'Successful'
        Dimensions: [
          {
            Name: 'ServiceName',
            Value: serviceName
          }
        ],
        Unit: 'Milliseconds', // 'Count' or 'Milliseconds'
        Value: totaltime// Total value
      }

    ],
    Namespace: 'Udacity/serveless-lesson0'
  }).promise()

  // TODO: Record time it took to get a response
  // TODO: Record if a response was successful or not
}

function timeInMs() {
  return new Date().getTime()
}
