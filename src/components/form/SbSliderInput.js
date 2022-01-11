import { Field, useField } from "formik"
import { useEffect, useState } from "react"
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';

const SbSliderInput = ({ label, labelLeft, labelRight, step, min, max, ...props }) => {

    const [field, meta, helpers] = useField(props)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    function snapInRange(value) {
        helpers.setValue(Math.round(value / step) * step)
        if (value < min) {
            helpers.setValue(min)
        } else if (value > max) {
            helpers.setValue(max)
        }
    }

    // function formatInputToMoney(value) {
    //     helpers.setValue(`${field.name} €`);
    // }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

    return (
        <div className="sb-form-item-text md:flex md:items-center"> 
            <p className='sb-form-label md:mt-[-4%]'>{label}</p>
            {meta.error ? <p className='sb-error-text'>{meta.error}</p> : null}
            <div className='md:w-full'>
                <div className='flex rounded-md'>
                    <div className='sb-form-amount-adjust-button rounded-l-md md:hidden' onClick={() => helpers.setValue(field.value-step, true)}><MinusIcon className='sb-form-amount-adjust-button-icon'/></div>
                    <Field type={screenWidth >= 768 ? 'range' : 'number'} min={min} max={max} name={field.name} validate={snapInRange} className="sb-form-input text-center rounded-none border-l-0 border-r-0"/>
                    <div className='sb-form-amount-adjust-button rounded-r-md md:hidden' onClick={() => helpers.setValue(field.value+step, true)}><PlusIcon className='sb-form-amount-adjust-button-icon'/></div>
                </div>
                <div className='flex justify-between'>
                    <p>{labelLeft}</p>
                    <p>{labelRight}</p>
                </div>
            </div>
        </div>
    )
}

export default SbSliderInput