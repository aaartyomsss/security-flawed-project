import axios from 'axios';

export interface PostListItem {
  id: number;
  image: string;
  title: string;
  votes: number;
}

export const getPosts = () => axios.get<PostListItem[]>('gallery/');

export interface PostDetails extends PostListItem {
  user: number;
  description: string;
}

export const getPostDetails = (id: number | string) =>
  axios.get<PostDetails>(`gallery/${id}/`);

export const createNewPost = (data: FormData) =>
  axios.post('gallery/create/', data);

export const voteForPost = (id: number | string) =>
  axios.patch<PostDetails>(`gallery/${id}/`);
