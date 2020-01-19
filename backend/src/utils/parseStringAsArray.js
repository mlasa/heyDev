/**
 * @function stringtoArray
 * @description Converts a string into an array
 * @param  {String} string String which will be converted
 * @param  {String} separator The character used to separate each part of string to be converted
 * @return {[String]}	 An array of strings separated in each point where there is a separator
 */
const stringtoArray = function (string,separator){
	return string.split(separator).map(element => element.trim())	
}
module.exports = stringtoArray