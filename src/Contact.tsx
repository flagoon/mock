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
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { NextButton } from "./NextButton";

const contactInfo = [
  {
    id: "92d02819-9fe3-4adb-ba9c-cd68c5e9250c",
    first_name: "Candace McMickan",
    phone_number: "502-964-6796",
    email: "cmcmickan0@ning.com",
    checked: false,
  },
  {
    id: "0862cc7f-c9de-472e-92e3-94ca7d67cbd3",
    first_name: "Aaron Izacenko",
    phone_number: "162-436-3113",
    email: "aizacenko1@reddit.com",
    checked: false,
  },
  {
    id: "bffddb79-66d9-4b79-ba30-50a60fb67ad0",
    first_name: "Xaviera Hutchinson",
    phone_number: "713-162-0350",
    email: "xhutchinson2@taobao.com",
    checked: false,
  },
  {
    id: "2e1cfe76-77af-4389-b6aa-f78e711f51b8",
    first_name: "Rod Gregr",
    phone_number: "189-188-8404",
    email: "rgregr3@cocolog-nifty.com",
    checked: false,
  },
  {
    id: "15f8843d-6adb-4ec6-ade6-7a934fa46867",
    first_name: "Mortie Brooksbank",
    phone_number: "821-478-7479",
    email: "mbrooksbank4@cloudflare.com",
    checked: false,
  },
  {
    id: "b42d9762-61f3-4284-b387-000cbc498a4c",
    first_name: "Laverne Dunstall",
    phone_number: "712-814-8274",
    email: "ldunstall5@toplist.cz",
    checked: false,
  },
  {
    id: "d7e08e3c-35d3-4578-b29e-93937e69b9ba",
    first_name: "Carmel Ramplee",
    phone_number: "116-796-2322",
    email: "cramplee6@wikipedia.org",
    checked: false,
  },
  {
    id: "a4fdc420-dc00-4588-9786-8055611151c6",
    first_name: "Tildi McDermott",
    phone_number: "613-889-3721",
    email: "tmcdermott7@loc.gov",
    checked: false,
  },
  {
    id: "248018c5-9de2-40d8-84f3-cf40acb21546",
    first_name: "Anne Ollerearnshaw",
    phone_number: "420-164-0317",
    email: "aollerearnshaw8@1und1.de",
    checked: false,
  },
  {
    id: "d42b8cc6-66cd-4049-8b9c-72226470a19b",
    first_name: "Sherie Stangoe",
    phone_number: "487-681-8648",
    email: "sstangoe9@dell.com",
    checked: false,
  },
];

export const Contact = () => {
  const [contacts, setContacts] = useState(contactInfo);
  const [search, setSearch] = useState("");
  const [isApproved, setIsApproved] = useState(false);
  const [areFiltered, setAreFiltered] = useState(false);
  const [mainContact, setMainContact] = useState<{
    id: string;
    first_name: string;
    phone_number: string;
    email: string;
  }>();

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
          <Text>Contact</Text>
          <FormControl>
            <FormLabel htmlFor="contact-person">Main contact person:</FormLabel>
            <Select
              bgColor="white"
              onChange={(e) => {
                const contact = contacts.find(
                  (con) => con.id === e.target.value
                );
                setMainContact(contact);
              }}
            >
              {contacts.map((contact) => (
                <option value={contact.id} key={contact.id}>
                  {contact.first_name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box
            display="flex"
            justifyContent="flex-start"
            borderWidth="1px"
            mt={4}
          >
            {mainContact && (
              <Text
                p={2}
                textAlign="left"
                fontSize="sm"
              >{`${mainContact.first_name}, ${mainContact.phone_number}, ${mainContact.email}`}</Text>
            )}
          </Box>
          <FormControl mt={4}>
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
                {contacts.map((contact) => {
                  return (
                    <Checkbox
                      key={contact.id}
                      isDisabled={isApproved}
                      isChecked={contact.checked}
                      onChange={(e) => {
                        const checked = contacts.map((con) => {
                          if (con.id === contact.id) {
                            return { ...con, checked: e.target.checked };
                          }
                          return con;
                        });
                        setContacts(checked);
                      }}
                    >
                      {contact.first_name}
                    </Checkbox>
                  );
                })}
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            borderWidth="1px"
            mt={4}
            flexDir="column"
          >
            {areFiltered &&
              contacts.map((contact) => {
                return (
                  <Text p={2} textAlign="left" fontSize="sm" key={contact.id}>
                    {`${contact.first_name}, ${contact.phone_number}, ${contact.email}`}
                  </Text>
                );
              })}
          </Box>

          <Box display="flex" justifyContent={"flex-end"} mt={4}>
            {isApproved ? (
              <Button
                variant="solid"
                colorScheme="red"
                onClick={() => {
                  setIsApproved(false);
                  setContacts(contactInfo);
                  setAreFiltered(false);
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
                  const filtered = contacts.filter(
                    (contact) => contact.checked
                  );
                  setContacts(filtered);
                  setAreFiltered(true);
                }}
              >
                Approve
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <NextButton to="contact" lastOne />
    </Box>
  );
};
