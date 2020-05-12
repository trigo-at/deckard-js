import React from 'react';
import {object} from 'prop-types';
import FullPageAlert from '../patterns/full-page-alert';

const ResponsePageError = ({location}) => {
    const params = new URLSearchParams(location.search);
    return (
        <FullPageAlert
            status="error"
            title={params.get('title') || 'common.error.title'}
            description={
                params.get('description') || 'common.error.description'
            }
            to={params.get('to') || '/'}
            action={params.get('action')}
        />
    );
};

ResponsePageError.propTypes = {
    location: object,
};

ResponsePageError.defaultProps = {
    location: undefined,
};

export default ResponsePageError;
