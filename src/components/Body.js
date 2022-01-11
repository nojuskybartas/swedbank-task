import { ChevronRightIcon } from "@heroicons/react/solid"
import Form from "./Form"
import Intro from "./Intro"

function Body() {
    return (
        <div className="bg-[#e7d6bc80] flex flex-col justify-center items-center">
            <div className="main-grid-item">
                <Intro/>
                <Form/>
            </div>
            
            
        </div>
        
    )
}

export default Body
