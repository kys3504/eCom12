import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow.js";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // [실습19-1]
    this.performSearch("avengers");
  }
  // [실습19-2]
  performSearch(serchTerm) {
    console.log("tmdb web Open API");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?&api_key=151a10798e54869f4c8a074635ec39f6&query=" +
      serchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("데이터를 가져오는데 성공함");
        const results = searchResults.results;
        const movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
          console.log(movie.poster_path);
          console.log(movie.title);
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("데이터	갖오는데	실패...!");
      }
    });
  }
  // [실습19-3]
  searchChangeHandler(event) {
    console.log(event.target.value);
    // [실습20-2]
    const boundObj = this;
    const serchTerm = event.target.value;
    boundObj.performSearch(serchTerm);
  }
  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app-icon" width="60" src="logo.svg" />
              </td>
              <td width="8" />
              <td>
                <h2>영화검색 DB프로젝트</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{
            fontSize: 15,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          // [실습 20-1]
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="찾고자하는 영화 키워드를 입력하세요."
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
