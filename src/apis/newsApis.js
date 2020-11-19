import { fromPastXDays } from '../utility/date-utils';

const extractNewsData = ({ articles }) => {
    return articles.map(({ source, title, description, url, urlToImage, publishedAt}) => {
        let article = {name: source.name, title, desc: description, url, imgUrl: urlToImage, date: publishedAt};
        return article;
    });
}

// async api functions/calls
const getHeadlines = async (country='us') => {
    let res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=`
        + process.env.REACT_APP_NEWS_API_KEY);
    if (res.ok) {
        res = await res.json();
        return extractNewsData(res);
    } else throw 'network err with call from getHeadlines API';
}

const getMarketsNews = async (from=1) => {
    const fromDate = fromPastXDays(from);
    let res = await fetch(
        `https://newsapi.org/v2/everything?q=%28U.S%20OR%20US%20OR%20NYSE%20OR%20DOW%20OR%20NASDAQ%20OR%20S%26P%20OR%20Wall%20Street%20OR%20S%26P%20500%29%20AND%20%28stocks%20OR%20stock%20OR%20markets%29&language=en&from=${fromDate}&pageSize=20&sortBy=popularity&apiKey=`
        + process.env.REACT_APP_NEWS_API_KEY);
    if (res.ok) {
        res = await res.json();
        return extractNewsData(res);
    } else throw 'network err with call from getMarketsNews API';
}

const getTechnologyNews = async (from=1) => {
    const fromDate = fromPastXDays(from);
    let res = await fetch(
        `https://newsapi.org/v2/everything?q=tech%20OR%20technology&language=en&from=${fromDate}&pageSize=20&sortBy=popularity&apiKey=`
        + process.env.REACT_APP_NEWS_API_KEY);
    if (res.ok) {
        res = await res.json();
        return extractNewsData(res);
    } else throw 'network err with call from getTechnologyNews API';
}

const getWorldNews = async (from=1) => {
    const fromDate = fromPastXDays(from);
    let res = await fetch(
        `https://newsapi.org/v2/everything?q=world%20OR%20World%20OR%20China%20OR%20US%20OR%20U.S%20OR%20India%20OR%20Europe%20OR%20Russia%20OR%20Global%20OR%20Politics%20OR%20Economy&language=en&from=${fromDate}&pageSize=20&sortBy=popularity&apiKey=`
        + process.env.REACT_APP_NEWS_API_KEY);
    if (res.ok) {
        res = await res.json();
        return extractNewsData(res);
    } else throw 'network err with call from getWorldNews API';
}

// api directory, name : function
const newsApiDirectory = {
    "headlines": getHeadlines,
    "markets": getMarketsNews,
    "technology": getTechnologyNews,
    "world": getWorldNews
}

// api controller, take in name of api, return call
const NewsApi = (apiName) => {
    if (newsApiDirectory[apiName]) return newsApiDirectory[apiName]();
    else throw 'api does not exist in newsApiDirectory';
}
 
export default NewsApi;