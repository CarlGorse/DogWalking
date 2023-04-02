import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SubPages(props) {

  var badge;
  if (!props.isComplete) {
    badge = <Col xs={2}>
      <Badge bg='danger'>incomplete</Badge>
    </Col>
  }
  else {
    badge = <Col xs={2}>
      <Badge bg='success'>complete</Badge>
    </Col>
  }

  return (
    <Accordion.Header>
      <Row style={{ width: "100%" }}>
        <Col xs={10}>
          {props.title}
        </Col>
        {badge}
      </Row>
    </Accordion.Header>
  );
}

export default SubPages;
