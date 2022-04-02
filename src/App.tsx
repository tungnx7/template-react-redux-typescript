// no redux

// import React, { Component } from "react";
// import { Provider } from "react-redux";
// import Demo from "./components/DemoComponent/Demo";
// import Demo2 from "./components/DemoComponent/Demo2";
// import { store } from "./redux/store";

// type Props = {  };

// type State = { text: string };

// class App extends Component<Props, State> {
//   state = {
//     text: "avc",
//   };
//   render() {
//     return (
//       <Provider store={store}>
//         <Demo2
//           changeText={(text: string) => {
//             this.setState({ text });
//           }}
//         ></Demo2>
//         <Demo text={this.state.text} />
//       </Provider>
//     );
//   }
// }

// export default App;

//redux

import React, { Component } from "react";
import { Provider } from "react-redux";
import Demo from "./components/DemoComponent/Demo";
import Demo2 from "./components/DemoComponent/Demo2";
import Demo2Redux from "./components/DemoComponent/Demo2Redux";
import DemoRedux from "./components/DemoComponent/DemoRedux";
import { store } from "./redux/store";

type Props = {};

type State = {};

class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <Demo2Redux/>
        <DemoRedux />
      </Provider>
    );
  }
}

export default App;
