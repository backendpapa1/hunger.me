import {FaCartShopping} from "react-icons/fa6";
import {GoPersonFill} from "react-icons/go";
import {HiOutlineMenuAlt1, HiOutlineMenuAlt3} from "react-icons/hi";


export const Navigation = () => {

    return (
        <div className={'bg-[#1D2A4E] fixed top-0 w-screen px-5 lg:px-10 text-[#FEEBB9] flex flex-row items-center justify-between overflow-hidden border-b border-gray-600 h-[10vh]'}>
            <p className={'text-[3.4vw] lg:text-[1.2vw] font-bold'}>HUNGER.ME</p>
            <div className={'hidden lg:flex font-light text-[0.9vw] flex-row items-center gap-6'}>
                <p>HOME</p>
                <p>MENU</p>
                <p>OUTLINE</p>
            </div>
            <div className={'flex items-center flex-row gap-3'}>
                <p className={'hidden lg:block text-[0.8vw]'}>+36 054 023 11 99</p>
                <div className={'hidden lg:block border-r h-[1.3vw] opacity-30 border-[#FEEBB9]'} />
                <button className={'hidden lg:flex outline-none relative items-center  '}>
                    <FaCartShopping className={'text-[1.1vw]'} />
                    <div className={'h-3 w-3 bg-orange-600 rounded-full border border-[#FEEBB9] absolute -top-1.5 -right-1.5 flex flex-row items-center justify-center text-[0.6vw] leading-none'}>3</div>
                </button>
                <button className={'outline-none'}>
                    <GoPersonFill className={'text-[4vw] lg:text-[1.1vw]'} />
                </button>
                <button className={'outline-none lg:hidden'}>
                    <HiOutlineMenuAlt3 className={'text-[6vw] lg:text-[1.1vw]'} />
                </button>
                {/*    account section / github section*/}
            </div>
        </div>
    )
}
