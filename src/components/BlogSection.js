import React, { useRef } from 'react';
import { 
  Container, 
  Typography, 
  Box,
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  IconButton,
  styled 
} from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BlogCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  }
});

const BlogTitle = styled(Typography)({
  fontWeight: 600,
  marginBottom: 2,
  color: '#333'
});

const BlogDate = styled(Typography)({
  color: '#666',
  fontSize: '0.875rem',
  marginBottom: 1
});

const ScrollContainer = styled(Box)({
  display: 'flex',
  overflowX: 'hidden',
  position: 'relative',
  gap: '24px',
  padding: '20px 0'
});

const ScrollButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  zIndex: 2
});

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Education in Rural India',
      date: 'March 15, 2024',
      excerpt: 'Discover how Vidya Bharati is transforming education in rural communities...',
      image: '/assets/Home/educational-impower.webp',
      link: '/blog/empowering-education'
    },
    {
      id: 2,
      title: 'Success Stories: Our Alumni Making a Difference',
      date: 'March 10, 2024',
      excerpt: 'Meet our alumni who are creating positive change in their communities...',
      image: '/assets/Home/success-stories.webp',
      link: '/blog/alumni-stories'
    },
    {
      id: 3,
      title: 'Building Better Schools Together',
      date: 'March 5, 2024',
      excerpt: 'Learn about our initiatives in improving school infrastructure...',
      image: '/assets/Home/infrastructure-improve.webp',
      link: '/blog/better-schools'
    }
  ];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f0e9ea', position: 'relative' }}>
      <Container>
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          sx={{ mb: 6, fontWeight: 600, color: '#333' }}
        >
          Latest Updates
        </Typography>
        
        <Box sx={{ position: 'relative' }}>
          <ScrollButton 
            onClick={() => scroll('left')} 
            sx={{ left: { xs: -20, md: -28 } }}
          >
            <NavigateBeforeIcon />
          </ScrollButton>
          
          <ScrollContainer ref={scrollRef}>
            {blogPosts.map((post) => (
              <BlogCard 
                key={post.id} 
                sx={{ 
                  minWidth: '350px',
                  maxWidth: '350px',
                  flexShrink: 0,
                  height: '100%'
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <BlogDate variant="body2">
                    {post.date}
                  </BlogDate>
                  <BlogTitle variant="h5" gutterBottom>
                    {post.title}
                  </BlogTitle>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Button 
                    component={Link} 
                    to={post.link}
                    sx={{ 
                      color: '#FF5733',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#dc004e'
                      }
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </BlogCard>
            ))}
          </ScrollContainer>
          
          <ScrollButton 
            onClick={() => scroll('right')} 
            sx={{ right: { xs: -20, md: -28 } }}
          >
            <NavigateNextIcon />
          </ScrollButton>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;