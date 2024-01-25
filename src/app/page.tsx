"use client";
import React from "react";
import Table from "./components/Table/Table";
import { selectDepartureData, selectIsLoading } from "../redux/searchSlice";
import { useSelector } from "react-redux";

export default function Page() {
  const isLoading = useSelector(selectIsLoading);
  const departureData = useSelector(selectDepartureData);
  return (
    <main className="flex justify-evenly">
      {isLoading ? (
        <p className="text-black h-10">LOADING</p>
      ) : (
        departureData !== null && <Table type="departure" />
      )}
    </main>
  );
}
