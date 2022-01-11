import { Field, useField } from "formik"

const SbRadioBox = ({ label, value, ...props }) => {

    const [field, meta, helpers] = useField(props)

    return (
        <div className='sb-form-item'>
            <Field type="radio" name={field.name} value={value} className="w-8 h-8"/>
            <p>{label}</p>
        </div>
    )
}

export default SbRadioBox