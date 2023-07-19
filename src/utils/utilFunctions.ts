// Função para extrair o token do cookie
const utilFunctions = {
  // Função para extrair o token do cookie  
  extractToken: () => {
    const cookie = document.cookie;
    const token = cookie.match(/token=([^;\n]+)/);
    if (token && token[1]) {
      return token[1];
    }
    return null;
  },

  // Função para extrair o tipo de condomínio do cookie
  extractCondominiumType: () => {
    const cookie = document.cookie;
    const type = cookie.match(/condominiumType=([^;\n]+)/);
    if (type && type[1]) {
      return type[1];
    }
    return null;
  },

  // Função para extrair o nome do condomínio do cookie
  extractCondominiumName: () => {
    const cookie = document.cookie;
    const name = cookie.match(/condominiumName=([^;\n]+)/);
    if (name && name[1]) {
      return name[1];
    }
    return null;
  }

};

export default utilFunctions;
