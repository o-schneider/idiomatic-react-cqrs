'use strict';

import React from 'react/addons';
import UiPageHeader from './PageHeader';

export default class UiHome extends React.Component {

    render() {

        const { user } = this.context;

        return (
            <div>
                <UiPageHeader icon="star" text={'Welcome !'} />
            </div>
        );
    }
}
