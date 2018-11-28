class Logger extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log("componentWillMount triggered");
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps triggered');
        console.log('new props: ', newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate triggered');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate triggered');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('componentsDidUpdate triggered');
        console.log('old props: ', oldProps);
        console.log('old state: ', oldState);
    }

    componentDidMount(e) {
        console.log('componentDidMount triggered');
        console.log('DOM node: ', ReactDOM.findDOMNode(this));
    }

    componentWillUnmount(){
        console.log('componentWillUnmount triggered');
    }

    render() {
        return <h1>{this.props.time}</h1>
    }
}