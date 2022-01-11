import { Field, useField } from "formik"

const SbCheckBox = ({ label, ...props }) => {
    
    const [field, meta, helpers] = useField(props)

    return (
        <div className="flex justify-start py-2 space-x-2">
            <Field type="checkbox" name={field.name} className="w-8 h-8"/>
            <p className="max-w-[80%]">{label}</p>
        </div>
    )
}

export default SbCheckBox