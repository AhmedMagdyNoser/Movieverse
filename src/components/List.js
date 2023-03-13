import Card from "./Card";

export default function List({ data }) {

  return (
    <div className="container py-4 ">

      {
        data ?
          <div className="list">
            {data.map(film => <Card key={film.id} film={film} />)}
          </div>
          : <h2 className="text-center">لا يوجد أفلام</h2>
      }

    </div>
  )

}