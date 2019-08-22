import { newsContainer } from './newsContainer';
import { newsTemplate } from './newsTemplate';

export function renderNews(newsItems) {
	let fragment = '';

	newsItems.forEach((item) => {
		const el = newsTemplate(item);
		fragment += el;
	});

	newsContainer.insertAdjacentHTML('afterbegin', fragment);
}