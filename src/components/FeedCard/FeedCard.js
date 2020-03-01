import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { authorConvert } from '../../utils';
import PropTypes from 'prop-types';

const FeedCard = ({ title, src, author, date_taken, link, tags }) => {
  return (
    <Card className="animated fadeIn text-center feed-card" bg="light">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card.Img className="p-3" variant="top" src={src} alt={title} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>by {authorConvert(author)}</Card.Text>
        <small className="text-muted">
          on {date_taken && date_taken.substr(0, 10)}
        </small>
      </Card.Body>
      <Card.Footer>
        <small>
          <strong>Tags: </strong>
          {tags.split(' ').map((tag, index) => (
            <Badge pill variant="light" key={tag + index}>{` #${tag}`}</Badge>
          ))}
        </small>
      </Card.Footer>
    </Card>
  );
};

FeedCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  author: PropTypes.string,
  date_taken: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.string
};

export default FeedCard;
