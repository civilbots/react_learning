const getCurrentTime = () => (new Date()).toString();

class ClockAnalogDigital extends React.Component {
    constructor(props) {
        super(props);
        this.refreshClock();
        this.state = {currentTime: getCurrentTime()};
    }

    refreshClock() {
        setInterval(() => {
                this.setState({currentTime: getCurrentTime()});
            }
            , 1000)
    }

    render() {
        return <div>
            <AnalogClock time={this.state.currentTime}/>
            <DigitalClock time={this.state.currentTime}/>
        </div>
    }
}