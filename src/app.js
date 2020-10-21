class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }

  handleDeleteOptions(){
    this.setState(() => {
      return{
        options: []
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
  


    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  handlePick(){
    alert('This is popup');
  }
 
  render() {
    return (
      <div>
        <button 
        onClick={this.handlePick}
        disabled={!this.props.hasOptions}
        >
        What should I do?
        </button>
       
      </div>
    );
  }
}

class Options extends React.Component {
 
  render() {
    return (
      <div>  
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>  
        {
          this.props.options.map((option) => <p key={option}>{option}</p>
         
          )
        }
        <Option />
      </div>
    );
  }
}


class Option extends React.Component {
  render() {
    return (
      <div>
     {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {

  handleaddOption(e){
    e.preventDefault();
  
  const option = e.target.elements.option.value.trim();

  if (option){
    alert('ddd');
  }
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleaddOption}>
        <input type="text" name="option"></input>
        <button>Add</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
