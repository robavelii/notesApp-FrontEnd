import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from './usersApiSlice';
import { memo } from 'react';

const User = ({ userId }) => {
  const { users } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
      users: data?.entities[userId],
    }),
  });
  console.log(users);

  const navigate = useNavigate();

  if (users) {
    const handleEdit = () => navigate(`/dash/users/${userId}`);

    const userRolesString = users.roles.toString().replaceAll(',', ', ');
    console.log(userRolesString);

    const cellStatus = users.active ? '' : 'table__cell--inactive';

    return (
      <tr className='table__row user'>
        <td className={`table__cell ${cellStatus}`}>{users.username}</td>
        <td className={`table__cell ${cellStatus}`}>{userRolesString}</td>
        <td className={`table__cell ${cellStatus}`}>
          <button className='icon-button table__button' onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};

const memoizedUser = memo(User);

export default memoizedUser;
