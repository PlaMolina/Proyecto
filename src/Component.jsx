import React from 'react';


 var Component = React.createClass({
    getInitialState: function () { return { query: '' } },
    queryChange: function (evt) {
        this.setState({ query: evt.target.value });
    },
    handleSearch: function () {
        window.location.assign('/search/' + this.state.query + '/some-action');
    },
    render: function () {
        return (
            <div className="component-wrapper">
                <input type="text" value={this.state.query} />
                <button onClick={this.handleSearch()} className="button">
                    Search
              </button>
            </div>
        );
    }
});
export default Component