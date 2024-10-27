import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Button as CustomButton } from 'flowbite-react'

interface Props {
  icon?: string
  handleClick: () => void
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  color:
    | 'active'
    | 'cyan'
    | 'inactive'
    | 'gray'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'successFile'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'select'
    | 'basic'
    | string

  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string
  testId: string
  text: string
  width?: string
}

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'w-full mt-4 outline-none focus:outline-none focus:ring-0 focus:ring-transparent cursor-pointer',
  color: {
    active:
      'bg-blue-300 border-2 border-primary hover:border-primary hover:border hover:!bg-blue-400 focus:border-secondary focus!bg-third text-greyscale500 !font-bold dark:bg-third dark:focus:ring-secondary hover:bg-secondary dark:hover:bg-secondary cursor-pointer',
    inactive:
      'disabled:!bg-greyscale_200 disabled:hover:border disabled:hover:border-greyscale_100 disabled:!text-greyscale_100 disabled:font-bold disabled:opacity-100 text-sm disabled:hover:bg-greyscale_200 cursor-pointer',
  },
  inner: {
    base: 'flex items-center justify-center',
  },
  size: {
    xxs: 'px-0 py-1 text-sm',
    xs: 'px-2 py-2 text-sm',
    sm: 'px-3 py-[0.535rem] text-sm',
    md: 'px-4 py-[0.657rem] text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-2.5 text-2xl',
  },
}
export const Button = ({ className, color, disabled = false, handleClick = () => {}, iconLeft, iconRight, size = 'sm', text = '', testId, width }: Props) => {
  return (
    <div className={`flex ${width} flex-wrap gap-2`}>
      <CustomButton theme={customTheme} onClick={handleClick} disabled={disabled} data-testid={testId} color={color} size={size} className={className}>
        <div className='flex items-center'>
          {iconLeft}
          <div className='self-center font-bold'>{text}</div>
          {iconRight}
        </div>
      </CustomButton>
    </div>
  )
}
