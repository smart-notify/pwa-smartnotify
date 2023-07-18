// Função para extrair o token do cookie
export const extractToken = () => {
  const cookie = document.cookie;
  const token = cookie.match(/token=([^;\n]+)/);
  if (token && token[1]) {
    return token[1];
  }
  return null;
}