'use client'

import { CustomFlowbiteTheme, Label, Select } from 'flowbite-react'
import { ChangeEvent } from 'react'

const customTheme: CustomFlowbiteTheme['select'] = {
  field: {
    select: {
      base: 'md:h-[46px] block w-full border disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue_200 border-greyscale_300 focus:ring-0 focus:border-primaryColmena dark:focus:border-primaryColmena dark:hover:border-blue_200 focus:text-greyscale300 dark:text-greyscale_100',
      colors: {
        primary:
          'bg-white hover:border-blue_200 border-greyscale_300 focus:ring-0 focus:border-primaryColmena dark:focus:border-primaryColmena dark:hover:border-blue_200 focus:text-greyscale300 dark:text-greyscale_100',
        failure:
          'border-error_200 bg-error_500 text-error_200 placeholder-error_200 focus:border-error_200 focus:ring-0 dark:border-error_200 dark:bg-error_500 dark:focus:border-error_200',
        active: 'border-primaryColmena text-greyscale300',
      },
      withIcon: {
        on: 'pl-8',
        off: '',
      },
    },
    icon: {
      svg: 'w-4 h-4 text-greyscale300 mt-3 md:mt-[14px]',
    },
  },
}

interface Props {
  addStyle?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dOptions: [] | any[]
  dValue?: string
  dHtmlFor: string
  // eslint-disable-next-line no-unused-vars
  dOnChange: (e: ChangeEvent<HTMLSelectElement>) => void
  dError?: boolean
  dLabelText?: string
  testid?: string
  dIcon?: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
}

export const DropDown = ({ addStyle, dOptions, dValue, dHtmlFor, dOnChange, dError, dLabelText, testid, dIcon }: Props) => {
  return (
    <div className={`${addStyle} mt-4`} id='select'>
      (
      <Label htmlFor={dHtmlFor} value={dLabelText} className={dError ? '!text-sm !font-bold !text-error_200' : '!text-sm !font-bold !text-greyscale300'} />
      <form className='mt-2'>
        <Select id={dHtmlFor} required data-testid={testid} onChange={(e) => dOnChange!(e)} value={dValue} icon={dIcon} theme={customTheme}>
          <option value={dValue} hidden disabled>
            {dValue}
          </option>

          {dOptions?.map((el, index) => (
            <option key={el.id || el.code || index} value={el.id || el.code} hidden={el.id === 0}>
              {el.name}
            </option>
          ))}
        </Select>
      </form>
    </div>
  )
}
