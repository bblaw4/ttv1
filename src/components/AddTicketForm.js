import React from "react";

class AddTicketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ticket: "",
      name: "",
      unit: "",
      desc: "",
      completed: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTicket(this.state);
    this.setState({
      ticket: "",
      name: "",
      unit: "",
      desc: ""
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            ticket#:
            <input
              className="form-control"
              type="text"
              name="ticket"
              value={this.state.ticket}
              onChange={this.onChange}
            />
          </div>
          <div>
            Name:
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            Unit:
            <input
              className="form-control"
              type="text"
              name="unit"
              value={this.state.unit}
              onChange={this.onChange}
            />
          </div>
          <div>
            Description:
            <input
              className="form-control"
              type="text"
              name="desc"
              value={this.state.desc}
              onChange={this.onChange}
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTicketForm;
