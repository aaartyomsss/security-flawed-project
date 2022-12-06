import { useEffect, useState } from 'react';
import { getPosts, PostListItem } from '../../api/gallery';
import GalleryCard from './GalleryCard';
import './GalleryList.css';

const GalleryList = () => {
  const [posts, setPosts] = useState<PostListItem[]>([]);

  const fetchAndSetPosts = async () => {
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAndSetPosts();
  }, []);

  return (
    <div className="grid-list">
      {posts.map((post) => (
        <GalleryCard {...post} key={post.id} />
      ))}
    </div>
  );
};

export default GalleryList;
