import { myHttp } from './myHttp';
export const http = myHttp();
export const newsService = (function() {
	const apiKey = '9c27b0f722b84da5a08312d2b125351b';
	const apiUrl = 'https://newsapi.org/v2';

	return {
		topHeadlines(country = 'ua', cb) {
			http.get(`${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, cb);
		},
		everything(text) {
			http.get(`${apiUrl}/everything?q=${text}&apiKey=${apiKey}`, cb);
		}
	};
}())