import { Field, useField } from "formik"

const SbCheckBox = ({ label, ...props }) => {
    
    const [field, meta, helpers] = useField(props)

    return (
        <div className="sb-form-item">
            <Field type="checkbox" name={field.name} className="w-8 h-8"/>
            <p>{label}</p>
        </div>
    )
}

export default SbCheckBox