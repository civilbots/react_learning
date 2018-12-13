class MouseCapture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{border: '1px solid red'}}
                    onMouseOver={event => console.log('mouse over here')}
                    onMouseOverCapture={event => console.log('mouse over capture here')}
        >
            Open Devtools and move your mouse cursor over hear
        </div>
    }
}