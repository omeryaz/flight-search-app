import React from "react";
import { TableRowWrapper } from "../Table.style";
import { TableItemCell } from "./TableItem.style";
import { TableItemValues } from "./TableItem.types";

export default function TableItem({
  from,
  arrival,
  time,
  duration,
}: TableItemValues) {
  return (
    <TableRowWrapper>
      <TableItemCell>{from}</TableItemCell>
      <TableItemCell>{arrival}</TableItemCell>
      <TableItemCell>{time}</TableItemCell>
      <TableItemCell>{duration}</TableItemCell>
    </TableRowWrapper>
  );
}
