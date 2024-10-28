import { useRouter } from 'next/navigation'
import { useAppSelector } from '../redux'
import { regEmail, regPassword } from '../utils'
import { amountData } from '../mocks/data'
import { Dispatch, SetStateAction } from 'react'

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

  const validations = (setIsInvalid: Dispatch<SetStateAction<boolean>>, setIsInvalidDay: Dispatch<SetStateAction<boolean>>) => {
    const amountIndex = Number(amount.amount) - 1
    const periodIndex = Number(amount.period) - 1

    const minValueAmount = data[amountIndex]?.min
    const maxValueAmount = data[amountIndex]?.max

    const minValueDay = min?.[periodIndex]
    const maxValueDay = max?.[periodIndex]

    if (
      minValueAmount !== undefined &&
      maxValueAmount !== undefined &&
      Number(amount.amountSelected) >= minValueAmount &&
      Number(amount.amountSelected) <= Number(maxValueAmount)
    ) {
      setIsInvalid(false)
    } else setIsInvalid(true)

    if (minValueDay !== undefined && maxValueDay !== undefined && Number(amount.daySelected) >= minValueDay && Number(amount.daySelected) <= maxValueDay) {
      setIsInvalidDay(false)
    } else setIsInvalidDay(true)
  }

  return {
    enableButton,
    handleContinue,
    data,
    selectedAmount,
    featuresData,
    selectedPeriod,
    min,
    max,
    validations,
  }
}
