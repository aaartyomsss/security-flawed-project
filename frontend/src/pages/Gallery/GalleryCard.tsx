import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../../../node_modules/react-bootstrap/esm/index';
import { PostListItem } from '../../api/gallery';

const GalleryCard = (props: PostListItem) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Votes: {props.votes}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/gallery/${props.id}`)}
        >
          More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GalleryCard;
