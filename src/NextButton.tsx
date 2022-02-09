import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NextButton = ({
  to,
  lastOne,
}: {
  to: string;
  lastOne?: boolean;
}) => {
  return (
    <Button mt="auto" colorScheme="teal">
      <Link to={lastOne ? "/finish" : to}>{lastOne ? "Finish" : "Next"}</Link>
    </Button>
  );
};
