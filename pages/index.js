import NextLink from 'next/link'
import { Container, Box, Button, Heading, Image, Link, List, ListItem, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from  '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { 
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'


const Page = () => {
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center" >
        Hello, I&apos;m a full-stack developer based in Chinese!
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" >
            Andy Zhang
          </Heading>
          <p>Digital Craftzman (Artist / Develpoer / Designer ) </p> 
        </Box>
        <Box flexShrink={0} mt= {{base: 4, md:0}} ml={{md:6}} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/zerotone.jpg" alt="Profile Image"/>
        </Box>
      </Box>
     <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Andy Zhang is a freelance and a full-stack developer based in China with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called{' '} 
          <NextLink href="/works/zerotone"><Link>Zerotone</Link></NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
              My protfolio
            </Button>
          </NextLink>
        </Box>
     </Section>

    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>1986</BioYear>
        Born in ChangSha, Hunan, China.
      </BioSection>
      <BioSection>
        <BioYear>2009</BioYear>
        Completed the Bachelor&apos;s Program Automation Science at Jiangsu University of Science and Technology
      </BioSection>
      <BioSection>
        <BioYear>2009</BioYear>
        Worked at Alibaba Group
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Completed the Master&apos;s Program Master of Bussiness Administration at Zhejiang University
      </BioSection>
      <BioSection>
        <BioYear>2021 to present</BioYear>
        Works as a freelance
      </BioSection>
    </Section>
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I ❤️
      </Heading>
      <Paragraph>
        Art, Music, {' '}
        <Link href="https://illust.odoruinu.net/">
          Drawing
        </Link>
        , Playing Drums, {' '}
        <Link href="https://500px.com/p/craftzdog/">
          Photography
        </Link>
        , Leica, Machine Learning
      </Paragraph>
    </Section>
    
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        On the web
      </Heading>
      <List mb={5} align="center">
        <ListItem>
          <Link href="https://github.com/earthandy" target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@earthandy</Button>
          </Link>
          <Link href="https://twitter.com/earthandy" target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>@earthandy</Button>
          </Link>
          <Link href="https://instagram.com/earthandy" target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>@earthandy</Button>
          </Link>
        </ListItem>
      </List>
      
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
        >
        My YouTube channel
        </GridItem>
        <GridItem
          title="Inkdrop"
          href="https://www.inkdrop.app/"
          thumbnail={thumbInkdrop}
        >
        A Markdown note-taking app
        </GridItem>
      </SimpleGrid>

      <Box align="center" my={4}>
        <NextLink href="/posts" scroll={false}>
           <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
             Popular posts
           </Button>
        </NextLink>
      </Box>
    </Section>
    </Container>
    </Layout>
  )
}

export default Page
