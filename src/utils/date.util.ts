// Una funcion simple para formatear la fecha a un estandar
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};
