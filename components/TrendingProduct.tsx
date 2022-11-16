import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useEffect from "../utils/isormophic-layout"; 
import styles from "../styles/TrendingProduct.module.css"; 

// custom components
import Button from "./Button"; 

function TrendingProduct() {
    const { ref, inView } = useInView({
        threshold: 0.4, 
    }); 

    // animations
    const cardPictureAnimation = useAnimation(); 
    const cardTitleAnimation = useAnimation(); 
    const cardDescriptionAnimation = useAnimation(); 
    const cardPriceAnimation = useAnimation(); 
    const cartButtonAnimation = useAnimation(); 
    const buyButtonAnimation = useAnimation(); 

    useEffect(() => {
        if(inView) { 
            cardPictureAnimation.start({
                transform: "translateX(0%)", 
                opacity: 1, 
                transition: { 
                    duration: 1, 
                    delay: 0, 
                    type: "spring", 
                    bounce: 0.3, 
                }
            })

            cardTitleAnimation.start({
                opacity: 1, 
                transition: { 
                    duration: 1.3, 
                    delay: 0.5, 
                }
            })

            cardDescriptionAnimation.start({
                opacity: 1, 
                transition: { 
                    duration: 1.3, 
                    delay: 0.7, 
                }
            })
            
            cardPriceAnimation.start({
                x: 0, 
                opacity: 1, 
                transition: { 
                    duration: 1.5, 
                    delay: 1, 
                    type: "spring", 
                    bounce: 0.3, 
                }
            })

            cartButtonAnimation.start({ 
                opacity: 1, 
                transition: { 
                    duration: 0.5, 
                    delay: 1.4, 
                }
            })

            buyButtonAnimation.start({ 
                opacity: 1, 
                transition: { 
                    duration: 0.5, 
                    delay: 1.4, 
                }
            })
        }
    }, [inView]); 

    return (
        <>
            <div className={styles.trendingContainer} ref={ref}>
                <div className={styles.trendingContainerCol1}>
                    <motion.div className={styles.productImageWrapper}
                        initial={{
                            transform: "translateX(-100%)", 
                            opacity: 0, 
                        }}
                        animate={cardPictureAnimation} 
                    >
                        <div className={styles.imageContainer}></div>
                    </motion.div>
                    <div className={styles.productDataWrapper}>
                        <div className={styles.dataContainer}>
                            <motion.h1
                                initial={{
                                    opacity: 0, 
                                }}
                                animate={cardTitleAnimation} 
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </motion.h1>
                            <motion.h4
                                initial={{
                                    opacity: 0, 
                                }}
                                animate={cardDescriptionAnimation} 
                            >
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati 
                                tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, 
                                eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit
                            </motion.h4>
                            <motion.h2
                                initial={{
                                    opacity: 0, 
                                    x: 15, 
                                }}
                                animate={cardPriceAnimation} 
                            >
                                $18.00
                            </motion.h2>
                            <div className={styles.orderBtns}>
                                <motion.span className={styles.cartBtn}
                                    initial={{ opacity: 0.5 }}
                                    animate={cartButtonAnimation}
                                >
                                    <Button type="box" color="black" background="#FDFDFD" backgroundOpacity="80%" >
                                        Add to Cart
                                    </Button>
                                </motion.span> 
                                <motion.span className={styles.buyBtn}
                                    initial={{ opacity: 0.5 }}
                                    animate={cartButtonAnimation}
                                >
                                    <Button type="box" color="black" background="#D8D7F6" backgroundOpacity="80%" >
                                        Buy It Now 
                                    </Button>
                                </motion.span> 
                            </div>
                        </div>          
                    </div>
                </div> 
                <div className={styles.trendingContainerCol2}>
                    <div className={`${styles.split1} ${styles.split}`}></div>
                    <div className={`${styles.split2} ${styles.split}`}></div>
                    <div className={`${styles.split3} ${styles.split}`}></div>
                </div>
            </div>
            <div className={styles.divider}></div>
        </>
    );
}

export default TrendingProduct;