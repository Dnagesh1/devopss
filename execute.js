exports.handler = async function(event) {
    const body = JSON.parse(event.body);
    const code = body.code;
    let output;
    try {
        output = eval(code); // Execute the code
    } catch (error) {
        output = error.toString(); // Capture any errors
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ output }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
};
