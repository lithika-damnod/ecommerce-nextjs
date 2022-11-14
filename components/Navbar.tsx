import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"; 
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Button from "./Button";
import {motion} from "framer-motion"; 
import {gsap} from "gsap"; 
import React, {useRef, useState, useLayoutEffect, Component} from "react"; 

function Navbar() {
    // refs 
    const menuIcon = useRef(null); 
    const largeMenu = useRef(null); 
    const closeIcon = useRef(null); 
    const navBar = useRef(null); 
    const burgerTl = useRef(gsap.timeline({paused: true})); 
    const [hamburgerVisible, setHamburgerVisibility] = useState(false); 

    useLayoutEffect(() => {
        burgerTl.current
            .to(menuIcon.current, {
                y: -15, 
                x: 100,
                opacity: 0, 
                rotate: 180, 
                duration: 0.5, 
                ease: "power4.inOut", 
            }, 0.4)
            .to(closeIcon.current, { 
                rotate: 180, 
                duration: 1.5, 
                opacity: 1, 
                ease: "power4.inOut", 
                transformOrigin: "center", 
                zIndex: 11,
            }, 0.1)
            .set(navBar.current, {
                boxSizing: "border-box",
            })
            .to(largeMenu.current, {
                display: "block", 
                opacity: 1, 
                duration: 0.5, 
            }, 0.5)
            .from(largeMenu.current, {
                x: 200, 
            }, 0.5)
    }, [])

    // event handlers
    const showMenu = () => { burgerTl.current.play(); }
    const closeMenu = () => { burgerTl.current.reverse(); }


    // framer-motion variants
    const navItems = { 
        initial: { 
            opacity: 0, 
        }, 
        animate: {
            opacity: 1, 
            transition: { 
                delay: 0.6, 
                duration: 1, 
            }
        }
    }


    return (
        <motion.div className={styles.nav}
            initial={{ y: -100 }} 
            animate={{y: 0, transition: { duration: 0.5, delay: 0, type: "spring", stiffness: 20}}}
            ref={navBar}
        >
            <Link href="/">
                <motion.div className={styles.logo}
                    variants={navItems}
                    initial="initial"
                    animate="animate"
                    whileTap={{ scale: 1.1 }}
                >
                    Sampath Motors
                </motion.div>
            </Link>
            <div className={styles.options}>
                <motion.span className={styles.bag}
                    variants={navItems}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                >
                    <ShoppingBagOutlinedIcon fontSize="large" style={{color: "rgba(43, 42, 42, 0.863)" }}/> 
                </motion.span>
                <Link href="/signin">
                    <motion.span className={styles.signinBtn}
                        variants={navItems}
                        initial="initial"
                        animate="animate" 
                    >
                        <Button>Sign In</Button>
                    </motion.span>
                </Link>
                <motion.span className={styles.hamburger}
                    variants={navItems}
                    initial="initial"
                    animate="animate" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  
                    style={{
                        zIndex: 12
                    }}
                >
                    <DragHandleRoundedIcon fontSize="large" style={{color: "rgba(43, 42, 42, 0.863)"}} className={styles.icon} ref={menuIcon} onClick={showMenu} />
                </motion.span> 
            </div>
            <div className={styles.largeMenu} style={{ zIndex: 10 }} ref={largeMenu} >
                <ClearRoundedIcon fontSize="large" style={{color: "rgba(43, 42, 42, 0.863)", zIndex: 9, cursor: "pointer" }}  className={styles.close} ref={closeIcon} onClick={closeMenu} />
            </div>
        </motion.div>
    )
}

export default Navbar; 