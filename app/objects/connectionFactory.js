var mysql  = require('mysql');

function conn(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Banco1020',
		database: 'fastpedidos'
	});
}

module.exports = function() {
	return conn;
}