import { ChevronRightIcon } from '@heroicons/react/outline';
import { Formik, Form } from 'formik';
import SbRadioBox from './form/SbRadioBox.js';
import SbCheckBox from './form/SbCheckBox.js';
import SbInputField from './form/SbInputField.js';
import SbSliderInput from './form/SbSliderInput.js';
import SbCalcOutput from './form/SbCalcOutput.js';
import SbApplicationButtons from './SbApplicationButtons.js';
import SbFootlink from './SbFootlink.js';

const SbForm = () => {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return (

        <div className="body-item flex flex-wrap-reverse justify-center ">
            <div className="w-[100%] h-[100%] bg-white p-2 md:p-4 rounded-md">
                <div className="bg-blue-100 rounded-md">
                    <div className="py-5 space-y-3 p-5">
                        <h1 className="font-bold text-2xl">Find out possibilities</h1>                   
                        <Formik
                        initialValues={{
                            coapplicant: false,
                            dependant: false,
                            dependantCount: null,
                            obligations: false,
                            resOutstandingHome: null,
                            creditLimit: null,
                            resOutstandingLease: null,
                            resOutstandingCredits: null,
                            monthlyInstalmentExisting: null,
                            monthlyIncome: 0,
                            downPayment: 0,
                            loanAmount: 25000,
                            loanTerm: 240,
                        }}
                        onSubmit={async (values, initialValues) => {
                            await sleep(500);
                            values.dependantCount = values.dependant ? values.dependantCount : initialValues.dependantCount
                            values.resOutstandingHome = values.obligations ? values.resOutstandingHome : initialValues.resOutstandingHome
                            values.creditLimit = values.obligations ? values.creditLimit : initialValues.creditLimit
                            values.resOutstandingLease = values.obligations ? values.resOutstandingLease : initialValues.resOutstandingLease
                            values.resOutstandingCredits = values.obligations ? values.resOutstandingCredits : initialValues.resOutstandingCredits
                            values.monthlyInstalmentExisting = values.obligations ? values.monthlyInstalmentExisting : initialValues.monthlyInstalmentExisting
                            
                            alert(JSON.stringify((values), null, 2));
                        }}
                        validateOnChange={false}    
                        >
                        {({ values }) => ( 
                        <Form className=' flex flex-wrap'>
                            <div className='flex-1 md:ml-[20%] md:mr-10'>
                                <SbCheckBox label="Applying with a co-applicant" name="coapplicant"/>
                                <SbCheckBox label="More than one dependant in family" name="dependant"/>
                                
                                {values.dependant && 
                                <div className='flex flex-col mb:flex-row'>
                                    <p className='text-gray-500 text-sm'>Dependants in family</p>
                                    <div className='flex flex-row space-x-3'>
                                    <SbRadioBox name="dependantCount" value="One" label="1"/>
                                    <SbRadioBox name="dependantCount" value="Two/more" label="2 or more"/>
                                    </div>
                                </div>}
        
                                <SbCheckBox label="I have existing loan obligations (incl. in Swedbank)" name="obligations"/>

                                <SbInputField label='Total monthly income' name='monthlyIncome' showCurrency={true}/>
                                <SbInputField label='Down payment' name='downPayment'/>
                        
                                {values.obligations && 
                                <div>
                                    <SbInputField label='Residual outstanding amount of home financing' name='resOutstandingHome' showCurrency={true}/>
                                    <SbInputField label='Credit card, credit limit' name='creditLimit' showCurrency={true}/>
                                    <SbInputField label='Residual outstanding amount of financing under the lease agreement(s)' name='resOutstandingLease' showCurrency={true}/>
                                    <SbInputField label='Residual outstanding amount of consumer credits' name='resOutstandingCredits' showCurrency={true}/>
                                    <SbInputField label='Monthly instalment under existing financial obligations' name='monthlyInstalmentExisting' showCurrency={true}/>
                                </div>}
        
                                <SbSliderInput label="Choose loan amount" labelLeft="10000 €" labelRight="200000 €" name="loanAmount" min={10000} max={200000} step={100}/>
                                <SbSliderInput label="Choose loan term" labelLeft="6 months" labelRight="30 years" name="loanTerm" min={6} max={360} step={6}/>
                            </div>
                            <div className='md:w-1/3'>
                                <div className='py-1 space-y-3'>
                                    <h2 className='font-bold text-lg'>Insure your</h2>
                                    <SbCalcOutput label="Home" value={values.loanAmount/1548}/>
                                    <SbCalcOutput label="Life" value={values.loanAmount/8321}/>
                                    <SbCalcOutput label="Loan Payments" value={values.loanAmount/491}/>
                                </div>

                                <div className='py-1 space-y-3'>
                                    <h2 className='font-bold text-lg'>Loan</h2>
                                    <SbCalcOutput label="Monthly loan payment" value={values.loanAmount/values.loanTerm*12}/>
                                    <SbCalcOutput label="Maximum loan amount" value={values.loanAmount/values.loanTerm*3}/>
                                    <SbCalcOutput label="Maximum home price" value={values.loanAmount/values.loanTerm*34}/>
                                </div>

                                <SbApplicationButtons/>

                                <SbFootlink label="Compare different loan options"/>
                                <p>The data provided by the calculator is fake, and it gives you an unreal picture of what could be the size of your monthly payments for consumer credit.</p>
                            </div>
                        </Form>)} 
                        </Formik>
                    </div>
                </div>
                <p className='text-xs p-1 text-[#8d8d8d]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}



export default SbForm