"use strict";

const e = React.createElement;

const project_info = [
  {
    name: "architect",
    date: "June 2020 - August 2020",
    description:
      "JavaScript library to render animated 3D structures. Built using JavaScript with WebGL.",
    code: "https://github.com/wendy-guo/architect.js",
    site: "https://architectjs.herokuapp.com/",
  },
  {
    name: "playlistalyze",
    date: "September 2020",
    description: "Analyze your Spotify playlists to find out your music taste.",
    code: "https://github.com/wendy-guo/playlistalyze",
    site: "https://playlistalyze.herokuapp.com/",
  },
  {
    name: "card-jitsu",
    date: "November 2020 - December 2020",
    description:
      "The classic card game from Club Penguin. Built with React and Node.js. ",
    code: "https://github.com/wendy-guo/card-jitsu",
    site: "https://acard-jitsu.herokuapp.com/",
  },
];

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  handleClick = (i) => {
    this.setState({ selected: i });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "100px",
          }}
        >
          <Project
            i={0}
            name="architect.js"
            onClick={this.handleClick}
            selected={0 === this.state.selected}
          />
          <Project
            i={1}
            name="playlistalyze"
            onClick={this.handleClick}
            selected={1 === this.state.selected}
          />
          <Project
            i={2}
            name="card-jitsu"
            onClick={this.handleClick}
            selected={2 === this.state.selected}
          />
        </div>
        <ProjectInfo info={project_info[this.state.selected]} />
      </div>
    );
  }
}
class Project extends Projects {
  render() {
    return (
      <div
        onClick={() => this.props.onClick(this.props.i)}
        className={this.props.selected ? "selected project" : "project"}
      >
        {this.props.name}
      </div>
    );
  }
}

class ProjectInfo extends Projects {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img
            className="project-gif"
            src={`./images/${this.props.info.name}.gif`}
          />
        </div>
        <div className="project-info">
          <span
            className="secondary"
            style={{ fontSize: "18px", marginBottom: "20px" }}
          >
            {this.props.info.date}
          </span>
          <br />
          <span>{this.props.info.description}</span>
          <br />
          <a href={this.props.info.code} target="_blank">
            <button>code</button>
          </a>
          <a href={this.props.info.site} target="_blank">
            <button>website</button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector("#project-info");
console.log(domContainer);
ReactDOM.render(e(Projects), domContainer);
