import { Box, Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import CircleIcon from '@mui/icons-material/Circle';
const collectionItems = [
  'Your name',
  'Your mailing address',
  'Your e-mail address',
  'Your phone number',
  'Demographic and lifestyle information, such as age, personal interests, and product preferences',
  'Location information',
];
const infoItems = [
  'Fulfilling orders and requests for products, services or information',
  'Processing returns, exchanges and layaway requests',
  'Tracking and confirming online orders',
  'Delivering products',
  'Managing our Reward Zone program',
  'Marketing and advertising products and services',
  'Conducting research and analysis',
  'Establishing and managing your accounts with us',
  'Communicating things like special events, sweepstakes, promotions and surveys',
  'Identifying you on our websites and tailoring advertisements and offers to you based on your interactions online.',
  'Facilitating interactions with EthnicPlus and others, such as enabling you to e-mail a link to a friend',
  'Operating, evaluating and improving our business',
];
const thirdPartItems = [
  'Fulfilling orders',
  'Delivering packages',
  'Sending EthnicPlus marketing communications',
  'Fulfilling subscription services',
  'Conducting research and analysis',
  'Providing chat functions',
];

export default function Privacy() {
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    { name: 'Privacy', trigger: '/privacy', active: false },
  ];
  return (
    <Container maxWidth="xl">
      <BreadCrumbs crumbs={crumbs} />
      <Container component="main" maxWidth="xl">
        <Box display="flex" flexDirection={'column'} mt={5} mb={5} sx={{}}>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal' }}
          >
            We take your privacy seriously, and we want you to know how we
            collect, use, share and protect your information.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            INFORMATION WE COLLECT
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            Information You Give Us We receive and may store any information you
            enter on our website. For example, we collect information from you
            when you place an order, create an account, call us with a question,
            create a Wish List, write a review, or use any of our services.
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            The information we collect from you includes things like:
          </Typography>
          <List>
            {collectionItems.map((item, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection={'row'}
                alignItems={'center'}
              >
                <CircleIcon
                  sx={{ color: 'primary.main', fontSize: '10px', marginTop: 1 }}
                />
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'normal', marginTop: 1, marginLeft: 1 }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </List>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            It may also include information you give us about other people, such
            as the name and address of a gift recipient, or the name and contact
            info of a friend & Family. Information from Other Sources
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            We may also receive information about you from other sources,
            including third parties that help us update, expand and analyze our
            records and identify new customers.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            Automatic Information
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            Like many other websites, we also collect information through
            cookies and other automated means. Cookies are commonly used by
            websites to save data on your computer. The information we collect
            from cookies may include your IP address, browser and device
            characteristics, referring URLs, and a record of your interactions
            with our websites. We use cookies to create a more personalized
            shopping experience on our websites. This cookie may facilitate the
            tailoring of advertisements and offers to you, sometimes in
            connection with interest-based advertising.
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 5 }}
          >
            To help us understand and enhance our interactions with visitors to
            our websites, we may permit web analytics providers to collect
            information on our websites using automated tools like cookies. We
            also may share personal information with those providers. We may
            have similar arrangements with interest-based advertisers.
            Interest-based advertising is covered in more detail below.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            Location Information
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            Our website may collect certain information such as the type of
            device you're using or your specific location to help your shipping
            cost.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            Public Blog, Reviews, Forums
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            Our website offer publicly accessible blogs, reviews or community
            forums. You should be aware that any information you provide in
            these areas may be read, collected, and used by others who access
            them.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            HOW WE USE THE INFORMATION WE COLLECT
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            We use the information we collect for things like:
          </Typography>
          <List>
            {infoItems.map((item, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection={'row'}
                alignItems={'center'}
              >
                <CircleIcon
                  sx={{ color: 'primary.main', fontSize: '10px', marginTop: 1 }}
                />
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'normal', marginTop: 1, marginLeft: 1 }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </List>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            Data Retention
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            We will retain your information for as long as your account is
            active or as needed to provide you services, comply with our legal
            obligations, resolve disputes, and enforce our agreements.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            HOW WE SHARE THE INFORMATION WE COLLECT
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            EthnicPlus does not sell, rent or trade your personal information to
            third parties.
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 3 }}
          >
            We may share your information with third parties to perform services
            on our behalf such as:
          </Typography>
          <List>
            {thirdPartItems.map((item, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection={'row'}
                alignItems={'center'}
              >
                <CircleIcon
                  sx={{ color: 'primary.main', fontSize: '10px', marginTop: 1 }}
                />
                <Typography
                  color={'primary.main'}
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 'normal', marginTop: 1, marginLeft: 1 }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </List>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 3 }}
          >
            Sometimes we may be required to share personal information in
            response to a regulation, court order or subpoena. We may also share
            information when we believe it's necessary to comply with the law.
            We may also share information to respond to a government request or
            when we believe disclosure is necessary or appropriate to protect
            the rights, property or safety of EthnicPlus, our customers, or
            others; to prevent harm or loss; or in connection with an
            investigation of suspected or actual unlawful activity.
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 3 }}
          >
            We may also share personal information in the event of a corporate
            sale, merger, acquisition, dissolution or similar event.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            HOW WE PROTECT THE INFORMATION WE COLLECT
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            Whether you are shopping online or in our stores, we use reasonable
            security measures to protect the confidentiality of personal
            information under our control and appropriately limit access to it.
            EthnicPlus cannot ensure or warrant the security of any information
            you transmit to us and you do so at your own risk.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 3 }}
          >
            HAVE QUESTIONS?
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            If you have any questions about our Privacy Policy, we'll do our
            best to answer them. Please contact us at
            sonanlifashioninfo@gmail.com.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
