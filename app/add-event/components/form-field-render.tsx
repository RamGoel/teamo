import React from 'react'
import { Input } from '@/components/ui/input'
import { DropdownMenu, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { FormFieldType } from '@/app/add-event/schema'

export type FieldType = 'TEXT' | 'DATE' | 'DROPDOWN' | 'NUMBER'

const FormFieldRenderer = ({
    type,
    error,
    data,
    value,
    onChange
}: {
    type: FieldType,
    error: string,
    value: any,
    onChange: any,
    data: FormFieldType
}) => {
    return (
        <div className='py-2 h-[90px]'>
            <label className='text-sm font-semibold h-[20px]'>{data.title}</label>
            <div className='my-1'>
                {
                    type === 'TEXT' ? <Input name={data.dataKey} onChange={onChange} value={value} type='text' />
                        : type === 'NUMBER' ? <Input name={data.dataKey} onChange={onChange} value={value} type='number' />
                            : type === 'DROPDOWN' ? <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Input value={value} type='text' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {
                                        data?.options?.map((item: string) => {
                                            return <DropdownMenuItem onClick={onChange} key={item}>{item}</DropdownMenuItem>
                                        })
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu> : <Input name={data.dataKey} onChange={onChange} value={value} type='date' />
                }
                {error ? <p className='text-xs mt-1 text-red-500'>{error}</p> : null}
            </div>
        </div>
    )
}

export default FormFieldRenderer