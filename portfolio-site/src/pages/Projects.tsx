import React from "react";
import "../styles/global.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";


function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
  
function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
        <section>
            <div ref={ref}>
            <img src={`/${id}.jpg`} alt="Project" />
            </div>
            <motion.h2 style={{ y }}>{`${id}`}</motion.h2>
        </section>
    );
}
  
export default function Projects() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
  
    return (
        <>
            {[1, 2, 3, 4, 5].map((image) => (
                <Image id={image} />
            ))}
            <motion.div 
                className="progress"    
                style={{ scaleX }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            />
        </>
    );
}
  
  
  
<motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
    }}
/>