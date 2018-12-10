const dataUrl = './real-user-data.json'; //Not sure who calls this, hence correct is give the absolute path
ReactDOM.render(
    <div>
        <Users dataUrl={dataUrl}/>
    </div>
    , document.getElementById('content')
);