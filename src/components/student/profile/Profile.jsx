import React from "react";

const Profile = ({ student }) => {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Student Profile</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="fs-5 mb-3">
            <strong>Nom:</strong> {student.nom}
          </p>
          <p className="fs-5 mb-3">
            <strong>Prenom:</strong> {student.prenom}
          </p>
          <p className="fs-5 mb-3">
            <strong>Age:</strong> {student.age}
          </p>
          <p className="fs-5 mb-3">
            <strong>Email:</strong> {student.email}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
