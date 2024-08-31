import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formattedItems } from "../../items";
function Navbar(){
    
    // console.log(formattedItems);
    const nagivate = useNavigate();
    const handleHome = () => {nagivate('/'); setIsSelected('Home'); toggleMenu();};
    const handleHoodies = () => {nagivate('/hoodies', {state : formattedItems}); setIsSelected('Hoodies'); toggleMenu();};
    const handleSweatshirts = () => {nagivate('/sweatshirts', {state : formattedItems}); setIsSelected('Sweatshirts'); toggleMenu();};
    const handleCaps = () => {nagivate('/caps', {state : formattedItems}); setIsSelected('Caps'); toggleMenu();};
    const handleBottles = () => {nagivate('/bottles', {state : formattedItems}); setIsSelected('Bottles'); toggleMenu();};
    const [isSelected, setIsSelected] = useState('Home');
    const coolEffects = 'nav nav-enter transition duration-500 hover:text-black hover:font-semibold';
    const coolEffectsMobile = 'nav-mobile nav-enter-mobile transition duration-500 hover:text-black hover:font-semibold';
    const whenSelected = 'bg-white text-black font-semibold';
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div className='relative w-full'>
            <button className={`text-white text-2xl md:hidden focus:outline-none relative h-full`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            <div className="hidden md:flex flex-row items-center justify-end px-10 text-xl
                    mr-2 flex-wrap relative z-20 text-white">
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Home' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={handleHome}>
                            <button>
                                Home
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Hoodies' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={handleHoodies}>
                            <button>
                                Hoodies
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Sweatshirts' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={handleSweatshirts}>
                            <button>
                                Sweatshirts
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Caps' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={handleCaps}>
                            <button>
                                Caps
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Bottles' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={handleBottles}>
                            <button>
                                Bottles
                            </button>
                </div>
            </div>
            <div className={`z-10 md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm h-screen w-screen flex
                        transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} rounded-lg`}>
                <button onClick={toggleMenu}
                        className="fixed text-xl mt-5 ml-2 text-white focus:outline-none">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
                <div className='md:hidden flex flex-col items-start bg-black text-white w-1/3 pl-7 pr-5 pt-16 pb-3 space-y-2 h-full rounded-lg'>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Home' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`} onClick={handleHome}>
                        <button>Home</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Hoodies' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`} onClick={handleHoodies}>
                            <button>Hoodies</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Sweatshirts' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`} onClick={handleSweatshirts}>
                            <button>Sweatshirts</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Caps' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`} onClick={handleCaps}>
                            <button>Caps</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Bottles' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`} onClick={handleBottles}>
                        <button>Bottles</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;