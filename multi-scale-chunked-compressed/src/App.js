import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Grid,
  Heading,
  StackDivider,
  OrderedList,
  ListItem,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading as="h1" size="2xl">Multi-scale, Chunked, Compressed</Heading>
          <Heading as="h2" size="lg">Performance impact when loading medical imaging datasets</Heading>
          <VStack spacing={10} divider={<StackDivider borderColor="gray.200" />}>
            <Box maxW="40rem">
              <Heading as="h3" size="lg">Overview</Heading>
                <Text>Multi-scale, chunked, medical imaging volumes compressed with <Link color="teal.500" href="https://blosc.org/" target="_blank" rel="noopener noreferrer">next-generation codecs</Link> result in a better user experience on the web due to improved <Link color="teal.500" href="https://web.dev/fid/" target="_blank" rel="noopener noreferrer">interactivity</Link> and <Link color="teal.500" href="https://web.dev/lcp/" target="_blank" rel="noopener noreferrer">loading performance</Link>. These benefits originate from multiple properties of these next-generation file formats:
              </Text>
                <br/>
              <OrderedList spacing={3}>
                <ListItem>Reduced data size.</ListItem>
                <ListItem>Progressive, low-to-high scale loading.</ListItem>
                <ListItem>Parallel data fetching and decompression.</ListItem>
                <ListItem>Data slicing.</ListItem>
              </OrderedList>
                <br/>
              <Text>This page profiles the performance impact of these properties, comparing <Link color="teal.500" href="https://nifti.nimh.nih.gov/" target="_blank" rel="noopener noreferrer">NIFTI</Link> volumes to <Link color="teal.500" href="https://zarr.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">Zarr</Link> multi-scale pyramids.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Test datasets</Heading>
              <Text>Three medical imaging volumes, varying in size, are tested.</Text>
              <HStack divider={<StackDivider borderColor="gray.600" />}>
                <Box>
                  <Heading as="h5" size="md">Small</Heading>
                </Box>
                <Box>
                  <Heading as="h5" size="md">Medium</Heading>
                </Box>
                <Box>
                  <Heading as="h5" size="md">Large</Heading>
                </Box>
              </HStack>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Reduced data size</Heading>
              <Text>Todo.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Progressive, low-to-high scale loading</Heading>
              <Text>Todo.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Parallel data fetching and decompression</Heading>
              <Text>Todo.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Data slicing</Heading>
              <Text>Todo.</Text>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
