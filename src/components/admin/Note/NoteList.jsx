import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);
  function createObjectURLFromBlob(byteArray) {
    const blob = new Blob([byteArray], { type: "application/pdf" });
    return URL.createObjectURL(blob);
  }

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/notes/all");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Notes</h2>
      <div className="row">
        {notes.map((note) => (
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

export default NoteList;
