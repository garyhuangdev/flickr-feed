import React from 'react';
import FeedLayout from '../components/Feed';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { alert } from '../constants/message';
import PropTypes from 'prop-types';

const Container = ({ feeds, loading, error, searchString }) => {
  const { emptyInput, dataError, noFeeds } = alert;
  return (
    <div className="home-container">
      {!searchString ? (
        <Alert
          alertHeading={emptyInput.header}
          alertContent={emptyInput.content}
          variant={emptyInput.variant}
        />
      ) : loading ? (
        <Loader />
      ) : error ? (
        <Alert
          alertHeading={dataError.header}
          alertContent={dataError.content}
          variant={dataError.variant}
        />
      ) : !feeds ? (
        <Alert
          alertHeading={noFeeds.header}
          alertContent={noFeeds.content}
          variant={noFeeds.variant}
        />
      ) : (
        <FeedLayout feeds={feeds} />
      )}
    </div>
  );
};

Container.propTypes = {
  feeds: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  searchString: PropTypes.string
};

export default Container;
