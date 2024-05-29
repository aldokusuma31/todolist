import { Box, Text, Input, Button } from "@chakra-ui/react";

function Form() {
    return(
        <Box>
            <Text
                sx={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                color: "white"
                }}
            >
                Done: 
            </Text>
            <Text
                mb="0.25rem"
                sx={{
                fontSize: "14px",
                }}
            >
                Add todo
            </Text>
            <Input size="md" mb="1rem"/>
            <Button
                sx={{
                backgroundColor: "#90cdf4",
                }}
            >
                ADD TASK
            </Button>
        </Box>
  );
}

export default Form