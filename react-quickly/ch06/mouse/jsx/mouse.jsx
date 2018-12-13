class Mouse extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{border: '1px solid red'}}
                    onMouseOver={event => {
                        console.log('mouse is over with event');
                        console.dir(event);
                    }
                    }>
            <h1>Open devtools and move your mouse cursor over here</h1>
        </div>
    }
}