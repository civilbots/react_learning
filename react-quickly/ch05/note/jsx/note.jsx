class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    confirmLeave(e) {
        const confirmationMessage = 'Do you really want to close?';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    componentDidMount() {
        console.log('Attaching beforeunload event listener');
        window.addEventListener("beforeunload", this.confirmLeave);
    }

    componentWillUnmount() {
        console.log('removing beforeunload event listener');
        window.removeEventListener("beforeunload", this.confirmLeave);
    }

    render() {
        console.log('Note:: Render');
        return <div>
            Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)
        </div>
    }
}