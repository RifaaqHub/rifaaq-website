import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { cn } from '@/lib/cn'
import { site } from '@/lib/site'

const PlayBadge = ({ className }: { className?: string }) => (
  <a
    href={site.playStoreUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      'inline-flex items-center gap-3 rounded-[14px] border border-[#5f6368] bg-black px-5 py-2.5 text-white transition duration-150 hover:bg-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2',
      className,
    )}
  >
    <IoLogoGooglePlaystore size={28} aria-hidden />
    <span className="flex flex-col text-left leading-none">
      <span className="text-[0.7rem] uppercase tracking-wider">Get it on</span>
      <span className="mt-1 text-[1.3rem] font-medium">Google Play</span>
    </span>
  </a>
)

export default PlayBadge
