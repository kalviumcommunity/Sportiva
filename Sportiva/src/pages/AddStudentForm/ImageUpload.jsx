import {Box,Image,Button,Input,Stack,Center,Flex,} from "@chakra-ui/react";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const UploadAndDisplayImage = ({ selectedImage, setSelectedImage }) => {
  const imageButtonRef = useRef();
  return (
    <Box p={4}>
      {selectedImage && (
        <Center>
          <Box mt={4}>
            <Image
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
              w="210px"
              h="210px"
            />
            <Stack direction="row" justifyContent="center" mt={2}>
              <Button size="sm" onClick={() => setSelectedImage(null)}>
                Remove
              </Button>
            </Stack>
          </Box>
        </Center>
      )}
      <Flex
        ml="70px"
        mt="70px"
        onClick={() => {
          imageButtonRef.current.click();
        }}
      >
        <Image
          src="/images/UploadIcon.png"
          htmlHeight="40px"
          htmlWidth="40px"
        />
      </Flex>
      <Input
        type="file"
        name="myImage"
        mt={4}
        ref={imageButtonRef}
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
        display={"none"}
      />
    </Box>
  );
};

export default UploadAndDisplayImage;
