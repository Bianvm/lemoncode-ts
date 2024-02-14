interface Paciente {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: string;
  edad: number;
}

const pacientes: Paciente[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Paciente[]): Paciente[] => {
  return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra")
};

//extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Paciente[]): Paciente[] => {
  return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10)
};

//activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados crear una función que devuelve true/false dependiendo si se da la condición
const activarProtocoloUrgencia = (pacientes: Paciente[]): boolean => {
  const indexFound = pacientes.findIndex((pacientes) => pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39);
  return indexFound === -1 ? false : true;
};

// reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (pacientes: Paciente[]): Paciente[] => pacientes.map((paciente) => ({
  ...paciente,
  especialidad: paciente.especialidad === 'Pediatra' ? "Medico de familia" : paciente.especialidad,
}
));

//comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Paciente[]): boolean =>
  pacientes.some((pacientes) => pacientes.especialidad === "Pediatra");

//calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}
const cuentaPacientesPorEspecialidad = (pacientes: Paciente[]): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce((valorPrevio, paciente) => {
    return {
      medicoDeFamilia: paciente.especialidad === "Medico de familia" ? valorPrevio.medicoDeFamilia + 1 : valorPrevio.medicoDeFamilia,
      pediatria: paciente.especialidad === "Pediatra" ? valorPrevio.pediatria + 1 : valorPrevio.pediatria,
      cardiologia: paciente.especialidad === "Cardiólogo" ? valorPrevio.cardiologia + 1 : valorPrevio.cardiologia
    }
  }, {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  });
}; console.log(cuentaPacientesPorEspecialidad(pacientes));







/*
const funcionBorrarElemento = <T>(coleccionEntradas: T[], indice: number): T[] => [
  ...coleccionEntradas.slice(0, indice),
  ...coleccionEntradas.slice(indice + 1),
];*/
