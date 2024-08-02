const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=4RY7i_h1fG8&part=id%2Csnippet&type=video&maxResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4a9b104ef9msh96bc2ff7d0fcc8dp1401c9jsnf3bfc2d60660',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(url);
        console.log(videos);
        let view = `${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700"><span aria-hidden="true" class="absolute inset-0"></span>${video.snippet.title}</h3>
                </div>
            </div>
        `).slice(0,4).join('')}`;
        content.innerHTML = view;
    }
    catch(error){
        console.log(error);
    }
})();