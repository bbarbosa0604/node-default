module.exports = function(app) {
    
    app.get("/app.js", function(req, res) {
        
        var page = new app.objects.Page({
        	req: req,
        	res: res,
        	path: "home/index",
        	config: {}
        });
    
    });
    
}