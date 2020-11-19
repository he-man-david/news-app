import { Card } from 'react-bootstrap';
import { formatDateTime } from '../../utility/date-utils';

const NewsItem = (props) => {
    let { name, title, desc, url, imgUrl, date } = props.newsItem;
    return (
        <Card style={{ width: '17rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title><a href={url}>{title}</a></Card.Title>
                <Card.Text>{desc}</Card.Text>
                <small className="text-muted">{name}</small>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{formatDateTime(date)}</small>
            </Card.Footer>
        </Card>
    );
}
 
export default NewsItem;