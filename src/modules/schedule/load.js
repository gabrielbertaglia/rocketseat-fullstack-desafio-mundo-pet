import dayjs from "dayjs";
import { getScheduleByDay } from "../../services/get-schedule";
import { showSchedules } from "./show";

const selectedDate = document.getElementById("filter");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
console.log("inputToday", inputToday);
selectedDate.value = inputToday;

export const schedulesDay = async () => {
  const date = selectedDate.value;

  const dailySchedules = await getScheduleByDay({ date });

  showSchedules({ dailySchedules });
};
