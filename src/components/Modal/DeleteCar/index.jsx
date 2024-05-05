import { Row, Col, Form, Modal, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../../../redux/actions/cars"
import { useNavigate } from "react-router-dom"

const ModalDelete = ({ id, modalShow, setModalShow }) => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onHide = () => {
    setModalShow(false)
  }

  const onClick = () => {
    dispatch(deleteCar(navigate, id))
    onHide()
  }

  return (
    <Modal
      show={modalShow}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Delete Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form>
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

          <div className="rental">
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
        </Form> */}
        <p>Are you sure to delete this car?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => onHide()}
        >
          Cancel
        </Button>
        <Button onClick={() => onClick()}>Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
