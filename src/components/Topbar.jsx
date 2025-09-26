export default function Topbar() {
  return (
    <div className="w-full bg-black text-white text-xs sm:text-sm">
      <div className="container-px">
        <div className="grid grid-cols-3 items-center h-10 sm:h-11">
          <div className="hidden sm:block" />
          <div className="text-center">
            <span className="opacity-90">
              Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
            </span>{' '}
            <a href="#deals" className="font-semibold underline underline-offset-2">
              ShopNow
            </a>
          </div>
          <div className="flex justify-end">
            <button className="inline-flex items-center gap-1 opacity-90 hover:opacity-100">
              English
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="translate-y-[1px]">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10" />
    </div>
  );
}
