export function SimpleSpinner({ title }) {
  return (
    <div className="container d-flex flex-column align-items-center py-4">
      <div className="spinner-border text-primary"></div>
      <h3 className="py-3">{title}</h3>
    </div>
  )
}