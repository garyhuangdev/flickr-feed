import React from 'react';
import FeedCard from './FeedCard';
import { CardColumns } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FeedLayout = ({ feeds }) => {
  return (
    <CardColumns>
      {feeds.map(({ title, media, author, date_taken, link, tags }) => (
        <FeedCard
          title={title}
          src={media && media.m}
          author={author}
          date_taken={date_taken}
          key={link}
          link={link}
          tags={tags}
        />
      ))}
    </CardColumns>
  );
};

FeedLayout.propTypes = {
  feeds: PropTypes.array
};

export default FeedLayout;
