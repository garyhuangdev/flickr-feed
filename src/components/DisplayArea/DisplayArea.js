import React from 'react';
import FeedList from '../FeedList';
import Alert from '../Alert';
import Loader from '../Loader';
import { alert } from '../../constants/message';
import PropTypes from 'prop-types';

const DisplayArea = ({ feeds, loading, error, searchString }) => {
  const { emptyInput, dataError, noFeeds } = alert;
  return (
    <div className="display-area">
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
      ) : !feeds || feeds.length === 0 ? (
        <Alert
          alertHeading={noFeeds.header}
          alertContent={noFeeds.content}
          variant={noFeeds.variant}
        />
      ) : (
        <FeedList feeds={feeds} />
      )}
    </div>
  );
};

DisplayArea.propTypes = {
  feeds: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  searchString: PropTypes.string
};

export default DisplayArea;
