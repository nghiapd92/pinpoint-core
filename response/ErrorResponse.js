let Response = require("./Response");

module.exports = class ErrorResponse extends Response{
	constructor(_error){
		super();
		let error =  Exception.parse(_error);

		this.code = error.code;
		this.message = error.message;
		this.response = error.responseObject;

		return this.toObject();
	}
}