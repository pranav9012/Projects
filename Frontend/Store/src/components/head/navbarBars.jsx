import React from "react";

function NavbarHam({handleHome, handleHoodies, handleSweatshirts,
                    handleCaps, handleBottles, coolEffects, whenSelected,
                    isSelected}){
                        const [isOpen, setIsOpen] = useState(false);

                        const toggleMenu = () => {
                          setIsOpen(!isOpen);
                        };
                      
                        return (
                          <div className="relative md:hidden">
                            {/* Hamburger icon */}
                            <button
                              onClick={toggleMenu}
                              className="text-3xl text-white focus:outline-none"
                            >
                              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                            </button>
                      
                            {/* Side Menu */}
                            <div
                              className={`fixed top-0 left-0 h-full w-3/4 bg-black transform ${
                                isOpen ? 'translate-x-0' : '-translate-x-full'
                              } transition-transform duration-300 ease-in-out z-40`}
                            >
                              <div className="flex flex-col items-start text-white w-full px-5 py-3 space-y-2">
                                <div
                                  className={`text-start w-full px-2 py-2 ${isSelected === 'Home' ? whenSelected : coolEffects} hover:cursor-pointer`}
                                  onClick={() => { toggleMenu(); handleHome(); }}
                                >
                                  <button>Home</button>
                                </div>
                                <div
                                  className={`text-start w-full px-2 py-2 ${isSelected === 'Hoodies' ? whenSelected : coolEffects} hover:cursor-pointer`}
                                  onClick={() => { toggleMenu(); handleHoodies(); }}
                                >
                                  <button>Hoodies</button>
                                </div>
                                <div
                                  className={`text-start w-full px-2 py-2 ${isSelected === 'Sweatshirts' ? whenSelected : coolEffects} hover:cursor-pointer`}
                                  onClick={() => { toggleMenu(); handleSweatshirts(); }}
                                >
                                  <button>Sweatshirts</button>
                                </div>
                                <div
                                  className={`text-start w-full px-2 py-2 ${isSelected === 'Caps' ? whenSelected : coolEffects} hover:cursor-pointer`}
                                  onClick={() => { toggleMenu(); handleCaps(); }}
                                >
                                  <button>Caps</button>
                                </div>
                                <div
                                  className={`text-start w-full px-2 py-2 ${isSelected === 'Bottles' ? whenSelected : coolEffects} hover:cursor-pointer`}
                                  onClick={() => { toggleMenu(); handleBottles(); }}
                                >
                                  <button>Bottles</button>
                                </div>
                              </div>
                            </div>
                      
                            {/* Overlay */}
                            {isOpen && (
                              <div
                                className="fixed inset-0 bg-black opacity-50 z-30"
                                onClick={toggleMenu}
                              ></div>
                            )}
                          </div>
                        );
                      }
                      
                      export default NavbarHam;