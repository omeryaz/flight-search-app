import React from "react";
import { TableHeadingCell } from "./TableHeadings.style";
import { TableRowWrapper } from "../Table.style";

export default function FlightTableHeadings() {
  return (
    <TableRowWrapper>
      <TableHeadingCell>from</TableHeadingCell>
      <TableHeadingCell>time</TableHeadingCell>
      <TableHeadingCell>arrival</TableHeadingCell>
      <TableHeadingCell>duration</TableHeadingCell>
    </TableRowWrapper>
  );
}
