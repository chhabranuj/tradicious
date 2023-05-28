import './TitleBarLayout.sass';
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import Logo from "../../assets/images/logo.png";

const TitleBarLayout = () => {
    const services: Array<string> = ["Home", "About", "Help", "Wallet", "Account"];
    const [toTheTopButton, setToTheTopButton] =
        useState<string> ("none");
    const[titleBarStyle, setTitleBarStyle] =
        useState<{shadow: string, bgColor: string}> ({
            shadow: "none",
            bgColor: "transparent"
    });
    const [toggleMenu, setToggleMenu] =
        useState<{icon: JSX.Element, showMenu: boolean}> ({
        icon: <HiMenu />,
        showMenu: false
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50? setToTheTopButton("inline"): setToTheTopButton("none");
            window.scrollY > 50?
                setTitleBarStyle({shadow: "0 0 22px -4px rgb(0 0 0 / 17%)", bgColor: "#261355"}):
                setTitleBarStyle({shadow: "none", bgColor: "transparent"});
        });
    })

    const handleMenu = () => {
        if(toggleMenu.showMenu) {
            window.scrollY > 50?
                setTitleBarStyle({shadow: "none", bgColor: "#261355"}):
                setTitleBarStyle({shadow: "none", bgColor: "transparent"});
            setToggleMenu({
                icon: <HiMenu />,
                showMenu: false
            });
        }
        else {
            setTitleBarStyle({shadow: "0 0 22px -4px rgb(0 0 0 / 17%)", bgColor: "#261355"});
            setToggleMenu({
                icon: <BiArrowBack />,
                showMenu: true
            });
        }
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
       });
    }

    return (
        <div>
            {/* OTHER VIEW */}
            <div className='titleBar' style={{boxShadow: `${titleBarStyle.shadow}`, backgroundColor: `${titleBarStyle.bgColor}`}}>
                <button className='titleBarIcon' onClick={handleMenu}>{toggleMenu.icon}</button>
                {
                    !toggleMenu.showMenu?
                            <div className='titleBarLogoAndTitle'>
                                <img className='logo' src={Logo} alt="logo" />
                                <p className='titleBarTitle' onClick={handleScrollToTop}>Tradicious</p>
                            </div>:
                            <div className='titleMenuServicesParent'>
                                {
                                    services.map((item, index) => {
                                        return (
                                            <p key={index} className='titleMenuService'>{item}</p>
                                        );
                                    })
                                }
                            </div>
                }
                <AiOutlineStock className='titleBarIcon' />
            </div>

            {/* MOBILE VIEW */}
            <div className='titleBarMobile'  style={{boxShadow: `${titleBarStyle.shadow}`, backgroundColor: `${titleBarStyle.bgColor}`}}>
                <div className='titleBarMobileIcons'>
                    <button className='titleBarIcon' onClick={handleMenu}>{toggleMenu.icon}</button>
                    <p className='titleBarTitle' onClick={handleScrollToTop}>Tradicious</p>
                    <AiOutlineStock className='titleBarIcon' />
                </div>
                {
                    toggleMenu.showMenu &&
                        <div className='titleMenuServicesParent'>
                            {
                                services.map((item, index) => {
                                    return (
                                        <p key={index} className='titleMenuService'>{item}</p>
                                    );
                                })
                            }
                        </div>
                }
            </div>

            {/* SCROLL TO TOP BUTTON */}
            <button className='toTheTopButton' style={{display: toTheTopButton}} onClick={handleScrollToTop}>
                <p className='toTheTopButtonText'>TOP</p>
                <AiOutlineUp className='toTheTopButtonIcon' />
            </button>
        </div>
    );
}

export default TitleBarLayout;