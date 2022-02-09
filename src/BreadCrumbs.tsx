import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { CheckCircleIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const breadCrumbs = pathname.split("/");

  const getRaffleColor = () => {
    if (breadCrumbs.length === 3) {
      if (breadCrumbs[2] === "raffle") {
        return "blue";
      }
      return "green";
    } else if (breadCrumbs.length > 3) {
      return "green";
    }
    return "gray.300";
  };

  const getPrizeColor = () => {
    if (breadCrumbs[breadCrumbs.length - 1] === "prizes") {
      return "blue";
    } else if (breadCrumbs[breadCrumbs.length - 1] === "contact") {
      return "green";
    }
    return "gray.300";
  };

  const getContactColor = () => {
    if (breadCrumbs[breadCrumbs.length - 1] === "contact") {
      return "blue";
    }
    return "gray.300";
  };

  if (pathname === "/" || pathname === "/finish") {
    return <></>;
  }
  return (
    <Box
      w="md"
      display="flex"
      flexDir="column"
      justifyContent="space-around"
      mr={4}
      h={700}
      borderWidth="2px"
      borderRadius={4}
    >
      <Box color={breadCrumbs.length === 2 ? "blue" : "green"}>
        {breadCrumbs.length === 2 ? (
          <ArrowRightIcon mr={4} />
        ) : (
          <CheckCircleIcon mr={4} />
        )}
        Create job
      </Box>
      <Box color={getRaffleColor()}>
        {getRaffleColor() === "blue" ? (
          <ArrowRightIcon mr={4} />
        ) : getRaffleColor() === "green" ? (
          <CheckCircleIcon mr={4} />
        ) : null}
        Set game mechanic
      </Box>
      <Box color={getPrizeColor()}>
        {getPrizeColor() === "blue" ? (
          <ArrowRightIcon mr={4} />
        ) : getPrizeColor() === "green" ? (
          <CheckCircleIcon mr={4} />
        ) : null}
        Choose prize
      </Box>
      <Box color={getContactColor()}>
        {getContactColor() === "blue" ? <ArrowRightIcon mr={4} /> : null}Set
        contacts
      </Box>
    </Box>
  );
};
