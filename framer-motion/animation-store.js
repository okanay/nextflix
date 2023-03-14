const easing = [0.6, -0.05, 0.01, 0.99];
export const animationStore = {
    answer: {
        initial: {scaleY: 0, transformOrigin: "top"},
        open: {scaleY: 1, scaleX: 1, x: 0, y: 0, transformOrigin: "top", position : "static", transition: {duration: 0}},
        close: {scaleY: 0, scaleX: 1, x: 0, y: 1, transformOrigin: "top", position : "absolute",  transition: {delay: 0.1 ,duration: 0}},
    },
    sideNavigationBar: {
        initial: {
            x: 0,
            zIndex: 0,
            y: 0,
            transition: {delay: 0, duration: 0}
        },
        initialHidden: {
            x: -255,
            y: 45,
            zIndex: 20,
            position: "absolute",
        },
        blockMobil: {
            x: 0,
            zIndex: 20,
            y: 45,
            position: "absolute",
            transition: {delay: 0, duration: 0.25, ease: "linear"}
        },
        block: {
            x: 0,
            zIndex: 0,
            y: 0,
            transition: {delay: 0, duration: 0}
        },
        hidden: {
            x: 0,
            zIndex: 0,
            y: 0,
            transition: {delay: 0, duration: 0.2, ease: "linear"}
        },
        hiddenMobil: {
            x: -255,
            zIndex: 20,
            y: 45,
            position: "absolute",
            transition: {delay: 0, duration: 0.2, ease: "linear"}
        }
    },
    staggerBase: {
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.08
            }
        },
        hidden: {}
    },
    staggerShort: {
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.04
            }
        },
        hidden: {}
    },
    loadOpacityWithYAngle: {
        visible: {opacity: 1, y: 0, transition: {duration: 0.3}},
        hidden: {opacity: 0, y: 20}
    },
    loadOpacityWithYAngleShort: {
        visible: {opacity: 1, y: 0, transition: {duration: 0.3}},
        hidden: {opacity: 0, y: 10}
    },
    loadOpacityWithXAngle: {
        visible: {opacity: 1, x: 0, transition: {duration: 0.3}},
        hidden: {opacity: 0, x: -20}
    },
    loadOpacityWithXAngleShort: {
        visible: {opacity: 1, x: 0, transition: {duration: 0.3}},
        hidden: {opacity: 0, x: -10}
    },
}
