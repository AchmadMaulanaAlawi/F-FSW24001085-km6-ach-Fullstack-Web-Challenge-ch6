import { Col, Card, Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const CarCard = ({ car }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          className="p-1"
          variant="top"
          src={car?.image}
          alt="car-image"
        />
        <Card.Body className="d-flex flex-column">
          <div className="text m">
            <p className="mb-1">
              {car.manufacture} {car.model}
            </p>
            <Card.Title className="fw-semibold mb-4">
              Rp. {car.rentPerDay}
            </Card.Title>
          </div>
          <div className="button mt-auto">
            <Button
              variant="primary"
              as={Link}
              to={`/cars/${car?.id}`}
            >
              See More
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

CarCard.propTypes = {
  car: PropTypes.object,
}

export default CarCard
