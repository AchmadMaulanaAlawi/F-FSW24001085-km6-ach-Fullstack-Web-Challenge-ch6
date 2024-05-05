import { useEffect, useState } from "react"
import { Button, Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getCars } from "../../redux/actions/cars"
import CarCard from "../../components/Card/Car"
import ModalAdd from "../../components/Modal/AddCar"

const Home = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { cars } = useSelector((state) => state.cars)

  const [modalAddShow, setModalAddShow] = useState(false)

  useEffect(() => {
    if (user) {
      dispatch(getCars())
    }
  }, [dispatch, cars])

  return (
    <>
      <ModalAdd
        modalShow={modalAddShow}
        setModalShow={setModalAddShow}
      />
      {user?.role === "admin" && (
        <Button
          onClick={() => setModalAddShow(true)}
          variant="secondary"
          className="d-flex gap-1 align-items-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            className="bi bi-car-front-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
          </svg>
        </Button>
      )}
      <Row
        xs={1}
        sm={2}
        md={3}
        className="g-4"
      >
        {cars.length > 0 &&
          cars.map((car) => (
            <CarCard
              key={car?.id}
              car={car}
            />
          ))}
      </Row>
    </>
  )
}

export default Home
