function SbApplicationButtons() {
    return (
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 text-white text-sm">
            <button type="submit" className="px-4 py-3 bg-[#eb7c14] rounded-sm hover:bg-[#f36507]">Fill in the application</button>
            <button type="submit" className="px-4 py-3 bg-[#2597b9] rounded-sm hover:bg-[#1b6b83]">Apply as co-applicant</button>
        </div>
    )
}

export default SbApplicationButtons
