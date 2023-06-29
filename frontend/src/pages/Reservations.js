import { FaBuilding, FaSearch, FaTimesCircle, FaFilter, FaUsers,FaTachometerAlt,FaCogs } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ford from "../assets/cartype/family/Ford-Ecosport-cars.png";
import foton from "../assets/cartype/family/foton-cars.png";
import nissan from "../assets/cartype/family/family cars-BMW X3_0.jpg";

import luxury from '../assets/catergories/luxury-mercedez-benz.png';


export const Reservations = () => {
  const navigate = useNavigate();
  const [isCarSpecsOpen, setCarSpecsOpen] = useState(false);
  const [isCarCategoriesOpen, setCarCategoriesOpen] = useState(false);
  const [isTransmissionOpen, setTransmissionOpen] = useState(false);
  const [selectedCarSpecs, setSelectedCarSpecs] = useState([]);
  const [selectedCarCategories, setSelectedCarCategories] = useState([]);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const carSpecsOptions = [
    "Compact",
    "SUV",
    "Sedan",
    "Convertible",
    "Electric",
    "Luxury",
  ];
  const carCategoriesOptions = [
    "Luxury",
    "Business",
    "Bridal",
    "Pick-up",
    "Travel",
    "Casual",
  ];
  const transmissionOptions = ["Automatic", "Manual"];

  const handleCarSpecsToggleDropdown = (e) => {
    e.preventDefault();
    setCarSpecsOpen(!isCarSpecsOpen);
  };

  const handleCarCategoriesToggleDropdown = (e) => {
    e.preventDefault();
    setCarCategoriesOpen(!isCarCategoriesOpen);
  };

  const handleTransmissionToggleDropdown = (e) => {
    e.preventDefault();
    setTransmissionOpen(!isTransmissionOpen);
  };

  const handleCarSpecsChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCarSpecs((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCarSpecs((prevSelected) =>
        prevSelected.filter((spec) => spec !== value)
      );
    }
  };

  const handleCarCategoriesChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCarCategories((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCarCategories((prevSelected) =>
        prevSelected.filter((category) => category !== value)
      );
    }
  };

  const handleTransmissionChange = (event) => {
    const { value } = event.target;
    setSelectedTransmission(value);
  };

  const handleRentNow = () =>{
    navigate("/cardetails")
  }

  return (
    <div>
      <div className="bg-shade py-40">
        <div className="mx-auto md:w-11/12  rounded-lg bg-cyan-600 z-40 relative bottom-16 sm:bottom-10 px-2 lg:px-5 xl:px-5 py-5 mb-5" id="filter">
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 justify-center items-center">
              {/* Car specs */}
              <div className="flex justify-center items-center rounded-lg bg-white py-2 col-span-2 lg:col-span-1">
                <div className="relative">
                  <select
                    className="rounded-lg pl-8 focus:ring-0 border-none"
                    id="location"
                    name="location"
                    placeholder="Pick-up Branch"
                  >
                    <option disabled value="">
                      Branch
                    </option>
                    <option value="Manila">Manila</option>
                    <option value="Pasay">Pasay</option>
                    <option value="Pasig">Pasig</option>
                    <option value="Makati">Makati</option>
                  </select>
                  <div className="absolute top-2 left-1">
                    <FaBuilding size="1.5rem" className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Pick-up Date */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center relative">
                  <label htmlFor="pickupDate" className="pt-2 text-sm font-bold">
                    Pickup Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                  />
                </div>
              </div>

              {/* Pick-up Time */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label htmlFor="pickupTime" className="pt-2 text-sm font-bold">
                    Time:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label htmlFor="returnDate" className="pt-2 text-sm font-bold">
                    Return Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="returnDate"
                    name="returnDate"
                  />
                </div>
              </div>

              {/* Return Time */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label htmlFor="returnTime" className="pt-2 text-sm font-bold">
                    Time:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="time"
                    id="returnTime"
                    name="returnTime"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className=" flex justify-center items-center  xl:mx-auto xl:w-max rounded-lg bg-white relative bottom-16 sm:bottom-10 px-5 mx-5 lg:px-1 xl:px-5 py-5">
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 justify-center items-center">
              <div className="flex items-center md:col-span-7 md:col-start-3 lg:col-span-1">
                <h2 className="text-lg font-bold flex items-center">
                  <FaFilter className="mr-2" /> {/* Assuming you want to use the FaFilter icon */}
                  <span>Filter</span>
                </h2>
              </div>



              {/* Car Specs */}
              <div className="relative col-span-1">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle bg-white rounded-lg py-2 flex items-center justify-between w-full md:justify-center"
                    onClick={handleCarSpecsToggleDropdown}
                  >
                    Car Specs
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        isCarSpecsOpen ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCarSpecsOpen && (
                    <div className="dropdown-menu absolute bg-white w-full rounded-lg shadow-md mt-2">
                      <div className="flex flex-col p-4">
                        {carSpecsOptions.map((option) => (
                          <label htmlFor={option} className="flex items-center" key={option}>
                            <input
                              type="checkbox"
                              id={option}
                              name="carSpecs"
                              value={option}
                              checked={selectedCarSpecs.includes(option)}
                              onChange={handleCarSpecsChange}
                            />
                            <span className="ml-2">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Car Categories */}
              <div className="relative">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle bg-white rounded-lg  py-2 flex items-center justify-between w-full"
                    onClick={handleCarCategoriesToggleDropdown}
                  >
                    Car Categories
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        isCarCategoriesOpen ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCarCategoriesOpen && (
                    <div className="dropdown-menu absolute bg-white w-full rounded-lg shadow-md mt-2">
                      <div className="flex flex-col p-4">
                        {carCategoriesOptions.map((option) => (
                          <label htmlFor={option} className="flex items-center" key={option}>
                            <input
                              type="checkbox"
                              id={option}
                              name="carCategories"
                              value={option}
                              checked={selectedCarCategories.includes(option)}
                              onChange={handleCarCategoriesChange}
                            />
                            <span className="ml-2">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Transmission */}
              <div className="relative">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle bg-white rounded-lg pl-4 py-2 flex items-center justify-between w-full"
                    onClick={handleTransmissionToggleDropdown}
                  >
                    Transmission
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        isTransmissionOpen ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isTransmissionOpen && (
                    <div className="dropdown-menu absolute bg-white w-full rounded-lg shadow-md mt-2">
                      <div className="flex flex-col p-4">
                        {transmissionOptions.map((option) => (
                          <label htmlFor={option} className="flex items-center" key={option}>
                            <input
                              type="checkbox"
                              id={option}
                              name="transmission"
                              value={option}
                              checked={selectedTransmission.includes(option)}
                              onChange={handleTransmissionChange}
                            />
                            <span className="ml-2">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              
              <button className="flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 col-span-2 lg:col-span-1 lg:col-start-6">
                <FaSearch className="mr-2" />
                Search
              </button>
              
              
              <button className="flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 col-span-2 lg:col-span-1">
                <FaTimesCircle className="mr-2" /> 
                Clear Filter
              </button>

            </div>
          </form>


        </div>
      {/* Cards */}

      <div className="container-family grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        {/* 1st card 1st row */}
        <div className=" border rounded-lg grid bg-card">
            <div className="h-56 overflow-hidden ">
            <img
              src={ford}
              className="rounded-lg h-full w-full object-cover"
              alt="Toyota Avanza"
            />

            </div>

            <div className="grid ">
              <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9  text-left font-semibold py-5">
                Ford Ecosport
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">5 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">168 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3750 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 4,500 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5" onClick={handleRentNow}>
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
        </div> {/* 1st card 1st row */}

        {/* 2nd card 1st row */}
        <div className=" border bg-shade rounded-lg grid">
            <div className="h-56 overflow-hidden">

            <img
              src={foton}
              className="rounded-lg w-full h-full object-cover"
              alt="Toyota Avanza"
             
            />
            </div>

            <div className="grid">
              <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">
                Foton Transvan
              </h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">13 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">130 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">3600 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9 ">
                <div className="text-center">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
        </div>

        {/* 3rd card 1st row */}
        <div className="grid bg-card border rounded-lg ">
            <div className="h-56 overflow-hidden">
            <img
              src={nissan}
              className="rounded-lg h-full w-full object-cover"
              alt="Toyota Avanza"
            />

            </div>

            
            <div className="grid ">
              <h3 className="text-4xl pl-9 sm:pl-2 md:pl-9 text-left font-semibold py-5">Nissan</h3>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaUsers size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">18 Seaters</span>
                </li>
                <li className="flex pr-1">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">318 km/h</span>
                </li>
              </ul>
              <ul className="list-none flex justify-between px-9 sm:px-2 md:px-9 mt-3">
                <li className="flex">
                  <FaTachometerAlt size={25} color="#189cf4" />{" "}
                  {/* Users Icon */}
                  <span className="mx-2">4400 rpm</span>
                </li>
                <li className="flex">
                  <FaCogs size={25} color="#189cf4" /> {/* Users Icon */}
                  <span className="mx-2">Automatic</span>
                </li>
              </ul>
              <div className="flex justify-between px-9 py-5 sm:px-3 md:px-9  ">
                <div className="text-center ">
                  <p className="font-semibold">Php 6,000 / Day</p>
                </div>
                <div className="text-center">
                  <button className="text-center p-1 bg-red-600 text-white rounded-lg px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
        </div>



      </div>

     
 
      </div>
    </div>
  );
};


