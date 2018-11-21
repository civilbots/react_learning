class Clock extends React.Component{
   constructor(props) {
      super(props);
      this.launchClock();
      this.state = {
          currentTime: this.getCurrentTime()
      };
   }
    getCurrentTime() {
        return (new Date()).toLocaleString();
    }
    launchClock(){
        setInterval(() => {
            this.setState({
                currentTime: this.getCurrentTime()
            })
        },1000)
    }
    render(){
        return (
            <div>{this.state.currentTime}</div>
        );
    }
}