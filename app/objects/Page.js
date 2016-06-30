function Page(data, callback) {
    var defaults = {
    	title:"Node Default"
    };
    data.res.render(data.path, Object.assign(data.config, defaults), callback);
}

module.exports = function(){
    return Page;
};