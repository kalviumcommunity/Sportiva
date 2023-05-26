import { Box, Image, Input, Center, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const UploadAndDisplayImage = ({
  selectedImage,
  setSelectedImage,
  imageButtonRef,
  newImageURL
}) => {
  return (
    <Box>
      {selectedImage && (
        <Center>
          <Box>
            <Image
              h="210px"
              w="210px"
              src={newImageURL}
              position="relative"
              t="10px"
              padding="0px"
              borderRadius="10px"
            />
          </Box>
        </Center>
      )}
      {!selectedImage && (
        <Flex
          ml="70px"
          mt="70px"
          onClick={() => {
            imageButtonRef.current.click();
          }}
        >
          <Image
            position="absolute"
            mt="10px"
            ml="15px"
            src="/images/UploadIcon.png"
            htmlHeight="40px"
            htmlWidth="40px"
          />
        </Flex>
      )}
      <Input
        type="file"
        name="poster"
        mt={4}
        ref={imageButtonRef}
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
        display="none"
      />
    </Box>
  );
};

UploadAndDisplayImage.propTypes = {
  selectedImage: PropTypes.object,
  imageButtonRef: PropTypes.object,
  setSelectedImage: PropTypes.func.isRequired,
  newImageURL:PropTypes.string
};

export default UploadAndDisplayImage;
