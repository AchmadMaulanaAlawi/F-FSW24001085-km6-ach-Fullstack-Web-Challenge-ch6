import { Row, Col, Form, Modal, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCar } from "../../../redux/actions/cars"

const ModalEdit = ({ car, modalShow, setModalShow }) => {
  const dispatch = useDispatch()

  const [manufacture, setManufacture] = useState(car?.manufacture)
  const [model, setModel] = useState(car?.model)
  const [year, setYear] = useState(car?.year)
  const [capacity, setCapacity] = useState(car?.capacity)
  const [type, setType] = useState(car?.type)
  const [transmission, setTransmission] = useState(car?.transmission)
  const [plate, setPlate] = useState(car?.plate)
  const [rentPerDay, setRentPerDay] = useState(car?.rentPerDay)
  const [description, setDescription] = useState(car?.description)
  const [available, setAvailable] = useState(car?.available)
  const [image, setImage] = useState(car?.image)

  const onHide = () => {
    setModalShow(false)
  }

  const onClick = () => {
    dispatch(
      updateCar(car.id, {
        manufacture,
        model,
        year,
        capacity,
        type,
        transmission,
        plate,
        rentPerDay,
        description,
        available,
        image,
      })
    )

    onHide()
  }

  useEffect(() => {
    setManufacture(car?.manufacture)
    setModel(car?.model)
    setYear(car?.year)
    setCapacity(car?.capacity)
    setType(car?.type)
    setTransmission(car?.transmission)
    setPlate(car?.plate)
    setRentPerDay(car?.rentPerDay)
    setDescription(car?.description)
    setAvailable(car?.available)
    setImage(car?.image)
  }, [car])

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Update Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="brand mb-3">
            <div className="fs-4 mb-1">Brand</div>
            <Row className="ps-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formManufacture"
              >
                <Form.Label className="text-secondary">Manufacture</Form.Label>
                <Form.Control
                  type="text"
                  value={manufacture}
                  onChange={(event) => setManufacture(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formModel"
              >
                <Form.Label className="text-secondary">Model</Form.Label>
                <Form.Control
                  type="text"
                  value={model}
                  onChange={(event) => setModel(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                as={Col}
              >
                <Form.Label className="text-secondary">Year</Form.Label>
                <Form.Control
                  type="text"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                />
              </Form.Group>
            </Row>
          </div>

          <div className="details mb-3">
            <div className="fs-4 mb-1">Details</div>
            <Row className="ps-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formCapacity"
              >
                <Form.Label className="text-secondary">Capacity</Form.Label>
                <Form.Control
                  type="text"
                  value={capacity}
                  onChange={(event) => setCapacity(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formType"
              >
                <Form.Label className="text-secondary">Type</Form.Label>
                <Form.Control
                  type="text"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formTransmission"
              >
                <Form.Label className="text-secondary">Transmission</Form.Label>
                <Form.Control
                  type="text"
                  value={transmission}
                  onChange={(event) => setTransmission(event.target.value)}
                />
              </Form.Group>
            </Row>
          </div>

          <div className="rental mb-3">
            <div className="fs-4 mb-1">Rental</div>
            <Row className="ps-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formPlate"
              >
                <Form.Label className="text-secondary">Plate</Form.Label>
                <Form.Control
                  type="text"
                  value={plate}
                  onChange={(event) => setPlate(event.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formRentPerDay"
              >
                <Form.Label className="text-secondary">Rent per Day</Form.Label>
                <Form.Control
                  type="text"
                  value={rentPerDay}
                  onChange={(event) => setRentPerDay(event.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-secondary">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows={3}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                id="formGridCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  checked={available ? true : false}
                  label="Available"
                  onChange={(event) => setAvailable(event.target.checked)}
                />
              </Form.Group>
            </Row>
          </div>
          <div className="media">
            <div className="fs-4 mb-1">Media</div>

            <div className="ps-3">
              {car?.image && (
                <div className="image-container pb-3">
                  <img
                    src={car?.image}
                    alt=""
                    srcset=""
                    className="rounded-3 w-100 border"
                  />
                </div>
              )}

              <Form.Group controlId="image">
                <Form.Label className="text-secondary">
                  {image ? "Change" : "Add"} image
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => onHide()}
        >
          Cancel
        </Button>
        <Button onClick={() => onClick()}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEdit
