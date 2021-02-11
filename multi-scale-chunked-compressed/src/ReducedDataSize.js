import {
  Box,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

import Plot from 'react-plotly.js'

const datasetNames = ['Small', 'Medium', 'Large']

function ReducedDataSize() {
  return (
    <Box>
      <Heading as="h3" size="lg">Reduced data size</Heading>
        <Plot
        data={[
          {
            y: datasetNames,
            x: [3.4, 13, 82],
            name: 'Nifti',
            type: 'bar',
            orientation: 'h',
          },
          {
            y: datasetNames,
            x: [3.0, 11, 65],
            name: 'Zarr',
            type: 'bar',
            orientation: 'h',
          },
          {
            y: datasetNames,
            x: [2.8, 11, 64],
            name: 'Zarr Zip',
            type: 'bar',
            orientation: 'h',
          },
          {
            y: datasetNames,
            x: [3.5, 12, 75],
            name: 'Zarr Multiscale',
            type: 'bar',
            orientation: 'h',
          },
          {
            y: datasetNames,
            x: [3.2, 12, 74],
            name: 'Zarr Multiscale Zip',
            type: 'bar',
            orientation: 'h',
          },
        ]}
          layout={ { plot_bgcolor: 'rgb(234, 234, 234)', yaxis: { title: 'Dataset' }, xaxis: { title: 'Size (MB)' }, barmode: 'group', width: 800, height: 480, title: 'Reduced Data Size <br> Lower is better'} }
      />
            <Text>The Nifti files have Zlib compression while the Zarr data have <Link color="teal.500" href="https://blosc.org/" target="_blank" rel="noopener noreferrer">Blosc Zstd</Link> compression.</Text>
    </Box>
  )
}

export default ReducedDataSize
