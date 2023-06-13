import Card from "./Card";
import Pagination from "./Utils/Pagination";
import { SimpleSpinner } from "./Utils/Loaders";

export default function List({ state, getMovies, currentPage }) {

  function checkStatus() {
    if (state.status === 'loading')
      return <SimpleSpinner title='جارى تحميل الافلام' />;
    else if (state.status === 'searching')
      return <SimpleSpinner title='جارى البحث' />;
    else return results;
  }

  let results = <div>
    {state.data.results ?
      <>
        <div className="list mb-4">
          {state.data.results.map(film => <Card key={film.id} film={film} />)}
        </div>
        <Pagination
          getPage={getMovies}
          currentPage={currentPage}
          totalPages={state.data.total_pages <= 500 ? state.data.total_page : 500}
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

