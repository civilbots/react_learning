class Content extends React.Component{
    getUrl() {
        return 'http://google.co.in';
    }
   render() {
       return (
           <div>
               <p>Your REST API is :
                   <a href={this.getUrl()}>
                       {this.getUrl()}
                   </a>
               </p>
           </div>
       );
   }
}

ReactDOM.render(
    <Content/>
    ,document.getElementById('content')
);