
const stringtoArray = function (string,separator){
	return string.split(separator).map(element => element.trim())	
}
module.exports = stringtoArray