import SingleBook from './SingleBook'

const BookList = ({ books }) => {
  return (
    <div className= "d-flex flex-wrap justify-content-center">
      {books.map((book) => (
        <SingleBook key = {book.asin} book = {book} />
      ))}
    </div>
  )
}

export default BookList