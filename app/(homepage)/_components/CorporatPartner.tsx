import HeaderTitle from '@/components/headerTitle'
import React from 'react'
import Marquee from "react-fast-marquee";
const CorporatPartner = () => {
    return (
        <div className='container mx-auto space-y-20'>
            <HeaderTitle title='Our Corporate Partner' />
            <div>
                <div className="w-full grayscale">
                    <Marquee autoFill>
                        <div className="h-8 md:h-10 flex gap-6 md:gap-12 pl-12 items-center justify-between w-full">
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726056005/brac_gml3uw.png" alt="" />
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726056005/basundhara_a9k5u5.png" alt="" />
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726056004/square_qtep2m.png" alt="" />
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726056004/grameenphone_j5duhc.png" alt="" />
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726066339/aci-group-logo_y7olyg.png" alt="" />
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726056004/pran_qwltcb.png" alt="" />
                            <img className="h-full" src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726056004/beximco_sim87y.png" alt="" />
                        </div>
                    </Marquee>

                </div>
            </div>
        </div>
    )
}

export default CorporatPartner