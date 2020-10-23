import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllDevices } from "../services/devices";
import { getAllMedsFromDevice } from "./../services/medications";


export default function Table(props) {
  const [devices, setDevices] = useState([]);
  const [deviceId, setDeviceId] = useState(null);
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const getDevices = await getAllDevices();
      setDevices(getDevices);
    };
    fetchDevices();
  }, []);

  useEffect(() => {
    const fetchMeds = async () => {
      const getMeds = await getAllMedsFromDevice(deviceId);
      setMeds(getMeds);
    };
    if (deviceId) {
      fetchMeds();
    }
  }, [deviceId]);

  const deviceJSX = devices.map((device) => {
    return (
      <option value={device.id} key={device.id}>
        {device.name}
      </option>
    );
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setDeviceId(value);
  };

  const renderHeader = () => {
    let headerElement = [
      "item",
      "description",
      "par level",
      "quantity on hand",
    ];

    return headerElement.map((title, index) => {
      return <th key={index}>{title.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return meds.map((med, idx) => {
      return (
        <tr key={med.id}>
          <td>{idx + 1}</td>
          <td>{med.description}</td>
          <td>{med.par_level}</td>
          <td>{med.quantity_on_hand}</td>
          <td>
              <button>Delete</button>
          </td>
          <td>
            <Link to={`/${deviceId}/edit/${med.id}`}>
              <button>Edit</button>
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <label htmlFor="devices">Device: &nbsp;</label>

      <select
        name="devices"
        id="devices"
        defaultValue="default"
        onChange={handleChange}
      >
        <option disabled value="default">
          --Select a device--
        </option>
        {deviceJSX}
      </select>
      <table>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      <Link to={`/${deviceId}/add`}>
        <button>Add</button>
      </Link> 
      </div>
  );
}
