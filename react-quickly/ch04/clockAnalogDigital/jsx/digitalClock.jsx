const DigitalClock = props => <div> {(new Date(props.time)).toLocaleString()} </div>;
