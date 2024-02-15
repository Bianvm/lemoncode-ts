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
  let pacientesPediatra: Paciente[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatra.push(pacientes[i]);
    }
  }
  return pacientesPediatra;
}; //console.log(obtenPacientesAsignadosAPediatria(pacientes));


//extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Paciente[]): Paciente[] => {
  const pacientesPediatriaMenoresDeDiezAnios: Paciente[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].edad < 10) {
      pacientesPediatriaMenoresDeDiezAnios.push(pacientes[i]);
    }
  }
  return pacientesPediatriaMenoresDeDiezAnios;
}; //console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


//activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados crear una función que devuelve true/false dependiendo si se da la condición
const activarProtocoloUrgencia = (pacientes: Paciente[]): boolean => {
  let requisitosProtocolodeUrgencias = false;
  for (let i = 0; i < pacientes.length; i++) {

    pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39 ?
      requisitosProtocolodeUrgencias = true :
      false;

  } return requisitosProtocolodeUrgencias;
}; //console.log(activarProtocoloUrgencia(pacientes));

// reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (pacientes: Paciente[]): Paciente[] => {
  const reasignacionPediatraAMedicoDeFamilia: Paciente[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    reasignacionPediatraAMedicoDeFamilia.push({
      ...pacientes[i],
      especialidad: pacientes[i].especialidad === "Pediatra" ? "Medico de familia" : pacientes[i].especialidad
    })
  }
  return reasignacionPediatraAMedicoDeFamilia;
}; //console.log(reasignaPacientesAMedicoFamilia(pacientes));


//comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Paciente[]): boolean => {
  let pacienteDePediatria = false;
  for (let i = 0; i < pacientes.length; i++) {
    pacientes[i].especialidad === "Pediatra" ? pacienteDePediatria = true : false;
  } return pacienteDePediatria;
}; //console.log(HayPacientesDePediatria(pacientes));

//calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}
const cuentaPacientesPorEspecialidad = (pacientes: Paciente[]): NumeroPacientesPorEspecialidad => {
  let contador = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    contador = {
      medicoDeFamilia: pacientes[i].especialidad === "Medico de familia" ? contador.medicoDeFamilia + 1 : contador.medicoDeFamilia,
      pediatria: pacientes[i].especialidad === "Pediatra" ? contador.pediatria + 1 : contador.pediatria,
      cardiologia: pacientes[i].especialidad === "Cardiólogo" ? contador.cardiologia + 1 : contador.pediatria,

    }
  } return contador;
}; //console.log(cuentaPacientesPorEspecialidad(pacientes));


