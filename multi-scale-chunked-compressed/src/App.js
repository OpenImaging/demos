import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  StackDivider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Overview from './Overview'
import TestDatasets from './TestDatasets'
import ReducedDataSize from './ReducedDataSize'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading as="h1" size="2xl">Multi-scale, Chunked, Compressed</Heading>
          <Heading as="h2" size="lg">Performance impact when loading medical imaging datasets</Heading>
          <VStack spacing={10} divider={<StackDivider borderColor="gray.200" />}>
            <Overview/>
            <TestDatasets/>
            <ReducedDataSize/>
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
