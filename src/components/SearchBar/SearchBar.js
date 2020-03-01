import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { scrollTop } from '../../utils';
import PropTypes from 'prop-types';

const SearchBar = ({ searchString, handleInputChange }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      className="justify-content-center"
    >
      <Navbar.Brand className="pr-2">Flickr Search</Navbar.Brand>
      <Form>
        <FormControl
          autoFocus
          value={searchString}
          onChange={handleInputChange}
          placeholder={'Enter tags'}
        />
      </Form>
      <Button
        className="ml-3"
        variant="outline-info"
        size="sm"
        onClick={scrollTop}
      >
        Top
      </Button>
    </Navbar>
  );
};

SearchBar.propTypes = {
  searchString: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default SearchBar;
