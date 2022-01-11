import { ChevronRightIcon } from "@heroicons/react/solid"
import SbApplicationButtons from "./SbApplicationButtons"

function Intro() {
    return (
        <div className="body-item flex flex-wrap-reverse justify-between md:space-x-10">
            <div className="font-bold space-y-3 flex-1">
                <h1 className="sb-color text-3xl font-bold hidden md:inline">Mortgage loan</h1>
                <h1 className="text-3xl font-bold ">There's no place like home!</h1>
                <p>Home loan will be a perfect solution if you need a loan for a new home, serious renovation or construction.</p>
                <ul className="custom-list">
                    <li>Fast application processing</li>
                    <li>Opportunity to pay back earlier and manage your contract via Internet Banking</li>
                    <li><span><span className="sb-color">New!</span> Do not miss the opportunity to use the discount code of real estate companies, with which there will be no one-off loan administration fee. You will receive the discount code from the seller.</span></li>
                </ul>

                <div className="flex text-[#116370] text-sm font-semibold">
                    <ChevronRightIcon className="w-4"/>
                    <p className="sb-underline ">Find out your possibilities</p>
                </div>

                <SbApplicationButtons/>
                <p>Offer is valid from 01.01.2022 until 31.03.2022.</p>
                <p>The loan must be secured by mortgage of real estate acceptable to the bank. Please note, that by using these financing services, you are assuming financial obligations. Improper fulfilment or non-fulfilment of financial obligations may have a negative impact on your credit history and make borrowing more expensive; you also risk losing ownership rights to the mortgaged real estate.</p>
            </div>
            <div className="mt-10 crop">
                <img src="https://www.swedbank.lt/img/private/credit/loans/home/campaign/826x1000_Home_loan_kid.jpg" alt='BE HAPPY!'/>
            </div>
            <h1 className="sb-color text-3xl font-bold md:hidden mr-auto">Mortgage loan</h1>
        </div>
        
    )
}

export default Intro