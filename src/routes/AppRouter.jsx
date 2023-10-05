

import React, { useEffect, useContext } from "react";
import { HashRouter as Router, Routes, Route, useLocation, Navigate  } from "react-router-dom"
import PrincipalPage from "../pages/Admin/principal/PrincipalPage";
import Competencias from "../pages/Admin/competencias/Competencias";
import ErrorPage from "../pages/404/ErrorPage";
import SideBar from "../components/SideBar";
import Pruebas from "../pages/Admin/pruebas/Pruebas";
import Categorias from "../pages/Admin/categorias/Categorias";
import Preguntas from "../pages/Admin/preguntas/Preguntas";
import Estudiantes from "../pages/Admin/estudiantes/Estudiantes";
import Convocatorias from "../pages/Admin/convocatorias/Convocatorias";
import AgregarCompetencia from "../pages/Admin/competencias/AgregarCompetencia";
import AgregarCategoria from "../pages/Admin/categorias/AgregarCategoria";
import SeleccionarTipoPregunta from "../pages/Admin/preguntas/SeleccionarTipoPregunta";
import PreguntaSimple from "../pages/Admin/preguntas/PreguntaSimple";
import AgregarPrueba from "../pages/Admin/pruebas/AgregarPrueba";
import CambiarContrasenia from "../pages/Admin/principal/CambiarContrasenia";
import PreguntaImagen from "../pages/Admin/preguntas/PreguntaImagen";
import CambiarImagen from "../pages/Admin/principal/CambiarImagen";
import EditarInformacion from "../pages/Admin/principal/EditarInformación";
import EditarCompetencia from "../pages/Admin/competencias/EditarCompetencia";
import EditarCategoria from "../pages/Admin/categorias/EditarCategoria";
import Login from "../pages/Inicios/Login";
import { AppContext } from "../components/context/AppProvider";
import { Toaster } from "react-hot-toast";
import EditarPregunta from "../pages/Admin/preguntas/EditarPregunta";
import EditarEstudiante from "../pages/Admin/estudiantes/EditarEstudiante";
import AgregarConvocatoria from "../pages/Admin/convocatorias/AgregarConvocatoria";
import EditarConvocatoria from "../pages/Admin/convocatorias/EditarConvocatoria";
import EmailRecuperación from "../components/forms/EmailRecuperacion";
import NewPassword from "../components/forms/NewPassword";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/container/Layout";
import PrincipalPageUser from "../pages/User/principal/PrincipalPageUser";
export default function AppRouter() {

  const { token, user, role} = useContext(AppContext);



  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute redirectTo="/user" isValid={role &&role==="Director"}>
              <Layout/>
            </ProtectedRoute>}>
            <Route path="/home" element={<PrincipalPage/>}/>
            <Route path="/competencias" element={<Competencias/>}>
            </Route>
            <Route path="/categorias" element={<Categorias/>}>
            </Route>
            <Route path="/pruebas" element={<Pruebas/>}>
            </Route>
            <Route path="/preguntas" element={<Preguntas/>}>
            </Route>
            <Route path="/estudiantes" element={<Estudiantes/>}>
            </Route>
            <Route path="/convocatorias" element={<Convocatorias/>}>
            </Route>
            <Route path="/formularioCompetencia" element={<AgregarCompetencia/>}>
            </Route>
            <Route path="/formularioCategoria" element={<AgregarCategoria/>}>
            </Route>
            <Route path="/tipoPregunta" element={<SeleccionarTipoPregunta/>}>
            </Route>
            <Route path="/formularioPreguntaSimple" element={<PreguntaSimple/>}>
            </Route>
            <Route path="/formularioPreguntaImagen" element={<PreguntaImagen/>}>
            </Route>
            <Route path="/formularioConvocatoria" element={<AgregarConvocatoria/>}>
            </Route>
            <Route path="/crearPrueba" element={<AgregarPrueba/>}>
            </Route>
            <Route path="/cambiarContrasenia" element={<CambiarContrasenia/>}>
            </Route>
            <Route path="/cambiarImagen" element={<CambiarImagen/>}>
            </Route>
            <Route path="/editarInformacion" element={<EditarInformacion/>}>
            </Route>
            <Route path="/editarCompetencia/:id" element={<EditarCompetencia/>}>
            </Route>
            <Route path="/editarCategoria/:id" element={<EditarCategoria/>}>
            </Route>
            <Route path="/editarPregunta/:id" element={<EditarPregunta/>}>
            </Route>
            <Route path="/editarEstudiante/:id" element={<EditarEstudiante/>}>
            </Route>
            <Route path="/editarPrueba/:id" element={<EditarEstudiante/>}>
            </Route>
            <Route path="/editarConvocatoria/:id" element={<EditarConvocatoria/>}>
            </Route>
          </Route>

         
           <Route element={<ProtectedRoute redirectTo={"/home"} isValid={role && role==="Estudiante"}>
            {<Layout/>
            }
          </ProtectedRoute>}>

            <Route path="/user" element={<PrincipalPageUser/>}></Route>
            <Route path="/puntaje" element={
              <>
                <div>
                  Hola, user main, sección puntaje
                </div>
                </>
            }/>
            <Route path="/pruebasUser" element={
              <>
                <div>
                  Hola, user main, sección pruebasUser
                </div>
                </>
            }/>
            <Route path="/convocatoriasUser" element={
              <>
                <div>
                  Hola, user main, sección convocatoriasUser
                </div>
                </>
            }/>
            
          </Route>


          <Route path="/newPassword/:id/:token" element={<NewPassword/>}>
          </Route>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/recuperarEmail" element={<EmailRecuperación/>}>
          </Route>
          <Route path="*" element={<ErrorPage role={role}/>} />
        </Routes>
      </Router>
      <Toaster reverseOrder={true} />
    </>
  );
}
