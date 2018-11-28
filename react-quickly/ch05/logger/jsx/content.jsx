const getCurrentTime = () => (new Date()).toString();

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
            , currentTime: getCurrentTime()
        };
        this.refreshClock();
    }

    refreshClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter
                , currentTime: getCurrentTime()
            })
        }, 1000);
    }

    render() {
        return (this.state.counter > 2) ? <div>Hello</div> : <Logger time={this.state.currentTime}></Logger>;
    }
}