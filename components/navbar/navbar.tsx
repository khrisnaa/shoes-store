import { NavbarLink } from '@/components/navbar/navbar-link';
import { NavbarLogo } from '@/components/navbar/navbar-logo';
import { NavbarAction } from '@/components/navbar/navbar-action';

const links = [
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Classic', href: '#' },
  { label: 'New Article', href: '#' },
];

export const Navbar = () => {
  return (
    <div className="sticky h-16 border-b px-8">
      <div className="relative flex h-full w-full items-center justify-between">
        <NavbarLogo />
        <NavbarLink links={links} />
        <NavbarAction />
      </div>
    </div>
  );
};
