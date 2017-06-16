module.exports = class Response{
	constructor(){
		this.code 				= 0;
		this.message 			= "Success";
		this.response     = new Object;
	}

	toObject(){
		return {
			code : this.code,
			message : this.message,
			response : this.response
		}
	}
}