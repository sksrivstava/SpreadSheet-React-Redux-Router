import React, { Component } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import pokeball from "../image/pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  /* state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //  console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }
 */

  render() {
    const { posts } = this.props;
    const postslist = posts.length ? (
      posts.map((p) => {
        return (
          <div className="post card" key={p.id}>
            <img src={pokeball} alt="ball"></img>
            <div className="card-content">
              <Link to={"/" + p.id}>
                {" "}
                <span className="card-title red-text">{p.title}</span>
              </Link>
              <p className="card-body">{p.body}</p>
            </div>
            s
          </div>
        );
      })
    ) : (
      <div className="center">No post</div>
    );
    return (
      <div className="container home">
        <h4 className="center ">Home Page</h4>
        {postslist}
        <span></span>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToprops)(Home);
