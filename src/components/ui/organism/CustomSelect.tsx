import { Select, SelectItem } from '@nextui-org/react'

interface SelectProps {
  data: any[]
}

export const CustomSelect = ({ data }: SelectProps) => {
  return (
    <Select isRequired label='Plazo' placeholder='Selecciona un plazo' defaultSelectedKeys={['']} className='max-w-xs'>
      {data.map((option) => (
        <SelectItem key={option.id}>{option.name}</SelectItem>
      ))}
    </Select>
  )
}
