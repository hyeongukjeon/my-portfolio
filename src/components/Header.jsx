import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Photos', href: '/photos' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const location = useLocation();

  const isActive = (href) => {
    const path = href.split('#')[0];
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-line bg-paper text-ink">
      <div className="mx-auto flex min-h-[64px] w-full max-w-site items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-16">
        <Link
          to="/"
          className="font-inter text-sm font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:text-ink-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          Hyeonguk Jeon
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap justify-end gap-x-6 gap-y-1 font-inter text-[11px] font-medium uppercase tracking-[0.14em] sm:gap-x-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                isActive(item.href)
                  ? 'text-accent'
                  : 'text-ink-70 hover:text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
