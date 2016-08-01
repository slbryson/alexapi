/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.320ba7cb8ae2433d8cf5323f802d2d52',
    clientSecret: 'b6e823a6b4258c0c19cd39966c551160e5fb85ef476e7589cdd98cf02a97fb80',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/pi/Downloads/alexa-avs-raspberry-pi/samples/javaclient/certs/server/node.key',
    sslCert: '/home/pi/Downloads/alexa-avs-raspberry-pi/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/pi/Downloads/alexa-avs-raspberry-pi/samples/javaclient/certs/ca/ca.crt',
    products: {
        "AlexaBryson": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
