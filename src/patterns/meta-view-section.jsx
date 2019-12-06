import React from 'react';
import {shape, string} from 'prop-types';
import ViewSection from './view-section';
import DataList from './data-list';

const MetaViewSection = ({entity}) => {
    return (
        <ViewSection title="common.meta">
            <DataList
                values={[
                    {
                        field: 'createdAt',
                        value: entity.createdAt,
                    },
                    {
                        field: 'createdBy',
                        value: entity.createdBy,
                    },
                    {
                        field: 'updatedAt',
                        value: entity.updatedAt,
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
