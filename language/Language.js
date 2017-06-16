let LanguageProvider = require("./LanguageProvider");

module.exports = (attr, ...args) => {

	langData = LanguageProvider.getLanguageData();
  let str = langData[attr];

  if(args.length > 0){
    for(let i = 1; i <= args.length; i++){
      let arg = args[i-1];
      str = str.replace(new RegExp("\\$\\{"+ i +"\\}", "g"), arg);
    }
  }

  return str;
}