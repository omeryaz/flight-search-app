"use client";
import React, { Key } from "react";
import { TableWrapper } from "./Table.style";
import TableHeadings from "./TableHeadings/TableHeadings";
import TableItem from "./TableItem/TableItem";
import { useSelector } from "react-redux";
import {
  selectDepartureData,
  selectReturnData,
} from "../../../redux/searchSlice";

type TableTypes = {
  type: string;
};
export default function Table({ type }: TableTypes) {
  const departureData = useSelector(selectDepartureData);
  const returnData = useSelector(selectReturnData);

  const flightData = type === "departure" ? departureData : returnData;

  return (
    <TableWrapper>
      <TableHeadings />
      {flightData?.data.map((flight: any, index: Key) => (
        <TableItem
          key={index}
          from={flight.airline.name}
          arrival={flight.arrival.airport}
          time={flight.flight_date}
        />
      ))}
    </TableWrapper>
  );
}

// flight time 2023-12-24T09:35:00+00:00
