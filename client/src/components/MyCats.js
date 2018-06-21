import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyCats extends React.Component {
  state = { cats: [] }

  componentDidMount() {
    axios.get('/api/my_cats')
      .then(res => {
        this.setState({ cats: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { cats } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        {cats.map(cat =>
          <Card key={cat.id}>
            <Card.Content>
              <Image src={cat.avatar} />
              <Divider />
              <Card.Header>
                {cat.name}
              </Card.Header>
            </Card.Content>
          </Card>

        )}
      </Card.Group>
    )
  }
}

export default connect()(MyCats)