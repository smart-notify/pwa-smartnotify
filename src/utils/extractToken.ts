// Função para extrair o token do cookie
export const extractToken = () => {

  // Extrai o token do cookie
  const extractToken = document.cookie.split('=')[1];

  // Retira o ponto e vírgula do final do token
  const tokenValue = extractToken.replace(/;/g, "");

  // Retira o token 
  const token = tokenValue.split(' ')[0];

  // Retorna o token
  return { token };
}