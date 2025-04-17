import burgerMenuInit from "./modules/burger-menu.js";

async function init() {
    try {
        const url = window.location.pathname.split('/');
        const page = url[url.length - 1]
        if (page === 'index.html') {
            const { default: titleTransform } = await import("./modules/animated-title.js")
            titleTransform()
            const { default: slider } = await import("./modules/slider.js");
            slider();
        }
        if (page ==='product.html')
        {
            const {default: filling} = await import('./modules/pageFill.js')
            filling();
        }
    
    }
    catch (error) {
        console.log(error);
    }
}
init();