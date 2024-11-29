import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export const showSchedules = ({ dailySchedules }) => {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // biome-ignore lint/complexity/noForEach: <explanation>
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id);

      const time = document.createElement("strong");
      time.className = "hour";
      time.textContent = dayjs(schedule.when).format("HH:mm");

      const span = document.createElement("span");

      const petName = document.createElement("strong");
      petName.className = "pet-name";
      petName.textContent = schedule.petName;

      const personName = document.createElement("span");
      personName.className = "person-name";
      personName.textContent = `/ ${schedule.tutorName}`;

      const procedure = document.createElement("span");
      procedure.className = "precedure";
      procedure.textContent = schedule.tutorName;

      const removeButton = document.createElement("button");
      removeButton.className = "remove-schedule";
      removeButton.textContent = "Remover agendamento";

      span.append(petName);
      span.append(personName);

      item.append(time);
      item.append(span);
      item.append(procedure);
      item.append(removeButton);

      const hour = dayjs(schedule.when).hour();

      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item);
      } else if (hour >= 18) {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível carregar os agendamentos.");
  }
};
