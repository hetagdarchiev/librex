let init = () => {
    fetch('http://localhost/ElectronicLibrary/librex/config/database.php')
        .then(response => response.json())
        .then(data => {
            let list = data.data;
            const bookIdentifier = parseInt(localStorage.getItem('id'));
            list.sort((a, b) => a.id - b.id);
            function binarySearch(arr, targetId) {
                let left = 0;
                let right = arr.length - 1;
                while (left <= right) {
                    const mid = Math.floor((left + right) / 2);
                    const midId = arr[mid].id;
                    if (midId === targetId) {
                        return mid;
                    }
                    else if (midId < targetId) {
                        left = mid + 1;
                    }
                    else {
                        right = mid - 1;
                    }
                }
                return -1;
            }
            let readList = document.querySelector('.reader')
            const foundIndex = binarySearch(list, bookIdentifier);
            if (foundIndex !== -1) {
                readList.innerHTML = list[foundIndex].text
            }
            if (!readList.innerHTML.trim()) {
                readList.innerHTML = '<h3>Текстовое содержимое отсутствует</h3>';
            }

        })
}

export default init();