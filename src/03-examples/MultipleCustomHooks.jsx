import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './components';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote quote={quote} author={author} />
      )}

      <button 
        className="btn btn-primary" 
        disabled={isLoading} 
        onClick={() => increment(1)}
      >
        Next Quote
      </button>
    </>
  );
};
