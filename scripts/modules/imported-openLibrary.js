const url = "https://openlibrary.org/search.json?q=language:rus";
const headers = new Headers({
    "User-Agent": "MyAppName/1.0 (myemail@example.com)"
});
const options = {
    method: 'GET',
    headers: headers
};
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data.docs);
        
        const slides = document.querySelectorAll('.swiper-slide')
    }
    )
    .catch(error => console.error('Error:', error));