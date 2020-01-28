import React from 'react';
import { GET_PLAYER_BY_ID } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const Player = () => {
  const { loading, error, data } = useQuery(
    GET_PLAYER_BY_ID('255728801404682771')
  );

  // const [login, { loading, error }] = useMutation<LoginTypes.login, LoginTypes.loginVariables>(
  //   LOGIN_USER,
  //     {
  //       onCompleted({ login }) {        localStorage.setItem('token', login as string);        client.writeData({ data: { isLoggedIn: true } });      }    }
  // );

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error!</p>;
  }

  const player = data.findPlayerByID;

  return (
    <div className="player">
      <h2 className="player-name">{player.name}</h2>
    </div>
  );
};

export default Player;
