import burgerMenuInit from "./modules/burger-menu.js";

async function init() {
    try {
        const url = window.location.pathname.split('/');
        const page = url[url.length - 1]
        if (page === 'index.html') {
            const { default: titleTransform } = await import("./modules/animated-title.js");
            titleTransform();
            try {
                const { default: slider } = await import("./modules/slider.js");
            }
            catch (err) {
                console.error("Slider error:", err);
            }
            try {
                const { default: tabs } = await import("./modules/tabs.js");
            }
            catch (err) {
                console.error("Tabs error:", err);
            }
        }
        if (page === 'product.html') {
            const { default: filling } = await import('./modules/productPageFill.js')
            filling();
        }
        if (page === 'catalog.html') {
            const { default: catalog } = await import('./modules/catalog.js')
            catalog();
        }
        if (page === 'favorites.html') {
            const { default: favorites } = await import('./modules/favorites.js');
        }
        if (page === 'profile.html') {
            const { default: profile } = await import('./modules/profile.js');
        }
        if(page === 'reader.html')
        {
            const {default: reader} = await import('./modules/reader.js');
        }
    }
    catch (error) {
        console.log(error);
    }
}
init();