import burgerMenuInit from "./modules/burger-menu.js";

async function init() {
    try {
        const { default:slider } = await import("./modules/slider.js");
        const { default:titleTransform } = await import("./modules/animated-title.js")
        titleTransform()
        slider();
    }
    catch (error) {
        console.log(error);
    }
}
init();