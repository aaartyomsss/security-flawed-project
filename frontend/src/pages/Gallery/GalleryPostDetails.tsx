import { useEffect, useState } from 'react';
import { Button, Stack } from '../../../node_modules/react-bootstrap/esm/index';
import { useParams } from 'react-router-dom';
import { getPostDetails, PostDetails, voteForPost } from '../../api/gallery';
import './GalleryPostDetails.css';

const GalleryPostDetails = () => {
  const params = useParams();
  const [post, setPost] = useState<PostDetails>();

  const getAndSetPost = async () => {
    if (params.id) {
      const res = await getPostDetails(params.id);
      setPost(res.data);
    }
  };

  useEffect(() => {
    getAndSetPost();
  }, []);

  const onVote = async () => {
    if (params.id) {
      const res = await voteForPost(params.id);
      setPost(res.data);
    }
  };

  if (!post) return <div>{params.id}</div>;

  return (
    <div className="content">
      <Stack direction="horizontal" gap={3}>
        <div className="meta-data">
          <div>{post.title}</div>
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
          <div>Votes: {post.votes}</div>
          <Button onClick={onVote}>Vote</Button>
        </div>
        <div>
          <img src={post.image} alt="what-you-vote-for" />
        </div>
      </Stack>
    </div>
  );
};

export default GalleryPostDetails;
