import React, { Component } from "react";
import {
  Form,
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Dimmer,
  Loader,
  Divider,
  Grid,
  Table,
  Menu,
} from "semantic-ui-react";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      stats: {},
      accounts: {},
    };
  }

  componentDidMount() {
    this.setState({
      accounts: this.props.accounts.filter(
        (account) => account.user_id === this.props.user.id
      ),
    });
  }

  render() {
    return (
      <div>
        <Table celled padded striped color='blue'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row verticalAlign='top'>
              <Table.Cell>John</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell verticalAlign='top'>
                Notes
                <br />
                1<br />
                2<br />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Account;
