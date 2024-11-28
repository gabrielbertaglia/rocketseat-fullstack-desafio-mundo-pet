import { apiConfig } from "./api-config";

export const newSchedule = async (data) => {
  const { id, tutorName, petName, phone, service, date, time } = data;

  console.log(data);
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
        date,
        time,
      }),
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento, tente novamente.");
  }
};
