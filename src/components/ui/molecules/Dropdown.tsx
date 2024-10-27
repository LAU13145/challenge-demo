'use client'

import { AmountData } from '@/src/types'
import { CustomFlowbiteTheme, Label, Select } from 'flowbite-react'
import { SetStateAction } from 'react'

const customTheme: CustomFlowbiteTheme['select'] = {
  field: {
    base: 'block w-full text-greyscale500 dark:text-greyscale_300',
    select: {
      base: 'md:h-[46px] block w-full border disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue_200 border-greyscale_300 focus:ring-0 focus:border-primaryColmena dark:focus:border-primaryColmena dark:hover:border-blue_200 focus:text-greyscale500 dark:text-greyscale_300',
      colors: {
        active: 'border-primaryColmena text-greyscale500',
      },
      withIcon: {
        on: 'pl-8',
        off: '',
      },
    },
    icon: {
      svg: 'w-4 h-4 text-greyscale500 mt-3 md:mt-[14px]',
    },
  },
}

interface Props {
  dOptions?: AmountData[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dValue?: string | any
  dHtmlFor: string
  // eslint-disable-next-line no-unused-vars
  dOnChange: SetStateAction<any>
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

export const DropDown = ({ dOptions, dValue, dOnChange, dError, dLabelText, dHtmlFor, testid, dIcon }: Props) => {
  return (
    <div className={`mt-4`} id='select'>
      <Label htmlFor={dHtmlFor} value={dLabelText} className={dError ? '!text-sm !font-bold !text-error_200' : '!text-sm !font-bold !text-greyscale500'} />

      <Select id={dHtmlFor} required data-testid={testid} onChange={(e) => dOnChange!(e)} value={dValue} icon={dIcon} theme={customTheme} color='active'>
        <option value={dValue} hidden disabled>
          {dValue}
        </option>

        {dOptions?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </div>
  )
}
