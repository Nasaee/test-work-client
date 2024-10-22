import { ToggleTheme } from './ToggleTheme';

function Header() {
  return (
    <header className='sticky top-0 z-100 w-full bg-primary/10 bg-blur shadow-sm '>
      <div className='flex items-center justify-end py-3 px-2 md:px-8 lg:px-12'>
        <ToggleTheme />
      </div>
    </header>
  );
}
export default Header;
