import { useLayoutEffect, useEffect } from "react"; 

const useIsormophicLayoutEffect = 
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsormophicLayoutEffect; 