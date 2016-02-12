export default class TweetList extends React.Component {
  render () {
    return (
      <div>
        <ul className='colleciton'>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">User Name</span>
            <p>First #tweet</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">User Name</span>
            <p>Second #tweet</p>
          </li>
        </ul>
      </div>
    )
  }
}
