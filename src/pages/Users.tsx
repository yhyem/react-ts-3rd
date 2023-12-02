import { useEffect, useState } from 'react';
import { UserPayload } from '../payload/UserPayload';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseURL = process.env.REACT_APP_API_URL;

const Users = () => {
  const [userList, setUserList] = useState<UserPayload>();
  const { data, error, isLoading } = useSWR<UserPayload>(
    `${baseURL}/api/users`,
    fetcher,
  );

  useEffect(() => {
    setUserList(data);
  }, [data]);

  return (
    <>
      {userList &&
        userList.users.map((user) => (
          <>
            <div>{user.email}</div>
            <div>{user.password}</div>
            <div>{user.username}</div>
          </>
        ))}
    </>
  );
};

export default Users;
