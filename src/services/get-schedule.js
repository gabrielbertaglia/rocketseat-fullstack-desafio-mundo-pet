import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export const getScheduleByDay = async ({ date }) => {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    const data = await response.json();

    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os agendamento do dia selecionado.");
  }
};
