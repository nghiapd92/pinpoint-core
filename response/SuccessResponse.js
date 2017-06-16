let Response = require("./Response");

module.exports = class SuccessResponse extends Response{
	constructor(message, responseObject){
		super();
		
		if(message) this.message = message;
		if(responseObject) this.response = responseObject;

		return this.toObject();
	}
}