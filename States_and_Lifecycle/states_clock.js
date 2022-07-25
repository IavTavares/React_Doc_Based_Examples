'use strict';
const e = React.createElement;
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    render() {
        // return (
        //     <div>
        //     <h1>Hello, world!</h1>
        //     <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        //     </div>
        // );
        return e('div', null, e("h1", null, "Hello, world!"),
                    e("h2", null, "It is ", this.state.date.toLocaleTimeString(), "."));
    };
}

function tick() {
//   root.render(<Clock date={new Date()} />);
  root.render(e(Clock, null, null))
}

setInterval(tick, 1000);


