/*
 * Bootstrap
 *
 * This is the first thing users see of our App, at the '/bootstrap' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button , ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Grid, Row, Col, ProgressBar, Clearfix} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export default class ReactBootstrap extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

  const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>

        <h3> Buttons </h3>

        <h5> By Size: </h5>
        
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" >Bootstrap Button</Button>
          <Button bsStyle="primary" >Bootstrap Button Decomentation</Button>
        </ButtonToolbar>
        <br />
        <pre>
          {`        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" >Bootstrap Button</Button>
          <Button bsStyle="primary" >Bootstrap Button Decomentation</Button>
        </ButtonToolbar>`}
        </pre>
        <br />
        <h5> Buttons Group: </h5>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br /><br />
        <pre>
        {`        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>`}
        </pre>


        <h5> Dropdown: </h5>
        <ButtonToolbar>
          <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <br />
        <pre>
        {`      <ButtonToolbar>
          <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>`}
        </pre>

        <h3> Grid </h3>
        <Grid>
          <Row className="show-grid">
            <Col md={8}><code>&lt;{'Col  md={8} '} /&gt;</code></Col>
            <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col md={4}><code>&lt;{'Col md={4}   Lorem ipsum dolor sit amet, consectetuer adipiscing elit., Donec hendrerit temp'} /&gt;</code></Col>
            <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
            <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdOffset={5}><code>&lt;{'Col md={6} mdOffset={5}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={4} mdPull={5}><code>&lt;{'Col md={4} mdPull={5}'} /&gt;</code></Col>
          </Row>
        </Grid>
        <br />
        <pre>
        {`        <Grid>
          <Row className="show-grid">
            <Col md={8}>TEXT HERE</Col>
            <Col md={4}>TEXT HERE</Col>
          </Row>

          <Row className="show-grid">
            <Col md={4}>TEXT HERE</Col>
            <Col md={4}>TEXT HERE</Col>
            <Col xsHidden md={4}>TEXT HERE</Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdOffset={5}>TEXT HERE</Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>TEXT HERE</Col>
            <Col md={4} mdPull={5}>TEXT HERE</Col>
          </Row>
        </Grid>`}
        </pre>

        <h5> Clearfix : clear correctly in viewport sm (768px ≤ width ≤ 991px) </h5>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={2}><code>&lt;{'Col sm={6} md={2}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
            <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
            <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
            <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
          </Row>
        </Grid>

        <pre>
        {`        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={2}>TEXT HERE</Col>
            <Col sm={6} md={4}>TEXT HERE</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
            <Col sm={6} md={3}>TEXT HERE</Col>
            <Col sm={6} md={3}>TEXT HERE</Col>
          </Row>
        </Grid>`}
        </pre>


        <h3> Progress Bar </h3>

        <ProgressBar active now={45} />

        <ProgressBar>
          <ProgressBar striped bsStyle="success" now={35} key={1} />
          <ProgressBar bsStyle="warning" now={20} key={2} />
          <ProgressBar active bsStyle="danger" now={10} key={3} />
        </ProgressBar>

        <pre>
        {`        <ProgressBar active now={45} />

        <ProgressBar>
          <ProgressBar striped bsStyle="success" now={35} key={1} />
          <ProgressBar bsStyle="warning" now={20} key={2} />
          <ProgressBar active bsStyle="danger" now={10} key={3} />
        </ProgressBar>`}
        </pre>




      </div>
    );
  }
}
