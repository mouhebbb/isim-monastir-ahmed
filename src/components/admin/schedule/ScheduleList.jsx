import React, { useEffect, useState } from "react";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({
    id: "",
    className: "",
    dateSchedule: "",
    imageSchedule: null,
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/schedules/all")
      .then((response) => response.json())
      .then((data) => setSchedules(data))
      .catch((error) => console.error("Error fetching schedules:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/schedules/delete/${id}`, {
      method: "DELETE",
    });
  };

  const handleUpdate = (schedule) => {
    setUpdateFormData({
      id: schedule.id,
      className: schedule.className,
      dateSchedule: schedule.dateSchedule,
      imageSchedule: schedule.imageSchedule, // Populate the image data for editing
    });
  };

  const handleSubmitUpdate = () => {
    fetch(`http://localhost:8080/api/schedules/update/${updateFormData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFormData),
    })
      .then((response) => {
        if (response.ok) {
          console.log(
            `Schedule with ID ${updateFormData.id} updated successfully.`
          );
          // Refresh the schedule list after updating
          fetch("http://localhost:8080/api/schedules/all")
            .then((response) => response.json())
            .then((data) => setSchedules(data))
            .catch((error) =>
              console.error("Error fetching schedules:", error)
            );
        } else {
          console.error("Failed to update schedule.");
        }
      })
      .catch((error) => console.error("Error updating schedule:", error));
  };

  const handleFileChange = (e) => {
    setUpdateFormData({ ...updateFormData, imageSchedule: e.target.files[0] });
  };

  return (
    <div className="container">
      <h2>Schedule List</h2>
      <div className="row">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Class Name: {schedule.className}</h5>
                <p className="card-text">
                  Date Schedule: {schedule.dateSchedule}
                </p>
                {schedule.imageSchedule && (
                  <div>
                    <strong>Image:</strong>
                    <br />
                    <img
                      src={`data:image/jpeg;base64,${schedule.imageSchedule}`}
                      alt="Schedule"
                      className="card-img-top"
                    />
                  </div>
                )}
                <button
                  onClick={() => handleUpdate(schedule)}
                  className="btn btn-primary"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(schedule.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                {updateFormData.id === schedule.id && (
                  <div>
                    <input
                      type="text"
                      value={updateFormData.className}
                      onChange={(e) =>
                        setUpdateFormData({
                          ...updateFormData,
                          className: e.target.value,
                        })
                      }
                      className="form-control mb-2"
                    />
                    <input
                      type="text"
                      value={updateFormData.dateSchedule}
                      onChange={(e) =>
                        setUpdateFormData({
                          ...updateFormData,
                          dateSchedule: e.target.value,
                        })
                      }
                      className="form-control mb-2"
                    />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="form-control-file mb-2"
                    />
                    <button
                      onClick={handleSubmitUpdate}
                      className="btn btn-success"
                    >
                      Submit Update
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleList;
