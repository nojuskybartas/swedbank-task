import { SearchIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

function Navbar() {
   

    return (
        <div className="screen-dim lg:filter-none main-grid-item">
            <ul className="nb-list">
                <li className='nb-item lg:flex-none hidden lg:flex'>
                    <HomeIcon className='w-7 h-7'/>
                </li>
                <li className='nb-item'>
                    <p>Everyday banking</p>
                </li>
                <li className='nb-item'>
                    <p>Cards</p>
                </li>
                <li className='nb-item lg:sb-color'>
                    <p>Loan, leasing</p>
                </li>
                <li className='nb-item'>
                    <p>Savings, Investments</p>
                </li>
                <li className='nb-item'>
                    <p>Pension</p>
                </li>
                <li className='nb-item'>
                    <p>Insurance</p>
                </li>
                <li className='nb-item lg:flex-none hover:bg-white flex justify-around items-stretch'>
                    <input placeholder="search" className="mr-auto cursor-text w-full h-full bg-transparent lg:hidden"></input>
                    <SearchIcon className='w-7 h-7'/>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
