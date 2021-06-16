const form = document.querySelector("form");
const button = document.querySelector('button');
const tvs = document.querySelector('.tvs');


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    tvs.innerHTML = "";
    const userInput = form.elements.query.value;
    const config = { params: { q: userInput } };
    const fetchTv = await axios.get("http://api.tvmaze.com/search/shows", config);
    const res = fetchTv.data;
    makeImages(res);
    form.elements.query.value = "";

});


const makeImages = (shows) => {

    if (shows.length == 0) {
        const noResult = document.createElement('h2');
        noResult.innerText = "Sorry! no Results Found :(";
        noResult.style.color = "#fff";
        noResult.style.opacity = "1";
        tvs.append(noResult);
    }

    else {
        for (let result of shows) {
            const url = result.show.image;
            if (url) {
                const img = document.createElement('img');
                img.src = url.medium;
                const tv = document.createElement('span')
                tv.style.margin = "10px 10px";
                tv.append(img);
                tvs.append(tv);
            }

        }
    }

}




