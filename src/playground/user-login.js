
    function UserGreeting(props){
        return <p>Welcome Back</p>;
    }
    function GuestGreeting(props){
        return <p>Please Login</p>;
    }

   function Greeting(props){
    const isUserlogin = props.isUserlogin;
    if(isUserlogin){
        return <UserGreeting />;
    }else{
        return <GuestGreeting />;
    }
   }

ReactDOM.render(<Greeting isUserlogin={true} />, document.getElementById('app'));