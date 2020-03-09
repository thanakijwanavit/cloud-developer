const data = [
    {
        id: '1',
        name: 'DOgs',
        description: 'Only dog images here'
    },
    {
        id: '2',
        name: 'DOgs',
        description: 'Only dog images here'
    },
    {
        id: '3',
        name: 'DOgs',
        description: 'Only dog images here'
    },
    {
        id: '4',
        name: 'DOgs',
        description: 'Only dog images here'
    },
]



exports.handler = async (event) => {
    return {
        statusCode : 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            items:data
        })
    }
}
