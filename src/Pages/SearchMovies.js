import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import { SimpleSpinner } from "../Components/Utils/Loaders"
import Pagination from "../Components/Utils/Pagination"
import Card from "../Components/MovieCard"

export default function SearchMovies({ state, search, searchPageNum }) {

  let params = useParams();
  let location = useLocation();

  function paginationSearch(page) {
    search(params.query, page);
  }
  
  // eslint-disable-next-line
  useEffect(() => { search(params.query, 1) }, [location])

  let results = <>
    {state.data.results && state.data.results.length > 0 ?
      <>
        <h3 className="text-center mb-4">
          نتائج البحث عن "{params.query}"
        </h3>
        <div className="list mb-4">
          {state.data.results.map(film => <Card key={film.id} film={film} />)}
        </div>
        <Pagination
          getPage={paginationSearch}
          currentPage={searchPageNum}
          totalPages={state.data.total_pages}
        />
      </>
      : <h2 className="text-center">لا يوجد أفلام</h2>}
  </>

  return (
    <div className="container py-4">
      {state.status === 'searching' ? <SimpleSpinner title='جارى البحث' /> : results}
    </div>
  )
}