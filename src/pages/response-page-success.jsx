import React from 'react';
import {object} from 'prop-types';
import FullPageAlert from '../patterns/full-page-alert';

const ResponsePageSuccess = ({location}) => {
    const params = new URLSearchParams(location.search);
    return (
        <FullPageAlert
            status="success"
            title={params.get('title') || 'common.success.title'}
            description={
                params.get('description') || 'common.success.description'
            }
            to={params.get('to') || '/'}
            action={params.get('action')}
        />
    );
};

ResponsePageSuccess.propTypes = {
    location: object,
};

ResponsePageSuccess.defaultProps = {
    location: undefined,
};

export default ResponsePageSuccess;
