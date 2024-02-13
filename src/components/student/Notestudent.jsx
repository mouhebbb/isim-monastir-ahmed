import React, { useState, useEffect } from "react";
import axios from "axios";

const Notestudent = ({ username }) => {
  const [notes, setNotes] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetchNotes();
  }, [username]);

  function createObjectURLFromBlob(byteArray) {
    const blob = new Blob([byteArray], { type: "application/pdf" });
    return URL.createObjectURL(blob);
  }

  const fetchNotes = async () => {
    try {
      const studentResponse = await axios.get(
        `http://localhost:8080/api/student/${username}`
      );
      setStudent(studentResponse.data);

      const notesResponse = await axios.get(
        `http://localhost:8080/api/notes/all`
      );
      setNotes(notesResponse.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Filter notes based on student class
  const filteredNotes = notes.filter(
    (note) => note.name === student.studentClasses
  );

  return (
    <div className="container">
      <div>
        <h2>Student Information</h2>
        <p>Username: {student.username}</p>
        <p>
          Name: {student.nom} {student.prenom}
        </p>
        <p>Age: {student.age}</p>
        <p>Email: {student.studentClasses}</p>
        {/* Render other student properties as needed */}
      </div>
      <h2 className="my-4">Notes</h2>
      <div className="row">
        {filteredNotes.map((note) => (
          <div key={note.id} className="col-md-4 mb-4">
            <div className="card">
              <a
                href={createObjectURLFromBlob(note.doc)}
                download={`${note.name}.pdf`}
              >
                <img
                  src="pdfimage.png"
                  className="card-img-top"
                  alt="Note Image"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Name: {note.name}</h5>
                <p className="card-text">
                  Date: {new Date(note.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notestudent;
