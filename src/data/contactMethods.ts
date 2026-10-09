import { Facebook, Instagram, Mail, type LucideIcon } from 'lucide-react'

export const contactMethods: {
  label: string
  value: string
  href: string
  icon: LucideIcon
  external: boolean
}[] = [
  {
    label: 'Sähköposti',
    value: 'joukkueurheilijat@gmail.com',
    href: 'mailto:joukkueurheilijat@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'Instagram',
    value: '@joukkueurheilijat',
    href: 'https://www.instagram.com/joukkueurheilijat/',
    icon: Instagram,
    external: true,
  },
  {
    label: 'Facebook',
    value: '@joukkueurheilijat',
    href: 'https://www.facebook.com/joukkueurheilijat/',
    icon: Facebook,
    external: true,
  },
]
