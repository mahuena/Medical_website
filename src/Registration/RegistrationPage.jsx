import {Box,  Button,  Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Spacer, FormControl,
  FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Link, Stack, useToast,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {validationSchemaRegistration} from "./components/ValidationSchemaRegistration.jsx"


export const RegistrationPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
      navigate("/loginPage");
      toast({
        description: "Registration successful",
        status: "success",
        duration: 2000,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        description: "An error occurred during registration",
        status: "error",
        duration: 2000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const [showPassW, setShowPassW] = React.useState(false);
  const handleClickPassW = () => setShowPassW(!showPassW);

  return (
      <Center minHeight="100vh">
        <Card
            m={"auto"} w={"100%"} p={4} maxW={"500px"} mx={{ base: "8px", md: "0px" }} my={{ base: "10px", md: "0px" }} alignItems={"center"} justifyContent={"center"}>
          <CardHeader><Heading fontSize={"2xl"}>Create an account</Heading></CardHeader>

          <CardBody w={"100%"}>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validationSchemaRegistration}
                onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing={4} direction="column">
                      <Box>
                        <FormControl>
                          <FormLabel htmlFor="username">Username <span style={{ color: "red" }}>*</span></FormLabel>
                          <Box>
                            <Field type="text" id='username' name="username" size={"lg"} placeholder="Username" as={Input} />
                            <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '11px' }} />
                          </Box>
                        </FormControl>
                      </Box>

                      <Box>
                        <FormControl>
                          <FormLabel htmlFor="email">Email <span style={{ color: "red" }}>*</span></FormLabel>
                          <Box>
                            <Field type="email" id="email" name="email" size={"lg"} placeholder="Email" as={Input} />
                            <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '11px' }} />
                          </Box>
                        </FormControl>
                      </Box>

                      <Box>
                        <FormControl>
                          <FormLabel htmlFor="password">Password <span style={{ color: "red" }}>*</span></FormLabel>
                          <InputGroup>
                            <Field type={showPassW ? "text" : "password"} id="password" name="password" size={"lg"} placeholder="*********" as={Input} />
                            />

                            <InputRightElement>
                              <Container bg={"transparent"} mr={"4"} onClick={handleClickPassW}>{showPassW ? <ViewIcon /> : <ViewOffIcon />}</Container>
                            </InputRightElement>
                          </InputGroup>
                          <ErrorMessage name='password' component="div" style={{ color: 'red', fontSize: '11px'}} />
                        </FormControl>
                      </Box>

                      <Spacer />
                      <Button type="submit" colorScheme={"blue"} isLoading={isSubmitting}>Create account</Button>
                      <Button color={"black"} bg={"white"} borderWidth={"1px"} borderColor={"lightgrey"} display={"flex"} gap={4}>
                        <Image src={"src/assets/googleLogo.png"} boxSize={"20px"} />
                        Sign in with Google
                      </Button>
                    </Stack>
                  </Form>
              )}
            </Formik>
          </CardBody>

          <CardFooter>
            <Flex gap={3}>
              <p>Already have an account?</p>
              <Link href={"/loginPage"} color="#007FFF">Login in</Link>
            </Flex>
          </CardFooter>
        </Card>
      </Center>
  );
};
