import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,} from "@chakra-ui/react";
import { useState } from "react";
import {Image,Input,Flex} from "@chakra-ui/react";
// import StudentAnalytics from "../../pages/StudentsDetailPage/StudentsAnalytics";

export default function CustomModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Image src="/images/AddProperties.png" pr="66px" onClick={handleOpen} />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Week</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Flex direction="row">
                <Input
                  type="text"
                  flex="1"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                  mb={2}
                />
                <Input
                  type="text"
                  flex="1"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                  mb={2}
                  ml={2}
                />
                <Input
                  type="text"
                  flex="1"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                  mb={2}
                  ml={2}
                />
              </Flex>
              <Flex direction="row">
                <Input
                  type="text"
                  flex="1"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                  mb={2}
                />
                <Input
                  type="text"
                  flex="1"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                  mb={2}
                  ml={2}
                />
                <Input
                  type="text"
                  flex="1"
                  h="40px"
                  border="1px"
                  borderColor="black"
                  borderRadius="none"
                  mb={2}
                  ml={2}
                />
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Save
            </Button>
            {/* <Button variant="ghost" onClick={handleClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
