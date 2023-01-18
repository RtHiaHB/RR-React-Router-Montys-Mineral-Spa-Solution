import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'


export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, i) => <ListGroup.Item action key={i}>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <ListGroup>
                {displayPackages}
            </ListGroup>
        </Container>
    )
}