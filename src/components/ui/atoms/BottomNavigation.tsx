import { FC } from 'react'
import { Button } from './Button'

interface Props {
  className?: string
  disableButtonContinue: boolean
  handleContinue: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string
  text: string
  testId?: string
  width?: string
}

export const BottomNavigation: FC<Props> = ({ disableButtonContinue, handleContinue, text, testId = 'continueBtn', width = 'w-full', className, size }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Button
        className={className}
        color={disableButtonContinue ? 'inactive' : 'active'}
        disabled={disableButtonContinue}
        handleClick={() => handleContinue()}
        size={size}
        testId={testId}
        text={text}
        width={width}
      />
    </div>
  )
}
