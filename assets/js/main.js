const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCfQLNftc3f94y6zd_fEAWDA&part=snippet%2Cid&order=date&maxResults=50";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c676a89a0dmsh658a8ffbe773003p1ca6a8jsndb6205f097bb",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const content = null || document.getElementById("content");

const fetchData = async (urlApi) => {
  try {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    const results = data.items;
    return results;
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  try {
    const information = await fetchData(API);
    let view = `
    ${information
      .map(
        (item) => `
        <div class="group relative cursor-pointer">
        <div
          class="w-full bg-fuchsia-400 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-pink-700 font-bold">
            ${item.snippet.title}
          </h3>
        </div>
      </div>
    `
      )
      .slice(0, 8)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
