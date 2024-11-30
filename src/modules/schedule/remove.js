import { removeSchedule } from "../../services/remove-schedule";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

// biome-ignore lint/complexity/noForEach: <explanation>
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    console.log(event.target.classList.contains("remove-schedule"));
    if (event.target.classList.contains("remove-schedule")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConform = confirm("Deseja realmente remover o agendamento?");

        if (isConform) {
          await removeSchedule({ id });
          await schedulesDay();
        }
      }
    }
  });
});
