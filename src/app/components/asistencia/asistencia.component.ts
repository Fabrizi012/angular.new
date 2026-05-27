import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Alumno {
  nombre: string;
  horaIngreso: string;
  estado: 'presente' | 'tarde' | 'falta';
}

@Component({
  selector: 'app-asistencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  alumnos: Alumno[] = [
    { nombre: 'Juan', horaIngreso: '08:05', estado: 'tarde' },
    { nombre: 'Ana', horaIngreso: '07:55', estado: 'presente' },
    { nombre: 'Carlos', horaIngreso: '08:00', estado: 'presente' },
    { nombre: 'María', horaIngreso: '08:30', estado: 'tarde' },
    { nombre: 'Pedro', horaIngreso: '09:00', estado: 'falta' },
    { nombre: 'Laura', horaIngreso: '07:50', estado: 'presente' },
    { nombre: 'Luis', horaIngreso: '08:15', estado: 'tarde' },
    { nombre: 'Sofia', horaIngreso: '08:00', estado: 'presente' },
    { nombre: 'Diego', horaIngreso: '00:00', estado: 'falta' },
    { nombre: 'Emma', horaIngreso: '07:55', estado: 'presente' }
  ];

  porcentajeTardanzas: number = 0;
  totalTardanzas: number = 0;
  alertaShown: boolean = false;
  mensajeAlerta: string = '';

  ngOnInit(): void {
    this.verificarTardanzas();
  }

  verificarTardanzas(): void {
    this.totalTardanzas = this.alumnos.filter(
      alumno => alumno.estado === 'tarde'
    ).length;

    this.porcentajeTardanzas = (this.totalTardanzas / this.alumnos.length) * 100;

    if (this.porcentajeTardanzas > 30) {
      this.alertaShown = true;
      this.mensajeAlerta = `⚠️ ALERTA: ${this.totalTardanzas} alumno(s) llegaron tarde (${this.porcentajeTardanzas.toFixed(2)}% del grupo). ¡Esto supera el 30% permitido!`;
    }
  }

  justificarFalta(alumno: Alumno): void {
    alumno.estado = 'presente';
    this.verificarTardanzas();
  }

  cambiarEstado(alumno: Alumno): void {
    const estados: ('presente' | 'tarde' | 'falta')[] = ['presente', 'tarde', 'falta'];
    const currentIndex = estados.indexOf(alumno.estado);
    alumno.estado = estados[(currentIndex + 1) % estados.length];
    this.verificarTardanzas();
  }
}
