import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { NextButton } from "./NextButton";

export const JobSetting = () => {
  const [needMechanic, setNeedMechanic] = useState(true);
  return (
    <Box display="flex" flexDir="column">
      <Box
        w="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        mb={4}
      >
        <FormControl>
          <FormLabel>Project</FormLabel>
          <Select>
            <option value="top-model">Germany's Top Model</option>
            <option value="top-model2">Trucker babes</option>
            <option value="top-model3">Voice of Germany</option>
            <option value="add-new">+ add new</option>
          </Select>
        </FormControl>
      </Box>
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
            <FormLabel htmlFor="jobname">Job name</FormLabel>
            <Input bgColor="white" name="jobname" />
          </FormControl>
          <FormControl mt={4} w="sm">
            <FormLabel htmlFor="startDate">Start date</FormLabel>
            <Input bgColor="white" name="startDate" type="datetime-local" />
          </FormControl>

          <FormControl mt={4} w="sm">
            <FormLabel htmlFor="endDate">End date</FormLabel>
            <Input bgColor="white" name="endDate" type="datetime-local" />
          </FormControl>
        </Box>
      </Box>
      <Box
        w="container.sm"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        display="flex"
        flexDir="column"
        mt={4}
      >
        <FormLabel>Raffle type</FormLabel>
        <RadioGroup
          mt={4}
          onChange={(e) => {
            if (e === "tv") {
              setNeedMechanic(false);
            } else {
              setNeedMechanic(true);
            }
          }}
        >
          <HStack spacing="24px">
            <Radio value="tv">Tv</Radio>
            <Radio value="online">Online</Radio>
            <Radio value="both">Both</Radio>
          </HStack>
          <Text fontSize="xx-small" align="left" mt={4}>
            Next form depends on this choice. Choosing TV, you will go to Prize
            information, choosing anything else, you are going to be redirected
            to Game Mechanic.
          </Text>
        </RadioGroup>
      </Box>

      <NextButton to={needMechanic ? "raffle" : "prizes"} />
    </Box>
  );
};
