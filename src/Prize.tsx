import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { NextButton } from "./NextButton";

const prizes = [
  {
    id: "8e71d22a-b04c-4d6a-a2d7-57ce37aee241",
    first_name: "Ranitidine",
    checked: false,
  },
  {
    id: "f52180d3-2aa1-4657-a1df-cb0514a4e4b6",
    first_name: "Paroxetine Hydrochloride",
    checked: false,
  },
  {
    id: "efd585ac-4fa5-469f-a274-e22fd3c3a891",
    first_name: "SODIUM FLUORIDE",
    checked: false,
  },
  {
    id: "0f06f3a4-8389-44f1-9f8a-4394fcee0153",
    first_name: "Torsemide",
    checked: false,
  },
  {
    id: "1f924ef9-b52b-4d6e-a427-19769baf75b8",
    first_name: "Chlordiazepoxide Hydrochloride",
    checked: false,
  },
  {
    id: "21ae8245-110d-454f-9f2c-26d6b080c26b",
    first_name: "vortioxetine",
    checked: false,
  },
  {
    id: "aa8b4348-89a8-4a05-ac61-7b9ada575f76",
    first_name: "Oxygen",
    checked: false,
  },
  {
    id: "31a8b603-c69d-42ae-a8a4-7b2ffc9fa91e",
    first_name: "Diphenhydramine Hydrochloride",
    checked: false,
  },
  {
    id: "4f18f3ab-f8e4-4df1-83e0-93b1d5da3aa1",
    first_name: "Titanium Dioxide",
    checked: false,
  },
  {
    id: "c5a0cec3-dd26-44d2-a927-0ae776ef74a1",
    first_name: "Piperonyl Butoxide, Pyrethrum Extract",
    checked: false,
  },
];

export const Prize = () => {
  const [mainPrizes, setMainPrizes] = useState(prizes);
  const [search, setSearch] = useState("");
  const [isApproved, setIsApproved] = useState(false);

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
          <Text>Prizes</Text>
          <FormControl mt={4}>
            <Text textAlign="left">Main prizes</Text>
            <Box display="flex" mt={4}>
              <FormLabel htmlFor="search">Search</FormLabel>
              <Input
                bgColor="white"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Box>
          </FormControl>
          <Box mt={4} bgColor="white" p={4} h="200" overflowY="scroll">
            <CheckboxGroup>
              <Stack direction="column" spacing={3}>
                {mainPrizes.map((el, index) => {
                  return (
                    <Checkbox
                      key={el.id}
                      isDisabled={isApproved}
                      isChecked={el.checked}
                      onChange={(e) => {
                        const checked = mainPrizes.map((a) => {
                          if (a.id === el.id) {
                            return { ...a, checked: e.target.checked };
                          }
                          return a;
                        });
                        setMainPrizes(checked);
                      }}
                    >
                      {el.first_name}
                    </Checkbox>
                  );
                })}
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box display="flex" justifyContent={"flex-end"} mt={4}>
            {isApproved ? (
              <Button
                variant="solid"
                colorScheme="red"
                onClick={() => {
                  setIsApproved(false);
                  setMainPrizes(prizes);
                }}
              >
                Reject
              </Button>
            ) : (
              <Button
                variant="solid"
                colorScheme="teal"
                onClick={() => {
                  setIsApproved(true);
                  const checked = mainPrizes.filter((el) => el.checked);
                  setMainPrizes(checked);
                }}
              >
                Approve
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      <NextButton to="contact" />
    </Box>
  );
};
