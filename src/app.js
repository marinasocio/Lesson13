// import { getUserName, obj, product } from './module1';


//import all scoupe
// import * as mod1 from './module1';


//by default
// import p from './module1';

// console.log(p);

// console.log(mod1.getUserName());

// console.log(getUserName());
// console.log(obj);
// console.log(product);


//-----------

import { newsService } from './newsService';

import { newsContainer } from './newsContainer';

document.addEventListener('DOMContentLoaded', function() {
	M.AutoInit();
	loadNews();
});

function loadNews() {
	newsService.topHeadlines('ua', onGetResponse);
}

function onGetResponse(err, res) {
	if (err) {
		alert(err);
		return;
	}

	if (!res.articles.length) {
		alert('Новостей не найдено');
		return;
	}
	renderNews(res.articles);
}

import { renderNews } from './renderNews';
import { newsTemplate } from './newsTemplate';


