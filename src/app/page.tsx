'use client'

import { CheckCircle, Zap, Users, Lightbulb, RefreshCw, Monitor, Wrench, Globe2, LayoutGrid } from 'lucide-react';
import {  useState } from 'react';


const programmingLanguages = [
  { name: "C#", level: "Nivel Intermedio / Alto" },
  { name: "Java", level: "Nivel Intermedio / Alto" },
  { name: "C", level: "Nivel Intermedio / Alto" },
  { name: "C++", level: "Nivel Intermedio / Alto" },
  { name: "JavaScript", level: "Nivel Intermedio" },
  { name: "HTML", level: "Nivel Intermedio" },
  { name: "CSS", level: "Nivel Intermedio" },
  { name: "Flutter", level: "Nivel Intermedio" },
];

const databases = [
  { name: "SQL Server", level: "Intermedio / Alto" },
  { name: "MySQL", level: "Intermedio / Alto" },
  { name: "MongoDB", level: "Intermedio / Alto" },
  { name: "Supabase", level: "Intermedio" },
];

const competencias = [
  { name: "Diseño y publicidad para redes sociales", icon: LayoutGrid },
  { name: "Mantenimiento e instalación de software", icon: Wrench },
  { name: "Manejo de Sistemas operativos iOS, Windows y Linux", icon: Monitor },
  { name: "Manejo correcto de Excel ", icon: Globe2 },
];


export default function Home() {

  const [hoveredLang, setHoveredLang] = useState<string | null>(null);
  const [hoveredDb, setHoveredDb] = useState<string | null>(null);
  const [hoveredCompetencia, setHoveredCompetencia] = useState<string | null>(null);



  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Hero / Header */}

      <section className="bg-blue-600 text-white py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-yellow-200 text-4xl md:text-5xl font-bold">Curriculum Vitae</h1>
            <h3 className="text-4xl md:text-4xl font-bold">Irvin Giovanni Corzo Nafate</h3>
            <p className="text-lg md:text-xl mt-2">Lic. en Ingeniería en Desarrollo y Tecnologías de Software</p>
            <p className="text-sm text-blue-100 mt-1">giovanniEGCN@gmail.com • +52 961 853 3131</p>
            <p className="text-sm text-blue-100">Huanacastle M-17, Col. Paseo del Bosque, C.P. 29094, Tuxtla Gutiérrez, Chis.</p>  
          </div>
          <img
            src="/img/IRVIN_FOTO.jpeg"
            alt="Irvin Giovanni Corzo Nafate"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-blue-300"
          />
        </div>
      </section>

      {/* Perfil */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Perfil</h2>
        <p className="text-gray-700 max-w-3xl">
          Ingeniero en Desarrollo de Software, con conocimientos en desarrollo Fullstack, con 2 años de experiencia en desarrollo en Next.js, conocimientos en bases de datos, y creación de API’s. Con disposición de aprender y trabajar.
        </p>
      </section>

      {/* Competencias */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Competencias</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competencias.map(({ name, icon: Icon }) => (
            <li
              key={name}
              onMouseEnter={() => setHoveredCompetencia(name)}
              onMouseLeave={() => setHoveredCompetencia(null)}
              className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Icon className="text-blue-600" size={20} />
              <span className="text-sm text-blue-900 font-medium">
                {hoveredCompetencia === name ? "Nivel Intermedio - Alto" : name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Habilidades */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Habilidades</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm">
            <Zap className="text-blue-600" size={20} /> Proactivo
          </li>
          <li className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm">
            <Lightbulb className="text-blue-600" size={20} /> Fácil aprendizaje
          </li>
          <li className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm">
            <Users className="text-blue-600" size={20} /> Trabajo en equipo
          </li>
          <li className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm">
            <CheckCircle className="text-blue-600" size={20} /> Resolución de problemas
          </li>
          <li className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg shadow-sm">
            <RefreshCw className="text-blue-600" size={20} /> Capacidad de adaptación
          </li>
        </ul>
      </section>

      {/* Formación Académica */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Formación Académica</h2>
        <div>
          <p className="font-medium">Lic. en Ingeniería en Desarrollo y Tecnologías de Software</p>
          <p>Universidad Autónoma de Chiapas</p>
          <span className="text-sm text-gray-500">Certificado de estudios y carta pasante. En proceso de titulación (examen aprobado).</span>
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Experiencia Laboral</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">Auxiliar Técnico de Ingeniería Civil – Contratista Independiente</h3>
            <span className="text-sm text-gray-500">2019 - 2022</span>
            <p className="mt-1 text-gray-700">
              Estimaciones y bases de datos para programas de obras públicas, así como desarrollo de programas para obras públicas. - Jefe inmediato: Ing. Leopoldo Padilla Cruz.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Técnico en Sistemas – Gandhi La Capital de los Hules</h3>
            <span className="text-sm text-gray-500">2022 - 2023</span>
            <p className="mt-1 text-gray-700">
              Configuración de equipos de cómputo, facturación, administración, manejo de redes sociales y página web. - Jefe inmediato: Tec. Ricardo Antonio Sosa.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Ingeniero en Sistemas – Clínica de Rehabilitación Unidos para Siempre</h3>
            <span className="text-sm text-gray-500">2023 - Actualidad</span>
            <p className="mt-1 text-gray-700">
              Desarrollo y mantenimiento de sistemas internos para gestión clínica. - Jefe Inmediato: Martin Toledo Lievano
            </p>
          </div>
        </div>
      </section>

      {/* Lenguajes de programación */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Lenguajes de programación</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {programmingLanguages.map((lang) => (
            <div
              key={lang.name}
              onMouseEnter={() => setHoveredLang(lang.name)}
              onMouseLeave={() => setHoveredLang(null)}
              className="bg-white border border-blue-100 shadow-md rounded-lg px-4 py-3 text-center text-sm text-blue-800 font-medium hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer"
            >
              {hoveredLang === lang.name ? (
                <span className="text-xs text-gray-600">{lang.level}</span>
              ) : (
                <span>{lang.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bases de datos */}
      <section className="py-10 px-6 md:px-20 border-b">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Bases de datos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {databases.map((db) => (
            <div
              key={db.name}
              onMouseEnter={() => setHoveredDb(db.name)}
              onMouseLeave={() => setHoveredDb(null)}
              className="bg-white border border-blue-100 shadow-md rounded-lg px-4 py-3 text-center text-sm text-blue-800 font-medium hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer"
            >
              {hoveredDb === db.name ? (
                <span className="text-xs text-gray-600">{db.level}</span>
              ) : (
                <span>{db.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Cursos */}
      <section className="py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Cursos</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>NDG Linux Essentials Español – Certificado obtenido</li>
          <li>Introducción a la Ciberseguridad – Certificado obtenido</li>
        </ul>
      </section>
    </main>
  );
}
