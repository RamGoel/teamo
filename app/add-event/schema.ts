import { FieldType } from "@/app/add-event/components/form-field-render"
import * as yup from "yup"
export type FormFieldType = {
    title: string,
    options?: string[],
    dataKey: string,
    fieldType:FieldType
}
const formSchema = yup.object({
    eventName: yup
        .string()
        .min(2, 'Min 2 letters')
        .max(50, 'Max 50 letters')
        .required('Event Name is required')
        .typeError('Invalid Event Name'),
    eventLocation: yup
        .string()
        .min(2, 'Min 2 letters')
        .max(50, 'Max 50 letters')
        .required('Event Location is required')
        .typeError('Invalid Location'),
    eventDate: yup
        .date()
        .min(new Date(), "Should be later than today")
        .required('Event Date is required'),
    registrationDeadline: yup
        .date()
        .min(new Date(), "Should be later than today")
        .required('Registration Deadline is required'),
    eventURL: yup
        .string()
        .url('Please enter a valid URL')
        .required('URL is required')
        .typeError('Invalid URL')
})


const formFieldsData:FormFieldType[] = [
    {
        title: 'Event Name',
        dataKey: 'eventName',
        fieldType:'TEXT'
    },
    {
        title: 'Event Location',
        dataKey: 'eventLocation',
        fieldType:'TEXT'
    },
    {
        title: 'Event Date',
        dataKey: 'eventDate',
        fieldType:'DATE'
    },
    {
        title: 'Registration Deadline',
        dataKey: 'registrationDeadline',
        fieldType:'DATE'
    },
    {
        title: 'Event Website URL',
        dataKey: 'eventURL',
        fieldType:'TEXT'
    },
]


export {formSchema, formFieldsData}