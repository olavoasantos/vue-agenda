const translatable = {
  'pt-br': require('../../assets/lang/pt-br')
};

export default (
  () => (lang) => {
    const translations = translatable[lang] || {};

    return {
      locale: lang,

      trans: (value) => {
        let translation, scope = translations;
        for(let piece of value.split('.')) {
          if(!(piece in scope)) return value;
          scope = scope[piece];
        }
  
        return scope;
      },

      add(name, value) {
        translations[name] = value;
      }
    }
  }
)()