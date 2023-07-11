// Para reaproveitar o tipo de variáveis, podemos criar um arquivo types.ts e exportar os tipos de variáveis que serão utilizadas em mais de um arquivo.

export type ParcelProps = {
  id: string;
  residentName: string;
  residentEmail: string;
  registrationCode: number;
}