class HelloWorld extends React.Component{
    render(){
        return <h1 {...this.properties}>
            Hello {this.props.frameWork} World
            </h1>
    }
}
ReactDOM.render(
    <div>
        <HelloWorld
            id='ember'
            frameWork='Ember.js'
            title='A framework for creating ambitious web applications.'
        />
        , <HelloWorld
            id='backbone'
            frameWork='Backbone.js'
            title='Backbone.js gives structure to web applications...'
        />
        , <HelloWorld
            id='Angular'
            frameWork='Angular.js'
            title='Superheroic JavaScript MVW Framework'
        />
    </div>
    , document.getElementById('content')
);