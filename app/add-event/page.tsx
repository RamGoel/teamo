"use client"
import React from 'react'
import { Formik } from 'formik'
import { FormFieldType, formFieldsData, formSchema } from './schema'
import FormFieldRenderer from '@/app/add-event/components/form-field-render'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { addNewEvent } from '../dashboard/dashboard.actions'
import { useRouter } from 'next/navigation'
const AddEvent = () => {
    const router=useRouter()
    const onSubmit = async(values:any) => {
        addNewEvent(values, () => {
            router.push('/dashboard');
        })
    }
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='w-full md:w-1/3 lg:w-1/2'>
                <div className='my-3'>
                    <h1 className='text-3xl font-semibold'>Add Event</h1>
                    <p>Please fill this form to add an event </p>
                </div>
                <Formik initialValues={{
                    eventName: "",
                    eventLocation: '',
                    eventDate: new Date(),
                    eventURL: '',
                    registrationDeadline: new Date()
                }} validationSchema={formSchema} onSubmit={onSubmit}>
                    {({ errors, values, handleSubmit, handleChange }: { errors: any, values: any, handleChange: Function, handleSubmit: any }) => {
                        return <div>
                            {
                                formFieldsData.map((item: FormFieldType) => {
                                    return <FormFieldRenderer
                                        error={errors[item.dataKey]}
                                        value={values[item.dataKey]}
                                        key={item.title}
                                        onChange={handleChange}
                                        type={item.fieldType}
                                        data={item}
                                    />
                                })
                            }
                            <Button onClick={handleSubmit} className='w-full py-1 mt-3'>
                                Submit
                            </Button>
                        </div>
                    }}
                </Formik>
            </div>
            <Image
                className="hidden md:block w-1/2"
                src={require('@/media/events.png')}
                alt='events-image'
                width={1000}
                height={1000}
            />
       </div>
    )
}

export default AddEvent