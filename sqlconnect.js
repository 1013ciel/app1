//浏览器不支持require函数,所以无法进行后续数据库的操作
var mysql = require("mysql");

var connection = mysql.createConnection({
	host:'cdb-aafg9k09.gz.tencentcdb.com',
	user:'root',
	password:'hdd12345678',
	database:'focus',
	port:10141
})

connection.connect();
// 增
function addUser(){
	var userInsertSql='INSERT INTO user(name,psw) VALUES(?,?)';
	var userInsertSql_Params=['mary','0101mary']
	connection.query(userInsertSql,userInsertSql_Params,function(err,result){
		if(err)
			console.log('[INSERT ERR]-',err.message);
		console.log(result);
	})
}addUser()

