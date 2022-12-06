import { Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import AddPost from './AddPost';
import GalleryList from './GalleryList';
import GalleryPostDetails from './GalleryPostDetails';
const GalleryRoutes = () => {
  const returnRoutes = () => {
    return (
      <Routes>
        <Route path="/new" element={<AddPost />} />
        <Route path="/:id" element={<GalleryPostDetails />} />
        <Route index path="/" element={<GalleryList />} />
      </Routes>
    );
  };

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to={'/gallery'}>List</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/gallery/new">Add post</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {returnRoutes()}
    </>
  );
};

export default GalleryRoutes;
