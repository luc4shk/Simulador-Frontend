import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import CardLogo from "../../components/pure/CardLogo";
import {React, useContext, useEffect} from "react";
import { AppContext } from "../../components/context/AppProvider";
import { login } from "../../services/user/axios.service";
import { Link, useNavigate} from "react-router-dom"
import jwt_decode from "jwt-decode"

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };


  const { setToken, setRole,role} = useContext(AppContext)

  const navigate = useNavigate()

  const redireccion = (rol) =>{
    if(rol==="director"){
      console.log("Rol desde función",rol)
      navigate("/home")
    }else if(rol==="estudiante"){
      console.log("Rol desde función",rol)
      navigate("/user")
    }else{
      navigate("/")
    }

  } 


  useEffect(()=>{
    redireccion(role)
  },[])


  const ingresar = async (email, password) =>{
    const data = await login(email,password)
    console.log(data)
    localStorage.setItem("token",data.accessToken)
    setToken(localStorage.getItem("token"))
    console.log("Token", localStorage.getItem("token"))
    const decoded = jwt_decode(localStorage.getItem("token"))
    setRole(decoded.tipo)
    console.log(decoded)
    redireccion(decoded.tipo)
  } 

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo Inválido").required("Correo requerido"),
    password: Yup.string()
    .required("Contraseña requerida")
    .min(5, "La contraseña es muy corta")
    .max(20, "La contraseña es muy larga"),
  });

  return (
    <CardLogo wd={"380px"} hg={"500px"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={({email, password}) => {
          ingresar(email, password)
        }}
      >
        {(props) => {
          const { values, errors, isSubmitting, touched } = props;

          return (
            <Form>
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  variant="filled"
                  borderColor="gray.300"
                  type="email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password && touched.password}>
                <FormLabel htmlFor="password" mt={4}>
                  Contraseña
                </FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  borderColor="gray.300"
                  variant="filled"
                  type="password"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Box mt={4} textAlign="center" color={"blue.400"} textDecoration={"underline"}>

                <Link to="/recuperarEmail"  _hover="none">Olvidé mi contraseña</Link>
              </Box>
              <Button
                color="white"
                background={"principal.100"}
                mt={4}
                width="full"
                type="submit"
              >
                Ingresar
              </Button>
            </Form>
          );
        }}
      </Formik>
    </CardLogo>
  );
}
