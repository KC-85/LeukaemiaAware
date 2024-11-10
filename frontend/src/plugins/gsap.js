// src/plugins/gsap.js
import gsap from "gsap";

// Import additional GSAP plugins as needed
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";

// Register plugins globally
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

// Export GSAP instance for global use
export default gsap;
