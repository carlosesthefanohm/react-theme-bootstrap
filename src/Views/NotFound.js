import React from 'react'
import Card from 'react-bootstrap/Card'

const NotFound = ({ imageNotFound, backUrl, Link, styleImage }) => {
  return <div className='not-found-container'>
    <Card className="d-flex flex-column justify-content-center align-items-center p-5">
      <img src={imageNotFound} alt="Página No Existe" style={{
        maxHeight: '200px',
        ...styleImage
      }} />

      <h3 className="text-primary font-weight-bold mt-2">No Existe La Página</h3>
      <Link to={backUrl} className="btn btn-outline-primary">
        <i className="fa fa-arrow-left mr-2"></i>Regresar
      </Link>
    </Card>
  </div>
}

NotFound.defaultProps = {
  styleImage: {}
}

export default NotFound