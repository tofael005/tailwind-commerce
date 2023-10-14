
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-between items-center">
                <img className='w-20 h-20' src="/src/assets/logo.png" alt="" />

                <div className="relative w-full max-w-[500px]">
                    <input className="border outline-none px-5 w-full py-2 rounded-full" type="search" name="" id="" placeholder="Search Product" />
                    <BsSearch className="absolute top-0 right-0 mt-4 mr-5" />
                </div>

                <div className="flex gap-5 items-center">
                    <div className="text-xl p-2 cursor-pointer border-2 border-black/30 outline-none rounded-full">
                        <NavLink><AiOutlineUser /></NavLink>
                    </div>
                    <div className="text-xl p-2 cursor-pointer border-2 border-black/30 outline-none rounded-full relative">
                        <AiOutlineShoppingCart/>
                        <div className="absolute -right-1 -top-1 bg-red-600 text-white text-base w-5 h-5 text-center rounded-full">2</div>
                    </div>


                    <h1>ghfgh</h1>
                </div>
            </div>
        </div>
    );
};

export default Nav;