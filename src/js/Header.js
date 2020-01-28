import React from 'react';
import { Link } from '@reach/router';
import { useSubscription } from '@apollo/react-hooks';
import { WATCH_ACTIVE_QUESTION } from './graphql/subscriptions';

const Header = () => {
  const { data, loading } = useSubscription(WATCH_ACTIVE_QUESTION);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <header>
      <Link to="/">Logo</Link>
      <p>{!loading && data.question.length > 0 && data.question[0].question}</p>
    </header>
  );
};

export default Header;
