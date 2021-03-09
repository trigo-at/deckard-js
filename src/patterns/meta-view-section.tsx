import React, {FC} from 'react';
import {FormattedMessage} from 'react-intl';
import Card from '../data-display/card';
import CardHeader from '../headings/card-header';
import DescriptionList from '../data-display/description-list';
import DescriptionListItem from '../data-display/description-list-item';
import toDateString from '../to-date-string';

export type MetaViewSectionProps = {
    entity: {
        createdAt?: string;
        createdBy?: string;
        updatedAt?: string;
        updatedBy?: string;
    };
};

export const MetaViewSection: FC<MetaViewSectionProps> = ({entity}) => {
    return (
        <Card
            heading={
                <CardHeader heading={<FormattedMessage id="common.meta" />} />
            }>
            <DescriptionList>
                <DescriptionListItem
                    label={<FormattedMessage id="field.createdAt" />}
                    value={toDateString(entity.createdAt)}
                />
                <DescriptionListItem
                    label={<FormattedMessage id="field.createdBy" />}
                    value={entity.createdBy}
                />
                <DescriptionListItem
                    label={<FormattedMessage id="field.updatedAt" />}
                    value={toDateString(entity.updatedAt)}
                />
                <DescriptionListItem
                    label={<FormattedMessage id="field.updatedBy" />}
                    value={entity.updatedBy}
                />
            </DescriptionList>
        </Card>
    );
};

MetaViewSection.defaultProps = {
    entity: {},
};

export default MetaViewSection;
