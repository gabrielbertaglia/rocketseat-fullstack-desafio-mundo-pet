import dayjs from "dayjs";
import { newSchedule } from "../../services/new-schedule";
import { schedulesDay } from "../schedule/load";

const form = document.querySelector("form");

const tutorName = document.getElementById("tutor");
const petName = document.getElementById("pet");
const phoneNumber = document.getElementById("phone");
const serviceName = document.getElementById("service");
const selectedDate = document.getElementById("date");
const selectedTime = document.getElementById("time");

const now = dayjs(new Date());

const today = now.format("YYYY-MM-DD");
const time = now.format("HH:mm");

selectedDate.value = today;
selectedDate.min = today;

selectedTime.value = time;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = tutorName.value.trim();
    // if (!name) {
    //   alert("Por favor, informe o nome do tutor.");
    // }

    const pet = petName.value.trim();
    if (!pet) {
      alert("Por favor, informe o nome do pet.");
    }

    const phone = phoneNumber.value.trim();
    if (!phone) {
      alert("Por favor, informe o número de telefone.");
    }

    const service = serviceName.value.trim();
    if (!service) {
      alert("Por favor, informe o tipo de serviço.");
    }

    const id = new Date().getTime();

    const data = {
      id,
      tutorName: name,
      petName: pet,
      phone,
      service,
      date: selectedDate.value,
      time: selectedTime.value,
    };

    await newSchedule(data);
    await schedulesDay();
    modal.close();
    form.reset();
  } catch (error) {
    console.log(error);
    // alert("Não foi possível realizar o agendamento");
  }
};
