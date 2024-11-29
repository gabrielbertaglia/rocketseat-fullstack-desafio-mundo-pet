import { schedulesDay } from "../schedule/load";

const selectedDate = document.getElementById("filter");

selectedDate.onchange = () => {
  schedulesDay();
};
