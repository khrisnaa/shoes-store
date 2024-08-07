import { anton } from '@/app/font';
import { FooterList } from '@/components/footer/footer-list';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menu = [
  {
    title: 'Resources',
    links: [
      { text: 'Order Status', href: '#' },
      { text: 'Become A Member', href: '#' },
      { text: 'Student Discounts', href: '#' },
      { text: 'Send Us Feedbacks', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { text: 'Get Help', href: '#' },
      { text: 'Order Status', href: '#' },
      { text: 'Delivery', href: '#' },
      { text: 'Returns', href: '#' },
      { text: 'Payment Options', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Sepatood', href: '#' },
      { text: 'News', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Investors', href: '#' },
      { text: 'Sustainability', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="py-8">
      <div className="bg-black text-center text-white">
        <Header>SEPATOOD</Header>
      </div>
      <div className="flex items-center justify-between px-8 py-8">
        {menu.map((item, index) => (
          <FooterList links={item.links} title={item.title} key={index} />
        ))}
      </div>
      <div className="border-t px-8 py-8">
        <p className="text-sm">© 2024 All rights reserved.</p>
      </div>
    </div>
  );
};
