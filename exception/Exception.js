class Exception extends Error{
	constructor(code, message, traceMessage, responseObject){
		super(message);

		this.name = this.constructor.name;
		this.code = code;
		this.message = message;
		this.traceMessage = traceMessage;
		this.responseObject = responseObject;

		this.ppException = true;

		console.log(`-------<Exception>-------`);
		console.log(`Code: ${this.code} | Message: ${this.message}\n`);
		console.log(`<---- ${new Date} ---->\n\n`)
		console.log(this.stack);
		console.log(`-------</Exception>-------`);
	}

	toObject(){
    return {
      code 			: this.code,
      message 	: this.message,
      response 	: this.responseObject
    }
  }

	static parse(err){
		if(err.ppException) return err

		let e = (err.constructor.name == "MongooseError" || err.name == "MongoError") 
								? new this(2000, "Database Error", err.code + " | " + err.message)
								: new this(9999, "Database Error", err.message);

		return e;
	}
}

module.exports = Exception;