var button = document.getElementById("mode");

button.addEventListener("click", function () {
    var page = document.getElementsByTagName("body");
    var urls = document.getElementsByTagName("a");
    var urlLinkedinImg = document.getElementById("linkedin");
    var urlGithubImg = document.getElementById("github");

    if (button.textContent === '🌙') {
        button.style.backgroundColor = 'rgb(245, 245, 245)';
        button.style.color = 'black';
        button.textContent = '☀️';

        urlLinkedinImg.setAttribute("src", "./resources/icons/linkedin-dark.png");
        urlGithubImg.setAttribute("src", "./resources/icons/github-dark.png");

        page[0].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
        page[0].style.color = 'rgb(245, 245, 245)';

        [...urls].forEach(element => {
            element.style.color = 'yellow';
        });
    } else {
        button.style.backgroundColor = 'black';
        button.style.color = 'rgb(245, 245, 245)';
        button.textContent = '🌙';

        urlLinkedinImg.setAttribute("src", "./resources/icons/linkedin-light.png");
        urlGithubImg.setAttribute("src", "./resources/icons/github-light.png");

        page[0].style.backgroundColor = 'rgb(245, 245, 245, 0.9)';
        page[0].style.color = 'black';

        [...urls].forEach(element => {
            element.style.color = 'blue';
        });
    }
});
