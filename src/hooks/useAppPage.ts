import { useRouter } from 'next/navigation'
import { useAppSelector } from '../redux'
import { regEmail, regPassword } from '../utils'
import { amountData } from '../mocks/data'

export const useAppPage = () => {
  const amount = useAppSelector((state) => state.amount)

  const router = useRouter()

  const enableButton = () => {
    return amount.email.length >= 6 && regEmail.test(amount.email) && amount.password.length >= 8 && regPassword.test(amount.password)
  }

  const handleContinue = () => {
    router.push('/formulario')
  }

  const data = amountData.map(({ id, min, max, name, features }) => ({
    id,
    min,
    max,
    name,
    features,
  }))
  const selectedAmount = amount.amount !== '' ? data.find((value) => value.id.toString() === amount.amount)?.name : 'Selecciona un plazo'

  const featuresData = data.find((item) => item.id === Number(amount.amount))?.features.map((feature) => feature)
  const selectedPeriod = amount.period !== '' ? featuresData?.find((days) => days.id.toString() === amount.period)?.name : 'Selecciona un periodo'

  const min = data.find((item) => item.id === Number(amount.amount))?.features.map((feature) => feature.min)
  const max = data.find((item) => item.id === Number(amount.amount))?.features.map((feature) => feature.max)

  return {
    enableButton,
    handleContinue,
    data,
    selectedAmount,
    featuresData,
    selectedPeriod,
    min,
    max,
  }
}
