let defaultLangData = require("./framework.lang.json");

class LanguageProvider{
	constructor(){
		this.langData = {};
		this.load(defaultLangData);
	}

	load(data){
		let tempLangData = data;
		for(let langKey of Object.keys(tempLangData)){
			this.langData[langKey] = tempLangData[langKey];
		}
	}

	getLanguageData(){
		return this.langData;
	}
}

module.exports = new LanguageProvider;