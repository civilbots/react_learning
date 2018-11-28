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
            console.log('updating time ...')
            this.setState({
                currentTime: this.getCurrentTime()
            })
        },1000)
    }
    render(){
       console.log('rendering clock ...');
        return (
            <div>{this.state.currentTime}</div>
        );
    }
}