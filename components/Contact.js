var Contact = React.createClass ({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
            }),
            React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
            React.createElement('p', {className: 'contactLabel'}, 'Nazwisko ' + this.props.item.LastName),
            React.createElement('a', {className: 'contactEmail'}, 'mailto: ' + this.props.item.Email),
                this.props.item.email
            )
        )
    }
})