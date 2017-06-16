module.exports = class LanguageProvider{
	static langData = new Object;

	static load(file){
		let tempLangData = require(file);
		for(let langKey of Object.keys(tempLangData)){
			this.langData[langKey] = tempLangData[langKey];
		}
	}

	static translate(attr, ...agrs){
		
	}
}