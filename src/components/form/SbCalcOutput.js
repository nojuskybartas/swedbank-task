const SbCalcOutput = ({label, value}) => {

    return (
        <div className='py-1 space-y-3'>
            <div className='flex justify-between'>
                <p>{label}</p>
                <p className='flex'>From <p className='font-bold px-1'>{Math.round(((value) + Number.EPSILON) * 100) / 100}</p> €</p> 
                                                                        {/* this is a random value */}
            </div>
            <hr className='border-1 border-gray-300'/>
        </div>
    )
}

export default SbCalcOutput