let h1 = React.createElement('h1',null,'Hello World');
class HelloWorld extends React.Component {
    render(){
        console.log('isFrozen: ', Object.isFrozen(this.props));
        return React.createElement('div',null,h1);
    }
}
ReactDOM.render(
    React.createElement('div'
        ,null
        ,React.createElement(HelloWorld)
        ,React.createElement(HelloWorld)
        ,React.createElement(HelloWorld)
        ,React.createElement(HelloWorld)
    )
    ,document.getElementById('content')
);
