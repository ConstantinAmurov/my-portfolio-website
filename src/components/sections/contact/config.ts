import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'amurov.constantin@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/ConstantinAmurov',
      Icon: SiGithub
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/constantin-amurov/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
