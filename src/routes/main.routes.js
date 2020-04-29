module.exports = (app) => {
    app.get('/', (request, response) => {
        response.status(200).json({
            'msg': 'Welcome to this application'
        });
    });
}