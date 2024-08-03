import { Anton, Poppins } from 'next/font/google';

export const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
