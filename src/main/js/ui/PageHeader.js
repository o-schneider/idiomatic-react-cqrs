'use strict';

import React from 'react/addons';

export default class UiPageHeader extends React.Component {

    static propTypes = {
        icon: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <h2 className="pageheader"><i className={'fa fa-' + this.props.icon }></i> {this.props.text}</h2>
                <hr />
            </div>
        );
    }
}
