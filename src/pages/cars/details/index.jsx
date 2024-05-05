import { useEffect, useState } from "react"
import { Row, Col, Button, Breadcrumb } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCar } from "../../../redux/actions/cars"

import ModalEdit from "../../../components/Modal/EditCar"
import ModalDelete from "../../../components/Modal/DeleteCar"

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const { car } = useSelector((state) => state.cars)
  const { user } = useSelector((state) => state.auth)

  const [modalEditShow, setModalEditShow] = useState(false)
  const [modalDeleteShow, setModalDeleteShow] = useState(false)

  useEffect(() => {
    // get car details by params id
    dispatch(getCar(navigate, id))
  }, [dispatch, id, navigate])

  return (
    <>
      <ModalEdit
        car={car}
        modalShow={modalEditShow}
        setModalShow={setModalEditShow}
      />
      <ModalDelete
        id={car?.id}
        modalShow={modalDeleteShow}
        setModalShow={setModalDeleteShow}
      />

      <Breadcrumb className="mb-3">
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Car Details</Breadcrumb.Item>
      </Breadcrumb>
      <Row
        md={2}
        xs={1}
      >
        <Col className="detail-image d-flex justify-center align-items-center">
          <img
            className="w-100"
            src={car?.image}
            alt="car image"
            srcSet=""
          />
        </Col>
        <Col className="">
          <div className="mt-4">{car?.manufacture}</div>
          <h1 className="fw-semibold">{car?.model}</h1>
          <div className="badges d-flex gap-2 mb-4 mt-3">
            <div className="year px-3 py-1 rounded-3 border border-black">
              <div className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                {car?.year}
              </div>
            </div>
            <div className="capacity px-3 py-1 rounded-3 border border-black">
              <div className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="Namebi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                {car?.capacity}
              </div>
            </div>
            <div className="transmission px-3 py-1 rounded-3 border border-black">
              <div className="d-flex align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
                {car?.transmission}
              </div>
            </div>
          </div>
          <p>{car?.description}</p>
          <div>Starts from</div>
          <div className="mb-2">
            <span className="fs-4">Rp. {car?.rentPerDay}</span> /day
          </div>
          <Button variant="primary">Order Now</Button>
          {user?.role === "admin" && (
            <>
              <Button
                className="ms-2"
                variant="secondary"
                onClick={() => setModalEditShow(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 19"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                </svg>
              </Button>
              <Button
                className="ms-2"
                variant="danger"
                onClick={() => setModalDeleteShow(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 19"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </Button>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Profile
