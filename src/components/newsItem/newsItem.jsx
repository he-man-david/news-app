const NewsItem = (props) => {
    let { name, title, desc, url, imgUrl, date } = props.newsItem;
    return (
        <div>
            {title}
        </div>
    );
}
 
export default NewsItem;