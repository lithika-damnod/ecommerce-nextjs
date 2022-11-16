import {gsap} from "gsap"; 
import {motion} from "framer-motion"; 
import Button from "./Button"; 
import styles from "../styles/Hero.module.css";

function Hero() { 
    return (
        <div className={styles.heroContainer}>
            <div className={styles.header}>
                <motion.h1 className={styles.heroH1 }
                    initial={{ opacity: 0, }} 
                    animate={{ opacity: 1, transition: { duration: 2, delay: 1.5 } }}  
                    style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 900,
                        marginBottom: "0", 
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur
                </motion.h1>
                <motion.p className={styles.heroP}
                    style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: 300,
                        marginBottom: "1.2rem", 
                    }}
                    initial={{ opacity: 0, }} 
                    animate={{ opacity: 1, transition: { duration: 1.7, delay: 1.9 } }}  
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                </motion.p>
                <div className={styles.startButtons}>
                    <motion.span style={{ margin: 0 }}
                        initial={{ opacity: 0,}} 
                        animate={{ opacity: 1, transition: { duration: 1, delay: 2.4} }} 
                    >
                        <Button type="outlined">Sign Up</Button> 
                    </motion.span>
                    <motion.span style={{ margin: 0 }}
                        initial={{ opacity: 0,}} 
                        animate={{ opacity: 1, transition: { duration: 1, delay: 2.5} }}
                    >
                        <Button>Shop Now</Button>
                    </motion.span>
                </div>
            </div>
            <div className={styles.heroImage}>
                <div className={styles.heroImageWrapper}>
                    <motion.div className={styles.backgroundBox}
                        initial={{ x: 1000, scale: 0.8 }} 
                        animate={{ x: 0, transition: { 
                            duration: 2, 
                            delay: 2.5, 
                        }}} 
                    >
                        <div className={styles.itemWrapper}>
                            <motion.img src="/images/heroimage1.jpg" className={styles.img1}
                                initial={{ opacity: 0, x: -300}}  
                                animate={{ opacity: 1, x:0, transition: {
                                    duration: 2, 
                                    delay: 3, 
                                }}} 
                            />
                            <motion.img src="/images/heroimage2.jpg" className={styles.img2}
                                initial={{ opacity: 0, x: 100, scale: 0.8 }} 
                                animate={{ opacity: 1, x: 0, scale: 1, transition: { 
                                    duration: 2, 
                                    delay: 3.5, 
                                }}}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className={styles.mobileImageWrapper} >
                    <div className={styles.col1} style={{ width: "40%", height: "100%"}}>
                        <motion.img src="/images/heroimage1.jpg" className={styles.mobImg1} 
                            initial={{ x: -300}} 
                            animate={{ x: 0, transition: { 
                                duration: 2, 
                                delay: 0.5, 
                            }}}
                        />
                    </div>
                    <div className={styles.col2} style={{ width: "60%", height: "100%"}} >
                        <motion.img src="/images/heroimage2.jpg" className={styles.mobImg2}
                            initial={{ x: 400}} 
                            animate={{ x: 0, transition: { 
                                duration: 2, 
                                delay: 0.5, 
                            }}}
                        />
                    </div>
                </div>
            </div>
        </div>
    ); 
}
export default Hero; 