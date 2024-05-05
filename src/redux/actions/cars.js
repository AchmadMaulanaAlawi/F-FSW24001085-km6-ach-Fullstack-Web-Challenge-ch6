import axios from "axios"
import { toast } from "react-toastify"
import { setCars, setCar } from "../reducers/cars"

export const addCar = (input) => async (dispatch, getState) => {
  const { token } = getState().auth

  const {
    plate,
    manufacture,
    model,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    image,
  } = input

  let data = new FormData()
  data.append("plate", plate)
  data.append("manufacture", manufacture)
  data.append("model", model)
  data.append("rentPerDay", rentPerDay)
  data.append("capacity", capacity)
  data.append("description", description)
  data.append("transmission", transmission)
  data.append("available", available)
  data.append("type", type)
  data.append("year", year)
  if (image) {
    data.append("image", image)
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/car`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  }

  try {
    const response = await axios.request(config)
    // navigate("/")
    toast.success("New car is successfully added")
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
}

export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/car`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.request(config)
    const { data } = response.data

    dispatch(setCars(data))
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
}

export const getCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.request(config)
    const { data } = response.data

    dispatch(setCar(data))
  } catch (error) {
    toast.error(error?.response?.data?.message)
    navigate("/")
  }
}

export const updateCar = (id, input) => async (dispatch, getState) => {
  const { token } = getState().auth
  const { car } = getState().cars

  const {
    plate,
    manufacture,
    model,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    image,
  } = input

  let data = new FormData()
  data.append("plate", plate)
  data.append("manufacture", manufacture)
  data.append("model", model)
  data.append("rentPerDay", rentPerDay)
  data.append("capacity", capacity)
  data.append("description", description)
  data.append("transmission", transmission)
  data.append("available", available)
  data.append("type", type)
  data.append("year", year)
  data.append("image", image)

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  }

  try {
    const response = await axios.request(config)
    const { data } = response.data
    dispatch(setCar(data))
    toast.success("Car successfully updated")
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
}

export const deleteCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.request(config)
    navigate("/")
    toast.success("Car is successfully deleted")
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
}
