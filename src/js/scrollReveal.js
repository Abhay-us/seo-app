import ScrollReveal from "scrollreveal";

export const initScrollReveal = () => {
    const sr = ScrollReveal({
        distance: "50px",
        duration: 1000,
        delay: 100,
        reset: false,
        easing: "ease-in-out"
    });
    sr.reveal(".reveal");
    // From left
    sr.reveal(".reveal-left", {
        origin: "left"
    });

    // From right
    sr.reveal(".reveal-right", {
        origin: "right"
    });

    // From top
    sr.reveal(".reveal-top", {
        origin: "top"
    });

    // From bottom
    sr.reveal(".reveal-bottom", {
        origin: "bottom"
    });

    // Sequential items
    sr.reveal(".reveal-sequential", {
        origin: "left",
        interval: 200
    });

    return sr;
};

export default initScrollReveal;