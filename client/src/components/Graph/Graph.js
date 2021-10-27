import React from "react";

import { useSelector } from "react-redux";

export default function Graph() {
  const { entries } = useSelector((state) => state.entries);
  console.log(entries);

  let temp = entries.map((entry) => {
    return [entry.date, entry.todaysScore];
  });

  console.log(temp);

  return <div></div>;
}
