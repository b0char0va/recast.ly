import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      video: exampleVideoData[0],
      term: ''
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  
  handleSearch(e){
    var searchInput = e.target.value;
    this.setState({
      term: searchInput
    });
    console.log(this.state.term);
  }

  onClickSearch(){

  }
  
  handleClick(e) {
    e.stopPropagation();
    var clickedVideoId = e.target.id;
    var playVideoObj = {};
    exampleVideoData.forEach(function(el){
        if(el.id.videoId === clickedVideoId){
            playVideoObj = el;
        }
    });
    this.setState({
      video: playVideoObj
    });
  }
  render(){
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch.bind(this)} onClickSearch={this.onClickSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos ={exampleVideoData} onClick ={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}





















// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// <VideoPlayer videos ={exampleVideoData}/>