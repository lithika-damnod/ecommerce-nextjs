import { motion } from "framer-motion"; 
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap"; 
import styles from "../styles/Slider.module.css"; 

function Slider() {
    const sliderContainer = useRef(null); 
    const sliderWrapper = useRef(null); 
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline().to(sliderContainer.current, { 
            right: 0, 
            duration: 12, 
            ease: "elastic(12, 16)", 
            scrollTrigger: {
                trigger: sliderWrapper.current, 
                start: "bottom bottom", 
                end: ".trendingContainer", 
                scrub: true, 
                snap: {
                    delay: 4, 
                }
            }, 
        }).set(sliderContainer.current, { right: 0 })
    }, []); 

    return (
        <div className={styles.sliderContainer} ref={sliderWrapper} >
            <div className={styles.cardWrapper} ref={sliderContainer} >
                <motion.div className={styles.smallCard}></motion.div>
                <motion.div className={styles.smallCard}></motion.div>
                <motion.div className={styles.largeCard}></motion.div>
                <motion.div className={styles.smallCard}></motion.div>
                <motion.div className={styles.largeCard}></motion.div>
            </div>
        </div>
    );
}

export default Slider;