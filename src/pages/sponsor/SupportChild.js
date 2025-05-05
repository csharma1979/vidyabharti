/* SUPPORT CHILD PAGE MODIFICATIONS */

import React from 'react';
import { FaBook, FaGraduationCap, FaUserGraduate, FaBookReader, FaShareAlt } from 'react-icons/fa';
import PageBanner from '../../components/PageBanner';

// Create styled components without Material UI
const Container = ({ children, style }) => (
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 16px',
    ...style 
  }}>
    {children}
  </div>
);

const Typography = ({ variant, children, style, paragraph }) => {
  const getStyleForVariant = () => {
    switch(variant) {
      case 'h4':
        return { fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' };
      case 'h5':
        return { fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' };
      case 'body1':
        return { fontSize: '1rem', lineHeight: '1.5', marginBottom: paragraph ? '1rem' : '0' };
      default:
        return {};
    }
  };

  return (
    <div style={{ 
      ...getStyleForVariant(),
      ...style 
    }}>
      {children}
    </div>
  );
};

const Box = ({ children, sx }) => (
  <div style={{ 
    ...sx 
  }}>
    {children}
  </div>
);

// Modified FeaturedImage component to match Support Vidya Bharati style
const FeaturedImage = ({ imagePath, title }) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div style={{
      borderRadius: '8px',
      height: '600px',  // Increased from 500px to 600px
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      marginBottom: '32px',
      marginTop: '16px' // Added top margin for spacing from banner
    }}>
      {!imageError ? (
        <img
          src={imagePath}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: '#841B2D',
          color: 'white',
          padding: '20px'
        }}>
          <FaGraduationCap size={120} color="white" /> {/* Increased size from 96 to 120 */}
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '2rem' }}>
            Support a Child's Education
          </div>
        </div>
      )}
    </div>
  );
};

// Card component with placeholder image as fallback
const Card = ({ children, imagePath, title, description, style }) => {
  // Use a placeholder image if the actual image fails to load
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div style={{
      borderRadius: '8px',
      height: '400px',  // Changed from 300px to 400px to match Vidya Bharati
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease',
      ...style
    }}>
      {/* Image with error handling */}
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#841B2D',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {!imageError ? (
          <img 
            src={imagePath} 
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '20px'
          }}>
            {title === "School Supplies" ? (
              <FaBook size={60} color="white" />
            ) : (
              <FaGraduationCap size={60} color="white" />
            )}
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              {title}
            </div>
          </div>
        )}
      </div>
      
      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '20px',
        zIndex: 1
      }}>
        <Typography
          variant="h5"
          style={{
            fontWeight: '600',
            fontSize: '1.2rem',
            marginBottom: '8px'
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{ fontSize: '0.9rem' }}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

const Button = ({ children, variant, size, sx, onClick }) => {
  const getStyles = () => {
    let baseStyles = {
      padding: size === 'large' ? '12px 24px' : '8px 16px',
      fontSize: size === 'large' ? '1rem' : '0.875rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.3s ease',
    };
    
    if (variant === 'contained') {
      baseStyles = {
        ...baseStyles,
        backgroundColor: '#841B2D',
        color: 'white',
      };
    }
    
    return { ...baseStyles, ...sx };
  };
  
  return (
    <button 
      style={getStyles()}
      onClick={onClick}
      onMouseOver={(e) => {
        if (sx && sx['&:hover'] && sx['&:hover'].bgcolor) {
          e.currentTarget.style.backgroundColor = sx['&:hover'].bgcolor;
        }
      }}
      onMouseOut={(e) => {
        if (sx && sx.bgcolor) {
          e.currentTarget.style.backgroundColor = sx.bgcolor;
        }
      }}
    >
      {children}
    </button>
  );
};

// Progress Bar Component
const ProgressBar = ({ current, goal }) => {
  const percentage = (current / goal) * 100;
  
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e0e0e0',
      borderRadius: '10px',
      margin: '24px 0',
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '20px',
        backgroundColor: '#841B2D',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
        fontSize: '0.8rem',
        lineHeight: '20px'
      }}>
        {percentage.toFixed(0)}%
      </div>
    </div>
  );
};

// Donor List Component
const DonorList = ({ donors }) => {
  return (
    <div style={{ 
      marginTop: '32px',
      padding: '24px',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px'
    }}>
      <Typography variant="h5" style={{ marginBottom: '16px' }}>
        Donors
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {donors.map((donor, index) => (
          <div key={index} style={{ 
            padding: '12px', 
            backgroundColor: 'white', 
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            flex: '1 1 200px'
          }}>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              {donor.name}
            </Typography>
            <Typography variant="body1">
              ${donor.amount.toLocaleString()}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

const SupportChild = () => {
  // Support initiatives with icons
 

  // Sample donor data
  const donors = [
    { name: "Chaithra T L", amount: 1 },
    { name: "Umesh Shilvant", amount: 1000 },
    { name: "Vijay", amount: 10000 }
  ];

  return (
    <>
      <PageBanner 
        title="Support a Child's Education" 
        subtitle="Transform Lives Through the Power of Education"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section - Added FeaturedImage to match Vidya Bharati style */}
        <Box sx={{ marginBottom: '64px' }}>
          <FeaturedImage 
            imagePath="assets/sponser/students2.webp" 
            title="Support a Child's Education"
          />
          
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '24px', textAlign: 'center' }}>
            How Your Support Makes a Difference
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Education is the key to unlocking a brighter future. With your support, we can ensure that every child has access to quality education and the opportunity to succeed. Join us in transforming lives and building a better world through the power of education.
          </Typography>
        </Box>

        {/* Support Initiatives Cards - reduced to 2 cards */}
       

        {/* Why It Matters Section - with updated color */}
        <Box sx={{ 
          marginBottom: '64px', 
          textAlign: 'center', 
          backgroundColor: '#f0e9ea',
          padding: '48px',
          borderRadius: '8px'
        }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            Why It Matters
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto' }}>
            Every child deserves the opportunity to learn, grow, and reach their full potential. By supporting a child's education, you're not just helping them in the present—you're investing in their future and contributing to the growth and well-being of entire communities.
          </Typography>
        </Box>

        {/* Donation Progress Section */}
        <Box sx={{ 
          backgroundColor: '#FFFFFF', 
          padding: '48px', 
          borderRadius: '8px',
          marginBottom: '64px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h4" style={{ marginBottom: '24px', color: '#841B2D' }}>
            Our Fundraising Goal
          </Typography>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              Collected: $0.00
            </Typography>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              Goal: $500,000.00
            </Typography>
          </div>
          
          <ProgressBar current={0} goal={500000} />
          
          <div style={{ marginTop: '32px' }}>
            <Button 
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#841B2D',
                '&:hover': { bgcolor: '#6a1624' }
              }}
            >
              <FaUserGraduate style={{ marginRight: '8px' }} />
              Donate Now
            </Button>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px',
              marginTop: '16px' 
            }}>
              <Button 
                variant="contained"
                size="small"
                sx={{ 
                  bgcolor: '#4267B2', 
                  '&:hover': { bgcolor: '#365899' }
                }}
              >
                <FaShareAlt style={{ marginRight: '8px' }} />
                Share
              </Button>
            </div>
          </div>
          
          {/* Donor List */}
          <DonorList donors={donors} />
        </Box>

        {/* Call to Action - Full width like banner */}
        <div style={{ 
          textAlign: 'center',
          backgroundColor: '#f0e9ea',
          padding: '64px 0',
          margin: '0',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw'
        }}>
          <Container>
            <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '16px' }}>
              Make a Difference Today
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Your contribution can change a child's life. Join us in our mission to provide quality education to every child.
            </Typography>
            <Button 
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#841B2D',
                '&:hover': { bgcolor: '#6a1624' }
              }}
            >
              <FaBookReader style={{ marginRight: '8px' }} />
              Support Now
            </Button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SupportChild;
