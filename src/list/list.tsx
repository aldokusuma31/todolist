import { Container, Grid, GridItem, Checkbox } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

function List() {
    return (
        <Container>
            <Grid
            templateColumns='repeat(5, 1fr)'
            h={10}
            >
                <GridItem colSpan={4}>
                    <Checkbox color='white'>
                        coba ini kita bikin checkbox 1
                    </Checkbox>                   
                </GridItem>
                <GridItem colSpan={1}>
                    <Container>
                        <DeleteIcon 
                        boxSize={4}
                        sx={{
                            color: "#ffb3b3",
                        }}
                        />
                    </Container>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default List