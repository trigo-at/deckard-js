import React, {Fragment, ReactElement} from 'react';
import {FormattedMessage} from 'react-intl';
import Link from '../components/link';

type DataEntry = {
    field: string;
    value?: any;
    format?: string;
    link?: string;
    isExternal?: boolean;
    Component: React.FC<any>;
    render: (value: string) => ReactElement;
};

type DataEntryProps = {
    entry: DataEntry;
};

const DataEntry: React.FC<DataEntryProps> = ({entry}: DataEntryProps) => {
    if (entry.render) {
        return entry.render(entry.value);
    }
    if (entry.Component) {
        return <entry.Component>{entry.value}</entry.Component>;
    }
    if (entry.link) {
        return (
            <Link to={entry.link} isExternal={entry.isExternal}>
                {entry.format ? (
                    <FormattedMessage id={`${entry.format}.${entry.value}`} />
                ) : (
                    entry.value
                )}
            </Link>
        );
    }
    if (entry.format) {
        return (
            <p className="text-gray-900">
                <FormattedMessage id={`${entry.format}.${entry.value}`} />
            </p>
        );
    }
    return <p className="text-gray-900">{entry.value}</p>;
};

type DataListProps = {
    values: Array<DataEntry>;
};

const DataList: React.FC<DataListProps> = ({values}: DataListProps) => {
    return (
        <div className="grid grid-cols-view-section">
            {values.map((value) => (
                <Fragment key={value.field}>
                    <div className="flex items-start py-3 h-full border-b-2 border-gray-200">
                        <p className="text-gray-600">
                            <FormattedMessage id={`field.${value.field}`} />
                        </p>
                    </div>
                    <div className="py-3 border-b-2 border-gray-200">
                        <DataEntry entry={value} />
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

DataList.defaultProps = {
    values: [],
};

export default DataList;
