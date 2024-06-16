import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Box, Button, Card, CardHeader, Heading, CardBody, CardFooter, FormControl,
  FormLabel, Input, Stack, Flex, InputRightElement, Checkbox, Center,  Spacer, Link, Image, InputGroup, Container, useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {validationSchemaLogin} from "./components/validationSchemaLogin.jsx";

export const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate an async API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
      navigate("/");
      toast({
        description: "Login successful",
        status: "success",
        duration: 2000,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        description: "An error occurred during login",
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
      <Center minHeight="90vh">
        <Card m={"auto"} w={"100%"} maxW={"500px"} p={4} mx={{ base: "8px", md: "0px" }} my={{ base: "10px", md: "0px" }} alignItems={"center"} justifyContent={"center"}>
          <CardHeader><Heading fontSize={"2xl"}>Login to your account</Heading></CardHeader>

          <CardBody w={"100%"}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchemaLogin}
                onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing={4} direction="column" maxW={"700px"}>
                      <Box maxW={"700px"}>
                        <FormControl>
                          <FormLabel htmlFor="email">Email <span style={{ color: "red" }}>*</span></FormLabel>
                          <Field type="email" id="email" name="email" size={"lg"} placeholder="Enter your email" as={Input} />
                          <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '11px' }} />
                        </FormControl>
                      </Box>

                      <Box>
                        <FormControl>
                          <FormLabel htmlFor="password">Password <span style={{ color: "red" }}>*</span></FormLabel>
                          <InputGroup>
                            <Field type={showPassW ? "text" : "password"} id="password" name="password" size={"lg"} placeholder="*********" as={Input} />
                            <InputRightElement>
                              <Container bg={"transparent"} mr={"4"} onClick={handleClickPassW}>{showPassW ? <ViewIcon /> : <ViewOffIcon />}</Container>
                            </InputRightElement>
                          </InputGroup>
                          <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '11px' }} />
                        </FormControl>
                      </Box>

                      <Flex>
                        <Checkbox>Remember me</Checkbox>
                        <Spacer />
                        <Link href="#" color="#007FFF">Forgot password</Link>
                      </Flex>

                      <Button type="submit" colorScheme={"blue"} isLoading={isSubmitting}>Sign in</Button>
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
              <p>Don't have an account?</p>
              <Link href={"/registrationPage"} color="#007FFF">Sign up</Link>
            </Flex>
          </CardFooter>
        </Card>
      </Center>
  );
};
