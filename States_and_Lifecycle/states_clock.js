'use strict';
const e = React.createElement;
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

// https://reactjs.org/docs/state-and-lifecycle.html

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), elapsed_time: 0};
      // this.elapsed_time = 0;
      // The only place where you can assign this.state is the constructor.
      // Elsewhere, use setState(), instead.
    }
    // “lifecycle methods” -> component named methods
    // The componentDidMount() method runs after the component output has been 
    // rendered to the DOM. This is a good place to set up a timer
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(),1000);
    }
    // If the Clock component is ever removed from the DOM, React calls the 
    // componentWillUnmount() lifecycle method so the timer is stopped.
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick(){
      // this.setState({date: new Date(), elapsed_time: time_gone+1});
      this.setState(function(state, props) {
        return {
          date: new Date(),
          elapsed_time: state.elapsed_time + 1
        };
      });
      
      // this.elapsed_time = this.elapsed_time + 1
      // setState() enqueues changes to the component state and tells React that 
      // this component and its children need to be re-rendered with the updated 
      // state. Think of setState() as a request rather than an immediate command 
      // to update the component.
    }
    render() {
        // JSX in comments
        // return (
        //     <div>
        //      <h1>Hello, world!</h1>
        //      <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        //     </div>
        // );
        // JS below
        return e('div', null, e("h1", null, "Hello, world!"),
                              e("h2", null, "It is ", this.state.date.toLocaleTimeString(), "."),
                              e("h2", null, "Time elapsed since loading webpage: ", this.state.elapsed_time,".")
                    );
    };
}

root.render(e(Clock, null, null))


