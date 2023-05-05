import {Box,Image,Button,Input,Stack,Center,} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const UploadAndDisplayImage = ({selectedImage , setSelectedImage}) => {
  return (
    <Box p={4}>
      {selectedImage && (
        <Center>
          <Box mt={4}>
            <Image
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
              w="210px" h="210px"
            />
            <Stack direction="row" justifyContent="center" mt={2}>
              <Button size="sm" onClick={() => setSelectedImage(null)}>
                Remove
              </Button>
            </Stack>
          </Box>
        </Center>
      )}
      <Input
        type="file"
        name="myImage"
        mt={4}
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </Box>
  );
};

export default UploadAndDisplayImage;
