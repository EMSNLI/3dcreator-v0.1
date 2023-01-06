import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper/Wrapper';
import { useGlobalContext } from './context';
import Profile from '../Profile/Profile';
import Header from '../Header';
import Sidebar from '../Sidebar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />
  }
]);

export const Conatiner = styled.div`
  position: fixed;
  top: 80px;
  left: 72px;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { state } = useGlobalContext();

  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Conatiner>
        <RouterProvider router={router} />
      </Conatiner>

    </Wrapper>
  );
};

export default App;