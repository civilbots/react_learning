let h1 = React.createElement('h1',null, 'HelloWorld');

class HelloWorld extends React.Component {
    render(){
        return React.createElement(
            'div'
            , this.props
            , `Hello ${this.props.frameWork} world`
        )
    }
}

ReactDOM.render(
    React.createElement(
        'div'
        , null
        , React.createElement(
            HelloWorld
            ,{
            id : 'ember'
            , frameWork : 'Ember.js'
            , title : 'A framework for creating ambitious web applications'
            }
        )
        , React.createElement(
            HelloWorld
            ,{
                id : 'backbone'
                , frameWork : 'Backbone.js'
                , title : 'Backbone.js gives structure to web applications...'
            }
        )
        , React.createElement(
            HelloWorld
            ,{
                id : 'angular'
                , frameWork : 'Angular.js'
                , title : 'Super heroic Javascript MVM Framework'
            }
        )
    )
    , document.getElementById('content')
);