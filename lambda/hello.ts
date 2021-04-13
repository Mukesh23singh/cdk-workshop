exports.handler = async (event: any, context: any) => {
    return {
        statusCode: 200,
        body: `Hello, CDK! You've hit /`,
    };
};
