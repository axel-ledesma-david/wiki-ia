import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Search.css'
import ReactQuill from 'react-quill';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const Search = () => {

  const [value, setValue] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='DivS'>
      <h2 className='title-search'>Busca o <button type="button" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success">Crea tu Tema</button></h2>
      <input type="text" id='search' placeholder='Search' />
      <FontAwesomeIcon icon={faSearch} className='icon' />


      <Modal show={show} onHide={handleClose} size='lg'  >
        <Modal.Header closeButton>
          <Modal.Title>Creando Tema</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Añadir título"
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="editor"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Crear tema
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


