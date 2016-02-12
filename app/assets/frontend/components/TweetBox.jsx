export default class TweetBox extends React.Component {
  render () {
    return (
      <div className="row">
        <form>
          <div className='input-field'></div>
          <textarea className="materialize-textarea" />
          <label>What's happenin?</label>
          <button className="btn right">Tweet!</button>
        </form>
      </div>
    )
  }
}
