import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Image, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
// import data from "../StudentsListingPage/Data";

export default function CustomModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [newSkills, setNewSkills] = useState({
    speed: "",
    footwork: "",
    stamina: "",
    agility: "",
    flexibility: "",
    reflex: "",
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    // Rest of the code...

    handleClose();
  };

  return (
    <>
      <Image src="/images/AddProperties.png" pr="66px" onClick={handleOpen} />
      {isOpen && (
        <Flex
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="999"
          bg="rgba(0, 0, 0, 0.6)"
          justifyContent="center"
          alignItems="center"
        >
          <Modal isOpen={true} onClose={handleClose} size="full">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" pl="800px" fontSize="38px" pb="50px">
                Session 42
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex
                  direction="column"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Flex direction="row" mb="22px">
                    <FormControl flex="1" mr="4" mb="22px">
                      <FormLabel fontWeight="semibold">Speed</FormLabel>
                      <Input
                        type="text"
                        h="40px"
                        border="1px"
                        w="300px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.speed}
                        onChange={(e) =>
                          setNewSkills({ ...newSkills, speed: e.target.value })
                        }
                      />
                    </FormControl>
                    <FormControl flex="1" mr="4" mb="22px">
                      <FormLabel fontWeight="semibold">Footwork</FormLabel>
                      <Input
                        type="text"
                        h="40px"
                        border="1px"
                        w="300px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.footwork}
                        onChange={(e) =>
                          setNewSkills({
                            ...newSkills,
                            footwork: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl flex="1" mb="22px">
                      <FormLabel fontWeight="semibold">Stamina</FormLabel>
                      <Input
                        type="text"
                        h="40px"
                        border="1px"
                        w="300px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.stamina}
                        onChange={(e) =>
                          setNewSkills({
                            ...newSkills,
                            stamina: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                  </Flex>
                  <Flex direction="row" mb="22px">
                    <FormControl flex="1" mr="4" mb="22px">
                      <FormLabel fontWeight="semibold">Agility</FormLabel>
                      <Input
                        type="number"
                        h="40px"
                        border="1px"
                        w="300px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.agility}
                        onChange={(e) =>
                          setNewSkills({
                            ...newSkills,
                            agility: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl flex="1" mr="4" mb="22px">
                      <FormLabel fontWeight="semibold">Flexibility</FormLabel>
                      <Input
                        type="number"
                        h="40px"
                        border="1px"
                        w="300px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.flexibility}
                        onChange={(e) =>
                          setNewSkills({
                            ...newSkills,
                            flexibility: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl flex="1" mb="22px">
                      <FormLabel fontWeight="semibold">Reflex</FormLabel>
                      <Input
                        type="number"
                        h="40px"
                        border="1px"
                        w="300px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.reflex}
                        onChange={(e) =>
                          setNewSkills({ ...newSkills, reflex: e.target.value })
                        }
                      />
                    </FormControl>
                  </Flex>
                  <FormControl mb="22px" pl="500px">
                    <FormLabel fontWeight="semibold">Coach Note</FormLabel>
                    <Input
                      type="text"
                      w="700px"
                      h="180px"
                      border="1px"
                      borderColor="black"
                      borderRadius="none"
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                    />
                  </FormControl>
                </Flex>
              </ModalBody>
              ;
              <ModalFooter pr="79x0px">
                <Button colorScheme="blue" onClick={handleSubmit}>
                  ADD
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      )}
    </>
  );
}

