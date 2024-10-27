import { useRouter } from 'next/navigation'
import { useAppSelector } from '../redux'
import { regEmail, regPassword } from '../utils'

export const useAppPage = () => {
  const amount = useAppSelector((state) => state.amount)

  const router = useRouter()

  const enableButton = () => {
    return amount.email.length >= 6 && regEmail.test(amount.email) && amount.password.length >= 8 && regPassword.test(amount.password)
  }

  const handleContinue = () => {
    router.push('/formulario')
  }

  return {
    enableButton,
    handleContinue,
  }
}
