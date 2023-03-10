import { useField } from 'formik'
import React from 'react'
import {FormField,Label} from 'semantic-ui-react'

export default function ASCTextInput({...props}) {
    // console.log(props)
    const [field,meta] = useField(props)
    // console.log(meta.error)
    return (
        <div style={{marginTop:'20px',marginBottom:'20px'}}>
            <FormField >
                <input className='inp' placeholder={props.placeholder} {...field} {...props} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ):null}
            </FormField>


        </div>
    )
}
