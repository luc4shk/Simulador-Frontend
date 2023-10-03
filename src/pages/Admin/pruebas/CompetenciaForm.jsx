import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import axiosApi from "../../../utils/config/axios.config"
import {  toast, Toaster } from "react-hot-toast";
import { AppContext } from '../../../components/context/AppProvider';
import {
  Box,
  FormControl,
  Button,
  FormErrorMessage,
  Input,
  MenuOptionGroup,
  Menu,
  Select,
  MenuButton,
  MenuList,
  MenuItem,
  FormLabel,
  Stack,
  Checkbox,
  Flex,
} from "@chakra-ui/react";

const initialValues = {
  nombre: '',
  descripcion: '',
  semestre: '',
  duracion: '',
  competencias: [],
  totalPreguntas: 0,
  //categorias: [],
};

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio').matches(/^[A-Za-z\s]+$/, 'Solo se permiten letras y espacios'),
  descripcion: Yup.string().required('La descripción es obligatoria').matches(/^[A-Za-z\s]+$/, 'Solo se permiten letras y espacios'),
  semestre: Yup.number().required('El semestre es obligatorio'),
  duracion: Yup.number().required('La duración es obligatoria'),
  totalPreguntas: Yup.number().required("El total de preguntas de la prueba es obligatorio"),
  competencias: Yup.array().required('Selecciona al menos una competencia'),
  });




const CompetenciaForm = () => {
  const { token } = useContext(AppContext);
  const [competencias, setCompetencias] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET a la URL para obtener las competencias
    axiosApi.get('http://127.0.0.1:3500/api/competencia', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        setCompetencias(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener competencias:', error);
      });
  }, []);

  const agregarPrueba = async (nombre, descripcion, semestre, duracion,competencias,totalPreguntas,valoresGenericas,valoresEspecificas) =>{
    let body={
      nombre:nombre,
      descripcion:descripcion,
      semestre:semestre,
      duracion:duracion,
      competencias:competencias,
      total_preguntas:totalPreguntas,
      valoresGenericas:valoresGenericas,
      valoresEspecificas:valoresEspecificas
    }

    console.log(body)

    let response = await axiosApi.post("/api/prueba/create",body,{
      headers: {
        Authorization: "Bearer " + token,
      },
    }).catch((e)=>{
      toast.error(e.response.data.error)
    }).finally(()=>{

    })
    if(response.status===200){
      console.log(response)
      toast.success("¡Prueba agregada correctamente!")
    }

  }

  const submitFunction = (values) =>{
    const valoresCompetenciasUno = [];
    const valoresCompetenciasDos = [];

    values.competencias.forEach((competenciaId) => {
      const competencia = competencias.find((c) => c.id === competenciaId);

      const valoresCompetencia = [];

      competencia.categorias.forEach((categoria, index) => {
        const numPreguntas = values.categorias[competenciaId][index].numPreguntas;
        const porcentaje = values.categorias[competenciaId][index].porcentaje;

        valoresCompetencia.push([index+1, numPreguntas, porcentaje]);
      });

      if (competencia.id === 1) {
        valoresCompetenciasUno.push(...valoresCompetencia);
      } else if (competencia.id === 2) {
        valoresCompetenciasDos.push(...valoresCompetencia);
      }
    });

    const finalValues = {
      nombre: values.nombre,
      descripcion: values.descripcion,
      semestre: values.semestre,
      duracion: values.duracion,
      competencias: values.competencias,
      totalPreguntas: values.totalPreguntas,
      valoresCompetenciasUno: valoresCompetenciasUno,
      valoresCompetenciasDos: valoresCompetenciasDos,
    };

    agregarPrueba(values.nombre,values.descripcion,values.semestre,values.duracion,values.competencias,values.totalPreguntas,valoresCompetenciasUno,valoresCompetenciasDos)
    console.log('Valores enviados:', finalValues); 

  }

  return (
    <Box
      bgColor={"white"}
      w={{
        base: "270px",
        sm: "390px",
        md: "540px",
        lg: "640px",
        tableBreakpoint: "800px",
      }}
      p={"40px"}
      borderRadius={"8px"}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitFunction(values)
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <Flex gap={"20px"} flexDir={["column", "column", "row"]}>
                <FormControl 
                  display={"flex"} 
                  flexDir={"column"} 
                  gap={"10px"}
                  isInvalid={errors.nombre  && touched.nombre}>
                <FormLabel htmlFor="nombre">Nombre</FormLabel>
                  <Field
                    w={"100%"}
                    as={Input} 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                  />
                  <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                </FormControl>

                <FormControl 
                  isInvalid={errors.descripcion && touched.descripcion}
                  display={"flex"}
                  flexDir={"column"}
                  gap={"10px"}
                >
                  <FormLabel 
                  htmlFor="descripcion"
                  >Descripción:</FormLabel>
                  <Field 
                  as={Input}
                  w={"100%"}
                  type="text" 
                  id="descripcion" 
                  name="descripcion" />
                  <FormErrorMessage>{errors.descripcion}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex
                mt={"20px"}
                gap={"20px"}
                flexDir={["column", "column", "row"]}
              >
            <FormControl 
              isInvalid={errors.semestre && touched.semestre}
              display={"flex"}
              flexDir={"column"}
              gap={"10px"}
            >
              <FormLabel 
              htmlFor="semestre">Semestre:</FormLabel>
              <Field 
              as={Input}
              type="number" 
              id="semestre" 
              name="semestre"
              w={"100%"}
              />
              <FormErrorMessage>{errors.semestre}</FormErrorMessage>
            </FormControl>

            <FormControl 
              isInvalid={errors.duracion && touched.duracion}
              display={"flex"}
              flexDir={"column"}
              gap={"10px"}
            >
              <FormLabel htmlFor="duracion">Duración (minutos):</FormLabel>
              <Field 
              as={Input}
              w={"100%"}
              type="number" id="duracion" name="duracion" />
              <FormErrorMessage>{errors.duracion}</FormErrorMessage>
            </FormControl>
            </Flex>

            <FormControl 
              isInvalid={errors.totalPreguntas && touched.totalPreguntas}
              display={"flex"}
              flexDir={"column"}
              gap={"10px"}
              m={"20px 0 20px 0"}

            >

              <FormLabel htmlFor="preguntas">Total Preguntas</FormLabel>
              <Field 
                as={Input}
                w={"100%"}
              type="number" id="totalPreguntas" name="totalPreguntas" />
              <FormErrorMessage>{errors.totalPreguntas}</FormErrorMessage>
            </FormControl>

            <FormLabel>Competencias:</FormLabel>
            {competencias.map((competencia) => (
              <Box key={competencia.id} m={"10px 0 10px 0"}>
                <Box display={"flex"} alignItems={"center"} > 
                  <Field
                    as={Checkbox}
                    name="competencias"
                    colorScheme="cyan"
                    mr={"15px"}
                    value={competencia.id}
                    checked={values.competencias.includes(competencia.id)}
                    onChange={(e) => {
                      const selectedId = competencia.id;
                      const selected = values.competencias.includes(selectedId);
                      if (selected) {
                        // Desseleccionar si ya estaba seleccionado
                        const updatedCompetencias = values.competencias.filter(
                          (id) => id !== selectedId
                        );
                        handleChange({
                          target: { name: 'competencias', value: updatedCompetencias },
                        });
                      } else {
                        // Seleccionar si no estaba seleccionado
                        handleChange({
                          target: {
                            name: 'competencias',
                            value: [...values.competencias, selectedId],
                          },
                        });
                      }
                    }}
                  />
                  <Box fontWeight={"semibold"} fontStyle={"italic"} >{competencia.nombre}</Box>
                </Box>
                  <FormErrorMessage>{errors.competencias}</FormErrorMessage>
                {values.competencias.includes(competencia.id) && (
                  <FieldArray name="categorias">
                    {(arrayHelpers) =>
                        competencia.categorias.map((categoria, index) => (
                          <Box w={"90%"} display={"flex"} flexDir={"column"} ml={"30px"}  gap={"10px"} key={categoria.nombre}>
                            <Box mt={"10px"}>{categoria.nombre}</Box>
                            <Box w={"100%"} display={"flex"} flexDir={"row"} gap=
                              {"15px"}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                            <Field
                              as={Input}
                              type="number"
                              name={`categorias.${competencia.id}.${index}.numPreguntas`}
                              placeholder="Número de preguntas"
                            />
                            <Field
                              as={Input}
                              type="number"
                              name={`categorias.${competencia.id}.${index}.porcentaje`}
                              placeholder="Porcentaje"
                            />
                            </Box>
                          </Box>
                        ))
                    }
                  </FieldArray>

                )}
              </Box>
            ))
            }
            <Button type="submit">Guardar</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CompetenciaForm;

