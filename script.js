const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    document.getElementById('myButton').hidden = true;
    const randomImage = Math.floor(Math.random() * 200) + +1;
    // Set the src attribute of the image element to the random image URL
    const img = document.getElementById("random-image");
    const src = "images/raccoon-" + randomImage + ".jpg"
    img.src = src;
    setCookie(src)
})

function setCookie(cookieValue) {
        const date = new Date();
        date.setTime(date.getTime() + (1 * 12 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        const cookie = `MyCookie=${cookieValue};${expires};path=/`;
        document.cookie = cookie;
      }

let cookies = document.cookie.split(';');
let compare = cookies[0].split("=")
if ( compare[0]=== "MyCookie") {
    document.getElementById('myButton').hidden = true;
    const img = document.getElementById("random-image");
    img.src = compare[1];
    
}