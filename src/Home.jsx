import { Text, Button, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/loginPage");
  };

  return (
    <>
      <Container textAlign={"center"} m={"auto"}>
        <Text fontSize={"2xl"}>Welcome to the Home page</Text>
        <Button onClick={handleNavigation}>Login</Button>
      </Container>
    </>
  );
};
