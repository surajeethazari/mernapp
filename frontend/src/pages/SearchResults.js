import { Container } from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import PageTransition from '../utils/PageTransition';

export default function SearchResults() {
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Results', trigger: '/search', active: false },
  ];

  return (
    <PageTransition>
      <Container maxWidth="xl">
        <Box
          alignItems={'center'}
          flexDirection={'column'}
          display={'flex'}
          mb={2}
          sx={{ marginTop: 12 }}
        >
          <BreadCrumbs crumbs={crumbs} />
        </Box>
      </Container>
    </PageTransition>
  );
}
