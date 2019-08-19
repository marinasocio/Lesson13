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
