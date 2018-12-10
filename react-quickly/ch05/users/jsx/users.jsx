class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount(){
        console.log("properties: ", this.props.dataUrl);
        fetch(this.props.dataUrl)
            .then(res => res.json())
            .then(users => this.setState({users:users}))
            .catch(err => {
                console.log('err:: ', err);
            })
    }

    render() {
        return <div className={"container"}>
            <h1>List of users</h1>
            <table className="table-striped table-condensed table table-bordered table-hover">
                <tbody>{this.state.users.map(user =>
                    <tr key={user.id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}