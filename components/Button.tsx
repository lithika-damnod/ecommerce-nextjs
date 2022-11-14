import styles from "../styles/Button.module.css";
import {motion} from "framer-motion"; 

function Button ({type="filled", outline="#B9B2FF", background="#E7E5FF", color="#000000", backgroundOpacity="62%", children }: any) { 
    const btnStyles = {
        backgroundColor: background, 
        border: ("2px solid " + outline), 
        color: color, 
        opacity: backgroundOpacity, 
        borderRadius: "0.5em", 
    }
    btnStyles.backgroundColor = type === "outlined" ? "none" : background; 
    if (type === "box") {
        btnStyles.borderRadius = "0"; 
        btnStyles.border = "none"; 
    }
    return (
        <motion.div className={styles.buttonBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9}}
            style={btnStyles}
        >
            {children}
        </motion.div>
    )
}

export default Button;  





