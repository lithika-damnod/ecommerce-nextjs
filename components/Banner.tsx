import { animationControls, motion, useAnimation }  from "framer-motion"; 
import styles from "../styles/Banner.module.css"; 
import { useInView  } from "react-intersection-observer";
import { useEffect } from "react"; 

function Banner() { 
    const {ref, inView} = useInView({
        threshold: 0.7, 
    }); 
    const bannerAnimation = useAnimation();
    useEffect(() => {
        if(inView) { 
            bannerAnimation.start({
                opacity: 1, 
                transform: "scale(1)", transition: {
                    duration: 1.5, 
                    delay: 0.5, 
                } 
            })
        }
    }, [inView]); 

    return (
        <motion.div className={styles.bannerContainer}
            ref={ref} 
            style={{
                display: "flex", 
                height: "220px",  
                gridColumn: "1/-1",
                overflow:"hidden", 
                position: "relative",
                margin: 0, 
            }}
        >
            <motion.div className={styles.bannerWallpaper} 
                initial={{ opacity: 0.8, transform: "scale(1.2)" }}
                animate={bannerAnimation}
                style={{
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    width: "100%", 
                    height: "100%", 
                    backgroundImage: "url(images/banner.png)", 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 2, 
                }}
            >
            </motion.div>
            <div className="overlay"
                style={{
                    display: "flex", 
                    width: "100%", 
                    height: "100%", 
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "'Inter', sans-serif",
                    color: "white", 
                    zIndex: 3,
                }} 
            >
                <p>
                    <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>UP TO</span><br /> <span style={{ fontWeight: 700, fontSize: "3.5rem" }}>10% OFF</span> 
                </p>
            </div>
        </motion.div>
    ); 
}
export default Banner; 