const init = () => {
    setTimeout(() => {

        const element = document.querySelector(".main-title__word-replace");
        if (!element) return;

        // Массив слов для анимации
        const words = ["Мечтайте", "Влюбляйтесь"];
        let currentWordIndex = 0;
        let symbols = [];
        let currentIndex = 0;

        const type = () => {
            if (currentIndex < symbols.length) {
                element.textContent += symbols[currentIndex];
                currentIndex++;
                setTimeout(type, 200);
            } else {
                // После печати первого слова запускаем стирание
                if (currentWordIndex === 0) {
                    setTimeout(erase, 1000);
                }
                // Для второго слова ничего не делаем - анимация завершена
            }
        };

        const erase = () => {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(erase, 100);
            } else {
                // Переключаемся на второе слово
                currentWordIndex = 1;
                symbols = words[currentWordIndex].split("");
                currentIndex = 0;
                setTimeout(type, 500);
            }
        };

        // Инициализация первого слова
        symbols = words[0].split("");
        type();
    }, 500);
};

document.addEventListener('DOMContentLoaded', init);
export default init;