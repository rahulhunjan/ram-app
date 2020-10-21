class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
            this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
            this.state = {
                visibility:false
            };
        }
    
handleToggleVisibility(){
    this.setState((prevState) => {
        return{
            visibility: !prevState.visibility
        }
    })
}

render(){
    return(
        <div>
        <h2>Toggle Settings</h2>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {
            this.state.visibility && (
                <div>
                <p>Some heading text</p>
                </div>
            )
        }
        </div>
    );
}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app') );