import React from 'react';
import {shape, string} from 'prop-types';
import ViewSection from './view-section';
import DataList from './data-list';
import toDateString from '../to-date-string';

const MetaViewSection = ({entity}) => {
    return (
        <ViewSection title="common.meta">
            <DataList
                values={[
                    {
                        field: 'createdAt',
                        value: toDateString(entity.createdAt),
                    },
                    {
                        field: 'createdBy',
                        value: entity.createdBy,
                    },
                    {
                        field: 'updatedAt',
                        value: toDateString(entity.updatedAt),
                    },
                    {
                        field: 'updatedBy',
                        value: entity.updatedBy,
                    },
                ]}
            />
        </ViewSection>
    );
};

MetaViewSection.propTypes = {
    entity: shape({
        createdAt: string,
        createdBy: string,
        updatedAt: string,
        updatedBy: string,
    }),
};

MetaViewSection.defaultProps = {
    entity: {},
};

export default MetaViewSection;
