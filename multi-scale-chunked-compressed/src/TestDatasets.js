import {
  Box,
  Text,
  Link,
  Heading,
  HStack,
  StackDivider,
  Image,
} from '@chakra-ui/react';

import smallThumb from './images/small-thumb.png'
import mediumThumb from './images/medium-thumb.png'
import largeThumb from './images/large-thumb.png'

function TestDatasets() {
  return (
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
  )
}
export default TestDatasets
