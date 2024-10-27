export const formattedNum = (value: string) => {
  const cleanNum = value.replace(/\D+/g, '')

  const formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(Number(cleanNum))

  return formattedValue
}
