const { animate } = Motion;

animate(
    "#Final-Coin", 
    { 
        rotateY: 360,
        scale: [1, 1.1, 1]
    }, 
    { 
        duration: 3,
        repeat: Infinity,
        ease: "linear"
    }
);

animate(
    "#rewardBox",
    { 
        opacity: [0, 1], 
        y: [50, 0],
        scale: [0.8, 1]
    },
    { 
        duration: 0.8,
        ease: "easeOut" 
    }
);