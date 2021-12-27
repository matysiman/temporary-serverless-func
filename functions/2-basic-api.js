// domain/.netlify/1-hello

const items = require('../assets/data.js')

exports.handler = async (event, context) => {
    console.log(context)
    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}