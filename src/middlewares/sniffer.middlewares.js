module.exports = (app) => {
    function sniffer(request, response, next) {
        const { method, url } = request;
        
        console.log('[' + method + '] ' + url);

        return next();
    }

    app.use(sniffer);
}