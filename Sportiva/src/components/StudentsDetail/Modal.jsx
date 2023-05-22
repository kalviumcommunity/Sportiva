import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,} from "@chakra-ui/react";
import { useState } from "react";
import { Image, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import axios from "axios";

export default function CustomModal({ newSessionCount , id }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [date, setDate] = useState(newSessionCount);
  const [newSkills, setNewSkills] = useState({
    skills : {
    speed: "",
    footwork: "",
    stamina: "",
    agility: "",
    flexibility: "",
    reflex: "",
    },
    date: `Session${newSessionCount}`,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleSubmit = () => {
    axios.post(`http://localhost:4006/api/Students/${id}/notes`, newSkills);
    setDate(date + 1);
    handleClose();
  };

  return (
    <>
      <Image
        src="/images/AddProperties.png"
        pr="66px"
        onClick={handleOpen}
        display={isOpen ? "none" : "block"}
      />
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
          overflow={"hidden"}
        >
          <Modal isOpen={true} onClose={handleClose} size="900">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontWeight="bold"
                fontSize={"38px"}
                flex="0.5"
                pt="70px"
                pl="370px"
              >
                Session {date}
              </ModalHeader>
              <ModalCloseButton fontWeight={"bolder"} />
              <ModalBody>
                <Flex
                  direction="column"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Flex direction="row" mb="22px">
                    <FormControl flex="1" mr="2" mb="22px">
                      <FormLabel fontWeight="semibold">Speed</FormLabel>
                      <Input
                        type="text"
                        h="40px"
                        border="1px"
                        w="250px"
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
                        w="250px"
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
                        w="250px"
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
                        w="250px"
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
                        w="250px"
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
                        w="250px"
                        borderColor="black"
                        borderRadius="none"
                        value={newSkills.reflex}
                        onChange={(e) =>
                          setNewSkills({ ...newSkills, reflex: e.target.value })
                        }
                      />
                    </FormControl>
                  </Flex>
                  <Flex direction={"row"} mb="22px">
                    <FormControl>
                      <FormLabel fontWeight="semibold">Coach Note</FormLabel>
                      <Input
                        type="text"
                        w="785px"
                        h="180px"
                        border="1px"
                        borderColor="black"
                        borderRadius="none"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </ModalBody>
              <ModalFooter pr="79px">
                <Button
                  bgColor="#9E0033"
                  color="white"
                  w="100px"
                  h="40px"
                  mr="330px"
                  onClick={handleSubmit}
                >
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

CustomModal.propTypes = {
  newSessionCount: PropTypes.number,
};
