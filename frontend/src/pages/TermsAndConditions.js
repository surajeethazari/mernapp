import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { Box, Container, List, Typography } from '@mui/material';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

export default function TermsAndConditions() {
  let crumbs = [
    { name: 'Home', trigger: '/', active: true },
    {
      name: 'Terms & Conditions',
      trigger: '/termsAndConditions',
      active: false,
    },
  ];
  let tAndCLists = [
    'Description of Services',
    'General',
    'Your Account',
    'License and Site Access',
    'Pricing Information in case of sale by us',
    'Cancellation by Us',
    'Cancellations by the User',
    'Fraudulent /Declined Transactions',
    'Credit Card Details',
    'Billing',
    'Delivery',
    'Trademarks',
  ];
  return (
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
      <Container component="main" maxWidth="xl">
        <Box display="flex" flexDirection={'column'} mt={5} mb={5} sx={{}}>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Terms And Conditions
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            You (“you” or “End User” or “your” or “Buyer” or “Customer”) are
            required to read and accept all of the terms and conditions laid
            down in this Terms and Conditions (“Terms and Conditions” or “TERMS
            AND CONDITIONS” or “Terms” or “Agreement”) and the linked Privacy
            Policy, before you may use www.ethnicplus.in (hereinafter referred
            to as “Site” or “EthnicPlus” or “we ( Fabpixel)” or “our”). The Site
            allows you to browse, select and purchase Clothing and Accessories
            (“Goods” or “Products” or “Services”).
            <br />
            <br />
            Your use of this website <Link>www.example.com</Link> (hereinafter
            referred to as the “Site”) and its related sites, services, and
            tools). These TERMS AND CONDITIONS are effective upon acceptance and
            governs the relationship between you and Ethnic Plus, a
            proprietorship firm having its registered office at Surat-395002
            (hereinafter the “Firm”) including the sale and supply of any
            Products on the Site. If these TERMS AND CONDITIONS conflicts with
            any other document, the TERMS AND CONDITIONS will prevail for the
            purposes of usage of the Site. If you do not agree to be bound by
            this TERMS AND CONDITIONS and the Privacy Policy, you may not use
            the Site in any way. For the purposes of this TERMS AND CONDITIONS,
            the term ‘Acceptance’ shall mean your affirmative action in clicking
            on ‘check box' and on the ‘continue button’ as provided on the
            registration page or such other actions that implies your
            acceptance.
            <br />
            <br />
            The Firm may amend this Agreement and/or the Privacy Policy at any
            time by posting a revised version on the Site. All updates and
            amendments shall be notified to you via posts on the website or
            through e-mail. The revised version will be effective at the time we
            post it on the Site, and in the event, you continue to use our Site,
            you are impliedly agreeing to the revised TERMS AND CONDITIONS and
            Privacy Policy expressed herein.
            <br />
            <br />
            In addition, if the revised version of this Agreement includes a
            Substantial Change, we will provide you with 30 days prior notice of
            such Substantial Change as per the Notification Preferences provided
            by you. You are advised to regularly check for any amendments or
            updates to the terms and conditions contained in this Agreement. For
            the purpose of this Agreement, the term “Substantial Change” means a
            change to the terms of this Agreement that materially reduces your
            rights or increases your responsibilities.
            <br />
            <br />
            Please read these terms and conditions carefully. These terms &
            conditions, as modified or amended from time to time, are a binding
            contract between the Firm and you. If you visit, use, or shop at the
            site (or any future site operated by the Firm, you accept these
            terms and conditions). In addition, when you use any current or
            future services of the Firm or visit or purchase from any business
            affiliated with the Firm or third-party vendors, whether or not
            included in the site, you will also be subject to the guidelines and
            conditions applicable to such service or merchant. If these
            conditions are inconsistent with such guidelines and conditions,
            such guidelines and conditions will prevail.
            <br />
            <br />
            If this Terms and Conditions conflicts with any other document, the
            Terms and Conditions will prevail for the purposes of usage of the
            Site. As a condition of purchase, the Site requires your permission
            to send you administrative and promotional emails. We will send you
            information regarding your account activity and purchases, as well
            as updates about our products and promotional offers. You can
            opt-out of our promotional emails anytime by clicking the
            UNSUBSCRIBE link at the bottom of any of our email correspondences.
            Please see our Privacy Policy for details. We shall have no
            responsibility in any manner whatsoever regarding any promotional
            emails or SMS/MMS sent to you. The offers made in those promotional
            emails or SMS/MMS shall be subject to change at the sole discretion
            of the Firm and the Firm owes no responsibility to provide you any
            information regarding such change. By placing an order, you make an
            offer to us to purchase products you have selected based on standard
            Site restrictions, Merchant specific restrictions, and the terms and
            conditions stated below. You are required to create an account in
            order to purchase any product from the Site. This is required so we
            can provide you with easy access to print your orders and view your
            past purchases.
            <br />
            <br />
            The Site/Firm takes no responsibility for the services or products
            that are sold or supplied by third-party vendors. The Firm makes no
            warranty to their end users for the quality, safety, usability, or
            another aspect of a product or service that is supplied by a
            Merchant and/for some services or activities that involve potential
            bodily harm, and for those activities, the Firm takes no
            responsibility for the service or activity being offered, and the
            End User takes responsibility for his or her own actions in
            utilizing those services.
          </Typography>
          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            To read the complete Terms and Conditions, please see below:
          </Typography>
          <List>
            {tAndCLists.map((item, index) => (
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
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Description of Services
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            In the Site, We provide users with access to clothing and
            accessories that can be purchased at the price mentioned on the
            site.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            General
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            This Agreement sets forth the terms and conditions that apply to the
            use of the Site by the User. By using this Site, the User agrees to
            comply with all of the TERMS AND CONDITIONS hereof. The right to use
            the Site is personal to the User and is not transferable to any
            other person or entity. The User shall be responsible for protecting
            the confidentiality of their password(s), if any. The User
            acknowledges that, although the internet is often a secure
            environment, sometimes there are interruptions in service or events
            that are beyond the control of the Firm, and the Firm shall not be
            responsible for any data lost while transmitting information on the
            internet. While it is the Firm’s objective to make the Site
            accessible 24 hours per day, 7 days per week, the Site may be
            unavailable from time to time for any reason including, without
            limitation, routine maintenance. You understand and acknowledge that
            due to circumstances both within and outside of the control of the
            Firm, access to the Site may be interrupted, suspended or terminated
            from time to time. The Firm shall have the right at any time to
            change or discontinue any aspect or feature of the Site, including,
            but not limited to, content, hours of availability and equipment
            needed for access or use. Further, the Firm may discontinue
            disseminating any portion of information or category of information
            may change or eliminate any transmission method and may change
            transmission speeds or other signal characteristics.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Your Account
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            In consideration of your use of the Site, you represent that you are
            of legal age to form a binding contract and are not a person barred
            from receiving services under the laws as applicable in India. You
            also agree to provide true, accurate, current and complete
            information about yourself as prompted by the Site's registration
            form. If you provide any information that is untrue, inaccurate, not
            current or incomplete (or becomes untrue, inaccurate, not current or
            incomplete), or We have reasonable grounds to suspect that such
            information is untrue, inaccurate, not current or incomplete, We
            have the right to suspend or terminate your account and refuse any
            and all current or future use of the Site (or any portion thereof).
            If you use the Site, you are responsible for maintaining the
            confidentiality of your account and password including cases when it
            is being used by any of your family members, friends, or relatives,
            whether a minor or an adult. You further agree to accept
            responsibility for all transactions made from your account and any
            dispute arising out of any misuse of your account, whether by any
            family member, friend, relative, any third party, or otherwise shall
            not be entertained by the Firm. Because of this, we strongly
            recommend that you exit from your account at the end of each
            session. You agree to notify us immediately of any unauthorized use
            of your account or any other breach of security. We reserve the
            right to refuse service, terminate accounts, or remove or edit
            content at our sole discretion.
            <br />
            <br />
            Access to and use of password-protected and/or secure areas of the
            Site is restricted to authorized users only. Unauthorized
            individuals attempting to access these areas of the Site may be
            subject to prosecution.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            License and Site Access
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            We grant you a limited license to access and make personal use of
            the Site and the Service. This license does not include any
            downloading or copying of account information for the benefit of
            another vendor or any other third party; caching, unauthorized
            hypertext links to the Site and the framing of any Content available
            through the Site uploading, posting, or transmitting any content
            that you do not have a right to make available (such as the
            intellectual property of another party); uploading, posting, or
            transmitting any material that contains software viruses or any
            other computer code, files or programs designed to interrupt,
            destroy or limit the functionality of any computer software or
            hardware or telecommunications equipment; any action that imposes or
            may impose (in our sole discretion) an unreasonable or
            disproportionately large load on our infrastructure; or any use of
            data mining, robots, or similar data gathering and extraction tools.
            You may not bypass any measures used by us to prevent or restrict
            access to the Site. Any unauthorized use by you shall terminate the
            permission or license granted to you by us.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Pricing Information in case of sale by us
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            We strive to provide you with the best prices possible on products
            and/or services you buy from us, however, We do not guarantee that
            the price will be the lowest in the city, region or geography.
            Prices and availability are subject to change without any prior
            notice. The prices mentioned on the Site are not subject to
            comparison with the same or similar product(s) and/or service(s)
            available through any online or offline sale. The pricing is subject
            to our pricing policy and the prices shall be determined only at our
            sole discretion.
            <br />
            <br />
            While we strive to provide accurate product and pricing information,
            pricing or typographical errors may occur. In the event that a
            product is listed at an incorrect price or with incorrect
            information due to an error in pricing or product information, we
            may, at our discretion, either contact you for instructions or
            cancel your order and notify you of such cancellation. We will have
            the right to modify the price of the product and contact you for
            further instructions using the e-mail address or telephone number
            provided by you during the time of registration, or cancel the order
            and notify you of such cancellation. In the event that we accept
            your order the same shall be debited to your credit card account.
            The payment may be processed prior to our dispatch of the product
            that you have ordered. If we have to cancel the order after we have
            processed the payment, the said amount will be reversed back to your
            credit card account. No refunds shall be applicable on the orders
            made by the User under the Cash on Delivery (“COD”) option.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Cancellation by Us
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            Please note that there may be certain orders that we are unable to
            accept and must cancel. We reserve the right, at our sole
            discretion, to refuse or cancel any order for any reason. Some
            situations that may result in your order being canceled shall
            include limitations on quantities available for purchase,
            inaccuracies or errors in product or pricing information, or any
            defect regarding the quality of the product. We may also require
            additional verifications or information before accepting any order.
            We will contact you if all or any portion of your order is canceled
            or if additional information is required to accept your order. If
            your order is canceled after your credit card has been charged, the
            said amount will be reversed back in your Card Account.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Cancellations by the User
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            In case of requests for order cancellations, we reserve the right to
            accept or reject requests for order cancellations for any reason. As
            part of usual business practice, if we receive a cancellation notice
            and the order has not been processed/approved by us, we shall cancel
            the order and refund the entire amount. A request for cancellation
            of order shall be valid and accepted only if they are made within 24
            (twenty-four) hours of making the order on the Site. We will not be
            able to cancel orders that have already been processed or orders for
            which a request for cancellation is made after the expiry of 24
            (twenty hours) from making the order. We have the full right to
            decide whether an order has been processed or not. The User agrees
            not to dispute the decision made by us and accepts our decision
            regarding the cancellation.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Fraudulent /Declined Transactions
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            We may constantly monitor the user’s account in order to avoid
            fraudulent accounts and transactions. Users with more than one
            account or availing our services fraudulently shall be liable for
            legal actions under applicable law and we reserve the right to
            recover the cost of goods, collection charges, and lawyers fees from
            persons using the Site fraudulently. We reserve the right to
            initiate legal proceedings against such persons for fraudulent use
            of the Site and any other unlawful acts or omissions in breach of
            these terms and conditions. In the event of detection of any
            fraudulent or declined transaction, prior to initiation of legal
            actions, We reserve the right to immediately delete such account and
            dishonor all past and pending orders without any liability. For the
            purpose of this clause, we shall owe no liability for any refunds.
            <br />
            <br />
            We as a merchant shall be under no liability whatsoever in respect
            of any loss or damage arising directly or indirectly out of the
            decline of authorization for any Transaction, on Account of the
            Cardholder having exceeded the preset limit mutually agreed by us
            with our acquiring bank from time to time.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Credit Card Details
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            You agree, understand, and confirm that the credit card details
            provided by you for availing of services on the Site will be correct
            and accurate and you shall not use the credit card which is not
            lawfully owned by you, i.e. in a credit card transaction, you must
            use your own credit card. You further agree and undertake to provide
            the correct and valid credit card details to us. Further, the said
            information will not be utilized and shared by us with any of the
            third parties unless required for fraud verifications or by law,
            regulation, or court order. We will not be liable for any credit
            card fraud. The liability for use of a card fraudulently will be on
            you and the onus to 'prove otherwise' shall be exclusively on you.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Billing
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            The price of our merchandise is inclusive of the VAT. The VAT
            charged shall depend upon the destination where the order has to be
            shipped. The tax rate applied to the order will be the combined tax
            rate for both state and local tax rates in accordance with the
            address where the order is being shipped. We reserve the right to
            collect taxes for shipping charges wherever applicable.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Delivery
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            We(Fabpixel) endeavor but do not guarantee to deliver the products
            to Users within 3-4 weeks from the day of the close of sale
            depending upon the shipping location. We work with different type of
            suppliers (Manufacturers, designers, distributors, importers, etc.)
            and the delivery time to Users is subject to the delivery of
            products from supplier to us. Other factors include delay in
            delivery through the courier partner, transporters’ strike, etc. We
            reserve the right to make delivery of the goods by installments. If
            the goods are to be delivered in instalments, each delivery will
            constitute a separate contract. You may not treat the contract (as a
            whole) as repudiated if we fail to deliver any one or more of the
            installments or if you have a claim in respect of any one or more of
            the instalments. If you fail to take delivery of the goods, we may
            at our discretion charge you for the additional shipping cost.
            <br />
            <br />
            Please note we insure each purchase during the time it is in transit
            until it is delivered to your specified delivery address. We require
            a signature for any goods delivered, at which point responsibility
            for your purchased goods passes to you. If you have specified a
            third party recipient for delivery purposes (for example as a gift)
            then you accept that evidence of a signature by them (or at that
            delivery address) is evidence of delivery and fulfillment by us of
            our obligation and transfer of responsibility in the same way.
            Kindly note that we aim to dispatch all orders within 24 hours, or
            48 hours during sale periods. Estimated delivery times are to be
            used as a guide only and commence from the date of dispatch. We are
            not responsible for any delays caused by third-party delivery
            agencies and/or due to the time required for statutory clearances
            during the delivery process.
          </Typography>

          <Typography
            color={'primary.dark'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: 2 }}
          >
            Trademarks
          </Typography>
          <Typography
            color={'primary.main'}
            variant="h6"
            component="div"
            sx={{ fontWeight: 'normal', marginTop: 2 }}
          >
            The trademarks, logos, and service marks ("Marks") displayed on the
            Site are our property and/or the property of the respective persons.
            Users are prohibited from using any Marks for any purpose whatsoever
            without our prior written permission or such third party which may
            own the Marks. All information and content including any software
            programs available on or through the Site ("Content") are protected
            by copyright. Users are prohibited from modifying, copying,
            distributing, transmitting, displaying, publishing, selling,
            licensing, creating derivative works, or using any Content available
            on or through the Site for commercial or public purposes.
            <br />
            <br />
            The Site contains copyrighted material, trademarks, and other
            proprietary information, including, but not limited to, text,
            software, photos, video, graphics, music, sound, and the entire
            contents of the Firm protected by copyright as a collective work
            under the applicable copyright laws. The Firm owns a copyright in
            the selection, coordination, arrangement, and enhancement of such
            content, as well as in the content original to it. Users may not
            modify, publish, transmit, participate in the transfer or sale,
            create derivative works, or in any way exploit, any of the content,
            in whole or in part. Users may download / print / save copyrighted
            material for the User's personal use only. Except as otherwise
            expressly stated under copyright law, no copying, redistribution,
            retransmission, publication, or commercial exploitation of
            downloaded material without the express permission of the Firm and
            the copyright owner is permitted. If copying, redistribution, or
            publication of copyrighted material is permitted, no changes in or
            deletion of author attribution, trademark legend, or copyright
            notice shall be made. The User acknowledges that he/she/it does not
            acquire any ownership rights by downloading copyrighted material.
            Trademarks that are located within or on the Site or a website
            otherwise owned or operated in conjunction with the Firm shall not
            be deemed to be in the public domain but rather the exclusive
            property of the Firm unless such site is under license from the
            trademark owner thereof in which case such license is for the
            exclusive benefit and use of the Firm unless otherwise stated.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
