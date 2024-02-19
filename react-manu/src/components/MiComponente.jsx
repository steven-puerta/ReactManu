

function MiComponente({children, texto}) {
  return (
    <div>
        <h2>{texto}</h2>
        {children}
    </div>
  )
}

export default MiComponente