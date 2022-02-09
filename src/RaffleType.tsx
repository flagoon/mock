import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { NextButton } from "./NextButton";

const Netigo = () => {
  return (
    <FormControl mt={4}>
      <FormLabel htmlFor="game-mechanic">Netigo games</FormLabel>
      <Select bgColor="white">
        <option value="game-one">GameOne</option>
        <option value="game-two">GameTwo</option>
        <option value="game-three">GameThree</option>
        <option value="game-four">...</option>
      </Select>
    </FormControl>
  );
};

const KeywordInput = () => {
  return (
    <FormControl mt={4}>
      <FormLabel htmlFor="keyword-input">Keyword input question:</FormLabel>
      <Input name={"keyword-input"} bgColor="white" />
    </FormControl>
  );
};

const PictureUpload = () => {
  const [numberOfPictures, setNumberOfPictures] = useState([1]);
  const Inputs = numberOfPictures.map((number) => {
    return (
      <FormControl mt={4} key={number}>
        <FormLabel htmlFor="picture-input">
          Required picture no. {number}:
        </FormLabel>
        <Box display="flex" alignItems="center">
          <Input name={"picture-input"} bgColor="white" />
          {numberOfPictures.length <= number && (
            <PlusSquareIcon
              _hover={{
                cursor: "pointer",
              }}
              w="8"
              h="8"
              ml={4}
              onClick={() =>
                setNumberOfPictures([
                  ...numberOfPictures,
                  numberOfPictures.length + 1,
                ])
              }
            />
          )}
        </Box>
      </FormControl>
    );
  });
  return <>{Inputs}</>;
};

const AB = () => {
  const [numberOfOptions, setNumberOfOptions] = useState([1]);
  const Inputs = numberOfOptions.map((number) => {
    return (
      <FormControl mt={4} key={number}>
        <FormLabel htmlFor="picture-input">Option number {number}:</FormLabel>
        <Box display="flex" alignItems="center">
          <Input name={"picture-input"} bgColor="white" />
          {numberOfOptions.length <= number && (
            <PlusSquareIcon
              _hover={{
                cursor: "pointer",
              }}
              w="8"
              h="8"
              ml={4}
              onClick={() =>
                setNumberOfOptions([
                  ...numberOfOptions,
                  numberOfOptions.length + 1,
                ])
              }
            />
          )}
        </Box>
      </FormControl>
    );
  });
  return (
    <>
      <FormControl mt={4}>
        <FormLabel htmlFor="ab-question">AB question</FormLabel>
        <Input name="ab-question" bgColor="white" />
      </FormControl>
      {Inputs}
      <Text fontSize="xx-small" align="left" mt={4}>
        The correct format for option, is id;label, like 123;Andreas
      </Text>
    </>
  );
};

export const RaffleType = () => {
  const [gameMechanic, setGameMechanic] = useState("netigo");
  return (
    <Box display="flex" flexDir="column">
      <Box
        w="container.sm"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        display="flex"
        justifyContent="space-between"
      >
        <Box w="xl" bgColor="gray.100" p={4}>
          <FormControl mt={4}>
            <FormLabel htmlFor="game-mechanic">Game mechanic</FormLabel>
            <Select
              bgColor="white"
              value={gameMechanic}
              onChange={(e) => setGameMechanic(e.target.value)}
            >
              <option value="netigo">Netigo</option>
              <option value="keyword-input">Keyword input</option>
              <option value="picture-upload">Picture upload</option>
              <option value="ab">AB</option>
            </Select>
          </FormControl>
          {gameMechanic === "netigo" && <Netigo />}
          {gameMechanic === "keyword-input" && <KeywordInput />}
          {gameMechanic === "picture-upload" && <PictureUpload />}
          {gameMechanic === "ab" && <AB />}
        </Box>
      </Box>

      <NextButton to="prizes" />
    </Box>
  );
};
