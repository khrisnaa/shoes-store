import { NavbarLink } from '@/components/navbar/navbar-link';
import { NavbarLogo } from '@/components/navbar/navbar-logo';
import { NavbarAction } from '@/components/navbar/navbar-action';
import { MobileMenu } from '@/components/navbar/mobile-menu';

const links = [
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Classic', href: '#' },
  { label: 'New Article', href: '#' },
];

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-5">
      <MobileMenu />
      <NavbarLogo />
      <NavbarLink links={links} />
      <NavbarAction />
    </div>
  );
};
