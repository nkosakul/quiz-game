import React from 'react';
import { Link } from '@reach/router';
import {gql} from "apollo-boost/lib/index";
import {useQuery} from "@apollo/react-hooks/lib/index";

const ALL_QUESTIONS = gql`
  {
    allQuestions {
      data {
        question
        isActive
      }
    }
  }
`;

const Header = () => {
  const { loading, error, data } = useQuery(ALL_QUESTIONS);

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>error!</p>
  }

  const allQuestions = data.allQuestions.data;
  console.log(allQuestions);

  return (
    <header>
      <Link to="/">
        Logo
        {allQuestions.map(({question, isActive}) => {
          if (isActive) {
            return <p>{question}</p>
          }
        })}
      </Link>
    </header>
  );
};

export default Header;
