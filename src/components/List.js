import { SimpleSpinner } from "./Utils/Loaders";
import Card from "./Card";

export default function List({ data }) {

  return (
    <div className="container py-4 ">

      {
        data.status === 'loading' ?
          <SimpleSpinner title='جارى تحميل الافلام' />
          :
          data.status === 'searching' ?
            <SimpleSpinner title='جارى البحث' />
            :
            data.movies.length > 0 ?
              <div className="list">
                {data.movies.map(film => <Card key={film.id} film={film} />)}
              </div>
              : <h2 className="text-center">لا يوجد أفلام</h2>
      }

    </div>
  )

}

