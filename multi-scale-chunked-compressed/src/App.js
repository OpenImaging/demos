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
  Image,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import smallThumb from './images/small-thumb.png'
import mediumThumb from './images/medium-thumb.png'
import largeThumb from './images/large-thumb.png'

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
                    <Link href="https://kitware.github.io/itk-vtk-viewer/app/?image=https://openimaging.github.io/demos/multi-scale-chunked-compressed/build/data/small.nii.gz" target="_blank" rel="noopener noreferrer">
                      <Image boxSize="sm" src={smallThumb} alt="Small test data"/>
                        <Text as="em">Size: </Text><Text>160 x 192 x 192 voxels</Text>
                        <Text as="em">Spacing: </Text><Text>1 x 1.33 x 1.33 mm</Text>
                    </Link>
                  <Link color="teal.500" href="https://github.com/OpenImaging/miqa/tree/master/sample_data/1_type1" target="_blank" rel="noopener noreferrer">Source</Link>
                </Box>
                <Box>
                  <Heading as="h5" size="md">Medium</Heading>
                    <Link href="https://kitware.github.io/itk-vtk-viewer/app/?image=https://openimaging.github.io/demos/multi-scale-chunked-compressed/build/data/medium.nii.gz" target="_blank" rel="noopener noreferrer">
                      <Image boxSize="sm" src={mediumThumb} alt="Medium test data"/>
                        <Text as="em">Size: </Text><Text>256 x 320 x 192 voxels</Text>
                        <Text as="em">Spacing: </Text><Text>0.9 x 0.9 x 0.9 mm</Text>
                    </Link>
                  <Link color="teal.500" href="https://wiki.idoimaging.com/index.php?title=Sample_Data" target="_blank" rel="noopener noreferrer">Source</Link>
                </Box>
                <Box>
                  <Heading as="h5" size="md">Large</Heading>
                    <Link href="https://kitware.github.io/itk-vtk-viewer/app/?image=https://data.kitware.com/api/v1/file/6012e33a2fa25629b91dc8b7/download/large.nii.gz" target="_blank" rel="noopener noreferrer">
                      <Image boxSize="sm" src={largeThumb} alt="Large test data"/>
                        <Text as="em">Size: </Text><Text>512 x 512 x 370 voxels</Text>
                        <Text as="em">Spacing: </Text><Text>0.71 x 0.71 x 0.75 mm</Text>
                    </Link>
                  <Link color="teal.500" href="https://wiki.idoimaging.com/index.php?title=Sample_Data" target="_blank" rel="noopener noreferrer">Source</Link>
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
