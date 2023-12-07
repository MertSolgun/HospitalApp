import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function Doctor({ doctor, setCatchAppoint }) {
  const [patientName, setpatientName] = useState("");
  const [appoDate, setappoDate] = useState("");

  const [show, setShow] = useState(false); // modal show
  const [selectDoctor, setselectDoctor] = useState(null);

  const handleClose = () => setShow(false); //button close

  const handleShow = (doctorName) => {
    setShow(true);
    setselectDoctor(doctorName);
  }; //button open

  const handleSubmit = (e) => {
    e.preventDefault(); // form !reload
    setpatientName("");
    setappoDate("");
    if (!patientName || !appoDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter patient name or date!",
      });
      return;
    }
    if (patientName.length > 15) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Name and surname cannot be more than 15 characters!",
      });
      return;
    }

    //olusturulan objeyi props olarak alma kismi
    const createadAppointment = {
      patient: patientName,
      day: new Date(appoDate),
      consulted: false,
      doctor: selectDoctor,
    }; //prevappointmens bir nevi catchAppoint
    setCatchAppoint((prevAppointments) => [
      ...prevAppointments,
      createadAppointment,
    ]);

    handleClose();
  };

  return (
    <>
      {/* //doctor image  */}
      <div className="doctorMain">
        {doctor.map((doc) => (
          <div key={doc.id}>
            <div>
              <img src={doc.img} alt="" onClick={() => handleShow(doc.name)} />
              <div className="doc-info text-center fw-bold">
                <p>{doc.name}</p>
                <p>{doc.dep}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectDoctor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name.."
                autoFocus
                value={patientName}
                name="patient"
                onChange={(e) => setpatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={appoDate}
                name="datetime"
                onChange={(e) => setappoDate(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Doctor;
