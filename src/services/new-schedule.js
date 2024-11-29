import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export const newSchedule = async (data) => {
  const { id, tutorName, petName, phone, service, date, time } = data;

  const when = dayjs(`${date} ${time}`).toISOString();

  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        tutorName,
        petName,
        phone,
        service,
        when,
      }),
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento, tente novamente.");
  }
};
