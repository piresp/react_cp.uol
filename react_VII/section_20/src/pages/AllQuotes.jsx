import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning react is fun!'},
  { id: 'q2', author: 'Maximilian', text: 'Learning!'},
  { id: 'q3', author: 'Gabriel', text: 'Learning react is funtastic!'}
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes