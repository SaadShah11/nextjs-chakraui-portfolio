import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Pakistan
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Syed Saad Ullah Shah
          </Heading>
          <p>
            Software Developer ( Frontend | Backend | DevOps | Cloud Architect )
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
