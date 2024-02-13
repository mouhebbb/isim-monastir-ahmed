import React, { useState } from "react";

const ScheduleForm = () => {
  const [schedule, setSchedule] = useState({
    className: "",
    dateSchedule: "",
    imageSchedule: null,
  });

  const suc = () => {
    alert("ajouter avec succcs");
    setSchedule({
      className: "",
      dateSchedule: "",
      imageSchedule: null,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "imageSchedule") {
      setSchedule({ ...schedule, [e.target.name]: e.target.files[0] });
    } else {
      setSchedule({ ...schedule, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("className", schedule.className);
    formData.append("dateSchedule", schedule.dateSchedule);
    formData.append("imageSchedule", schedule.imageSchedule);

    fetch("http://localhost:8080/api/schedules/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
    suc();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Schedule Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="className">Classe:</label>
          <input
            type="text"
            id="className"
            name="className"
            value={schedule.className}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="dateSchedule">Date Schedule:</label>
          <input
            type="date"
            id="dateSchedule"
            name="dateSchedule"
            value={schedule.dateSchedule}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="imageSchedule"> Schedule:</label>
          <input
            type="file"
            id="imageSchedule"
            name="imageSchedule"
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
