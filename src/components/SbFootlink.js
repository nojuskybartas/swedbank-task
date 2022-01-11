import { ChevronRightIcon } from "@heroicons/react/outline"

function SbFootlink({label}) {
    return (
        <div className="flex flex-row w-fit h-auto text-[#116370] text-sm font-semibold mt-2 mb-2">
            <ChevronRightIcon className="w-4 h-4"/>
            <p className="sb-underline grow">{label}</p>
        </div>
    )
}

export default SbFootlink
