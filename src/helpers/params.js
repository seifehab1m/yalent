import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export default function useParams() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const newSearchParams = new URLSearchParams(searchParams.toString())

  const addParams = (params) => {
    Object.entries(params).forEach(([key, values]) => {
      newSearchParams.delete(key)
      values.forEach((val) => {
        newSearchParams.append(key, val)
      })
    })

    navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true })
  }

  const removeParams = (key) => {
    newSearchParams.delete(key)
    navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true })
  }

  const clearAllParams = () => {
    navigate(location.pathname, { replace: true })
  }

  return { addParams, removeParams, clearAllParams }
}
