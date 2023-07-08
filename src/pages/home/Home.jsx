import {HiShoppingBag} from "react-icons/hi";


export const Home = () => {

    return (
        <div>
            <div className={'h-screen bg-[#1D2A4E] flex flex-col lg:flex-row items-center px-5 lg:px-10'}>
                <div className={'lg:w-[50%] pt-[15vh]  lg:pt-0 text-[#FEEBB9]'}>
                    <p className={'font-bold text-[16vw] lg:text-[8vw] leading-none'}>SAVORY & DELICIOUS</p>
                    <p className={'text-[3.5vw] lg:text-[1.3vw] mt-5 opacity-80'}>Delicious food delicacies made from high Australian beef, carefully processed to create a juicy and flavoured taste.</p>
                    <br/>
                    <br/>
                    <button className={'h-[12vw] lg:h-[5vw] border p-2 border-[#FEEBB9] w-[40vw] lg:w-[15vw] rounded-[6vw]'}>
                        <div className={'h-full w-full bg-orange-500 rounded-[6vw] flex flex-row gap-2 justify-center items-center'}>
                            <HiShoppingBag className={'text-[4vw] lg:text-[1.1vw]'} />
                            <p className={'text-[3vw] lg:text-[1.1vw] font-regular'}>SEE THE MENU</p>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}
