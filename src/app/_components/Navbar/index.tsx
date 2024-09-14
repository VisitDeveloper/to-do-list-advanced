import React from 'react'
import Link from 'next/link'
import { Diagram, Home, Polygon, WalletMinus } from 'iconsax-react'
function Navbar() {
    return (
        <div className='flex flex-row justify-between items-center bg-[#0F8B8D] px-4 text-xl font-light h-16 rounded-br-md rounded-bl-md'>
            <div className='flex flex-row gap-4'>

                <Link href={'/'} className='text-white flex flex-row gap-1 items-center'>
                    <Home size={'20'} color="white " />
                    <span>
                        Home
                    </span>
                </Link>

                <Link href={'/'} className='text-white flex flex-row gap-1 items-center'>
                    <WalletMinus size={'20'} color="white " />
                    <span>
                        Demo
                    </span>
                </Link>

                <Link href={'/advanced'} className='text-white flex flex-row gap-1 items-center'>
                    <Diagram size={'20'} color="white" />
                    Advanced
                </Link>
            </div>

            <Link href={'/'}>
                <Polygon size="40" color="white"/>
            </Link>
        </div>
    )
}
export default Navbar