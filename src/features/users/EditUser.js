import { useParams } from 'react-router-dom';
import EditUserForm from './EditUserForm';
import { useGetUsersQuery } from './usersApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';

const EditUser = () => {
  // Id value inside url
  const { id } = useParams();

  // memoized query inside userapislice
  const { user } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <PulseLoader color={'#FFF'} />;
  const content = <EditUserForm user={user} />;
  return content;
};

export default EditUser;
