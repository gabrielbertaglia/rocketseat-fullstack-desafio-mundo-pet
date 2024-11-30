import { apiConfig } from "./api-config";

export const removeSchedule = async ({ id }) => {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível remover o agendamento");
  }
};
