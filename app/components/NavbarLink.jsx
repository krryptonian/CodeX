import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarLink = ({ children, href }) => {
  const pathname = usePathname()

  return (
    <Link
      prefetch={false}
      className={clsx(
        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
        pathname === href
          ? 'border-blue text-neutral-800 dark:text-neutral-100'
          : 'border-transparent dark:text-neutral-400 text-neutral-800 hover:border-primary-light dark:hover:border-primary-dark hover:text-neutral-500'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

export default NavbarLink
