import { Field, useField } from "formik"

const SbInputField = ({ label, showCurrency, ...props }) => {
   
    const notZero = value => {
        if (Number(value) < 1) {
            return 'This value can not be zero' 
        }
    }

    const [field, meta, helpers] = useField(props)
    
    return (
        <div className="sb-form-item-text md:flex md:items-center"> 
            <p className='sb-form-label'>{label}</p>
            {meta.error ? <p className='sb-error-text'>{meta.error}</p> : null}
            <div className='flex space-y-2 md:w-full'>
                <Field type="number" min="0" name={field.name} validate={notZero} className={`sb-form-input md:w-5/12 ${meta.error && 'border-red-700'}`} placeholder="0"/>
                {showCurrency && <p className='absolute md:relative right-0 md:ml-2 mr-16 text-gray-300'>€</p>}
            </div>
        </div>
    )
}

export default SbInputField