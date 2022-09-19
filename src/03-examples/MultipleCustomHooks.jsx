import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
  const { counter, increment} = useCounter(1)
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
  const { data, isLoading, hasError } = useFetch(url)
  const { author, quote} = !!data && data[0]
  // console.log(data, isLoading, hasError)

  // if(isLoading) {
  //   return(
  //     <h1>Cargando...</h1>
  //   )
  // }

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-end">
              <p className="mb-1">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
          )
      }

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next Quote
      </button>
    </>
  )
}
