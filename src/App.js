import { PipelineToolbar } from './components/toolbar/toolbar.js';
import { PipelineUI } from './layout/vectorShiftChart.js';
import ErrorBoundary from './components/errorBoundary/errorBoundary.js';

import './styles/global.scss';

import { ChakraProvider } from '@chakra-ui/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <PipelineToolbar />
          <PipelineUI />
        </ChakraProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
