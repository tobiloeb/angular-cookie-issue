
const PROXY_CONFIG = [
    {
        context: [
            '/backend/handshake',
        ],
        target: 'http://service',
        bypass: function (req, res, proxyOptions) {
            console.log('handshake');
            res.setHeader('set-cookie','X-CSRF=abc; Domain=localhost');
            res.end();
            return true;
        },
    },
    {
        context: [
            '/backend/call',
        ],
        target: 'http://service',
        bypass: function (req, res, proxyOptions) {
            console.log('call');

            res.end()
            return true;
        },
    }
]

module.exports = PROXY_CONFIG;
