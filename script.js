var button = document.getElementById("mode");

button.addEventListener("click", function () {
    var page = document.getElementsByClassName("content-box");
    var urls = document.getElementsByTagName("a");

    if (button.textContent === 'Dark') {
        button.style.backgroundColor = 'rgb(245, 245, 245)';
        button.style.color = 'black';
        button.textContent = 'Light';

        page[0].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
        page[0].style.color = 'rgb(245, 245, 245)';

        [...urls].forEach(element => {
            element.style.color = 'yellow';
        });
    } else {
        button.style.backgroundColor = 'black';
        button.style.color = 'rgb(245, 245, 245)';
        button.textContent = 'Dark';

        page[0].style.backgroundColor = 'rgb(245, 245, 245, 0.9)';
        page[0].style.color = 'black';

        [...urls].forEach(element => {
            element.style.color = 'blue';
        });
    }
});