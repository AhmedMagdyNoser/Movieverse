import Card from "./Card";
import Pagination from "./Utils/Pagination";
import { SimpleSpinner } from "./Utils/Loaders";
import { useParams } from "react-router-dom";

export default function List({ state, getMovies, search, currentPage }) {

  let params = useParams();

  function checkStatus() {
    if (state.status === 'loading')
      return <SimpleSpinner title='جارى تحميل الافلام' />;
    else if (state.status === 'searching')
      return <SimpleSpinner title='جارى البحث' />;
    else return results;
  }

  function getSearchPage(page) {
    search(params.query, page)
  }

  let results = <div>
    {state.data.results ?
      <>
        <div className="list mb-4">
          {state.data.results.map(film => <Card key={film.id} film={film} />)}
        </div>
        <Pagination
          getPage={getMovies ? getMovies : getSearchPage}
          currentPage={currentPage}
          totalPages={state.data.total_pages <= 500 ? state.data.total_pages : 500}
        />
      </>
      : <h2 className="text-center">لا يوجد أفلام</h2>}
  </div>

  return (
    <div className="container py-4">
      {checkStatus()}
    </div>
  )

}

