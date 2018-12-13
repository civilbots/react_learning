class SaveButton extends React.Component{
    constructor(props){
        super(props);
        // this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(event){
        console.log(this,event);
    }
    render(){
        return <div>
            {/*<button onClick={event => console.log(this,event)}>Save</button>*/}
            {/*<button onClick={this.handleOnClick}>Save</button>*/}
            <button onClick={this.handleOnClick.bind(this)}>Save</button>
        </div>
    };
}