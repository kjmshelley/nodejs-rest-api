require("tls").DEFAULT_ECDH_CURVE = "auto";

const app = require('./src/app');

/* start the app */
app.listen(app.get('port'), () => console.log('api server started...'));
