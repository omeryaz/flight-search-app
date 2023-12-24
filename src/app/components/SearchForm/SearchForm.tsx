"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import moment from "moment";

import { SearchFormData } from "./SearchForm.types";
import "react-datepicker/dist/react-datepicker.css";
import InputLocation from "../Input/InputLocation/InputLocation";
import InputDate from "../Input/InputDate/InputDate";
import { useDispatch } from "react-redux";
import {
  setIsLoading,
  setDepartureData,
  setReturnData,
} from "../../../redux/features/search-slice";

export default function FlightSearchForm() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOneWay, setIsOneWay] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<SearchFormData>({
    defaultValues: {
      departureLocation: "",
      arrivalLocation: "",
      departureDate: startDate,
      returnDate: endDate,
    },
  });

  // ! CARRY THIS OVER TO ENV VARIABLES
  const API_KEY = "997b00e7b6d083570e703813daaadbbd";

  const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=997b00e7b6d083570e703813daaadbbd`;

  const onSubmit = async (formData: SearchFormData) => {
    formData.departureDate = moment(formData.departureDate).format(
      "YYYY-MM-DD"
    );
    formData.returnDate = moment(formData.returnDate).format("YYY-/MM-DD");

    const { departureLocation, arrivalLocation, departureDate, returnDate } =
      formData;

    dispatch(setIsLoading(true));
    try {
      // DEPARTURE REQUEST

      const departureDataResponse = await axios.get(apiUrl, {
        params: {
          // flight_date: departureDate,
          dep_iata: departureLocation,
          arr_iata: arrivalLocation,
        },
      });
      console.log("Departure Data:", departureDataResponse.data);
      dispatch(setDepartureData(departureDataResponse.data));

      // RETURN REQUEST
      if (!isOneWay) {
        const returnDataResponse = await axios.get(apiUrl, {
          params: {
            dep_iata: arrivalLocation,
            arr_iata: departureLocation,
          },
        });
        console.log("Return Data:", returnDataResponse.data);
        dispatch(setReturnData(returnDataResponse.data));
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-linear p-10 mb-10">
      <form
        id="searchForm"
        className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-4/5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* DEPARTURE */}
        <InputLocation
          register={register}
          name="departureLocation"
          label="Departure Location"
          errors={errors}
          touchedFields={touchedFields}
        />

        {/* ARRIVAL */}
        <InputLocation
          register={register}
          name="arrivalLocation"
          label="Arrival Location"
          errors={errors}
          touchedFields={touchedFields}
        />

        {/* DEPARTURE DATE */}
        <InputDate
          control={control}
          name="departureDate"
          label="Departure Date"
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        >
          <p>{errors.departureDate?.message}</p>
        </InputDate>

        {/* RETURN DATE */}
        <InputDate
          control={control}
          name="returnDate"
          label="Return Date"
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          isDisabled={isOneWay}
        >
          <p>{errors.returnDate?.message}</p>

          <label
            className="flex flex-col text-sm text-white absolute -bottom-10 left-1/2 -translate-x-2/4 w-max "
            htmlFor="onewaycheck"
          >
            One Way Ticket
            <input
              id="onewaycheck"
              type="checkbox"
              checked={isOneWay}
              onChange={(e) => setIsOneWay(e.target.checked)}
            />
          </label>
        </InputDate>
      </form>
      <button
        type="submit"
        form="searchForm"
        className="px-4 py-2 bg-white rounded-xl mt-8"
      >
        Search
      </button>
    </div>
  );
}
