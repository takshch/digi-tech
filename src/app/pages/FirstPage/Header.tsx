import SearchIcon from '../../../assets/search.svg';
import classNames from 'classnames';

const HEADER_ITEMS = ['home', 'live', 'explore', 'chat'];

function Header() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 bg-white px-3 pt-2 pb-4">
        <div className="font-bold text-3xl text-pink-600">Postara</div>
        <div className="flex items-center gap-3">
          {HEADER_ITEMS.map((itemName, index) => (
            <div
              key={index}
              tabIndex={1}
              className={classNames(
                'capitalize font-bold hover:text-slate-700',
                {
                  'text-pink-600': index === 0,
                  'text-black': index !== 0,
                }
              )}
            >
              {itemName}
            </div>
          ))}
          <div
            className="flex gap-2 bg-slate-100 rounded-full px-4 py-2 "
            tabIndex={1}
          >
            <div className="text-black flex items-center justify-center">
              <SearchIcon />
            </div>
            <input
              placeholder={'Search'}
              className="bg-slate-100 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
