import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetsList"

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
      document.getElementById('react')
  );
}

$(documentReady);
