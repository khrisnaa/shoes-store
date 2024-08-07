import { anton } from '@/app/font';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FooterListProps {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

export const FooterList = ({ title, links }: FooterListProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className={cn(anton.className, 'text-xl uppercase')}>{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li>
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
