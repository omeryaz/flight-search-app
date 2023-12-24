"use client";
import React from "react";
import Table from "./components/Table/Table";
import { selectIsLoading } from "../redux/features/search-slice";
import { useSelector } from "react-redux";

export default function Page() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <main className="flex justify-evenly">
      {isLoading ? "LOADING" : <Table type="departure" />}
    </main>
  );
}
