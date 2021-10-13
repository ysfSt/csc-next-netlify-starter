import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const VerticalFeatures = () => (
  <>
    <Background color="cs-pink" bgclass="bg-logo-blend">
      <Section yPadding="py-6">
        <NavbarTwoColumns>
          <li>
            <Link href="/contact-crystal-shine-cleaning-service">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
    <Section yPadding="py-2">
      <h2 className="text-2xl" color="cs-lime">
        Crystal Shine Cleaning
      </h2>
      <span color="#F0560E">
        Specialty cleaning services including House Cleaning, Office Cleaning,
        Realtor move-ins & move-outs, Construction Cleanups or labor assistance.
        We provide services for the Danbury, Brookfield, Newtown, Easton,
        Redding & Ridgefield areas of Connecticut
      </span>
    </Section>

    <Section title="" description="" yPadding="py-0">
      <VerticalFeatureRow
        title="House Cleaning"
        description="We do deep cleaning and simple cleaning on a one-time or recurring frequency."
        image="/home-cleaning-supplies-and-equipment.png"
        imageAlt="Regular House Cleaning and Maintenance"
      />
      <VerticalFeatureRow
        title="Office Cleaning"
        description="We do general office cleaning or specific cleaning tasks and any needed responsibilities. One-time or Schedule a return visit."
        image="/office-cleaning-supplies-and-safety.png"
        imageAlt="Affordable Office Cleaning"
        reverse
      />
      <VerticalFeatureRow
        title="Condominium, Townhouse, Homes and all type of vacancy cleanings."
        description="We do deep cleaning and simple cleaning on a one-time or recurring frequency."
        image="/cleaning-maid-service-commercial-cleaning.png"
        imageAlt="Next Level Condominium Cleaning Services"
      />
    </Section>
  </>
);

export { VerticalFeatures };
