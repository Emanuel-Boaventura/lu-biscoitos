import { type Dispatch, type SetStateAction } from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IMenu {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export default function Menu({ openMenu, setOpenMenu }: IMenu) {
  function closeMenu() {
    setOpenMenu(false)
  }

  return (
    <div
      className={`fixed right-0 w-[200px] h-screen transition-transform duration-300 bg-default-800 flex flex-col gap-4 items-center p-4 ${
        openMenu ? '' : 'translate-x-[100%]'
      }`}
    >
      <FontAwesomeIcon icon={faX} onClick={closeMenu} className='self-end' />
      <a
        href='#biscuits'
        onClick={closeMenu}
        className='hover:text-default-100 active:translate-y-px'
      >
        Biscoitos
      </a>
      <a
        href='#about'
        onClick={closeMenu}
        className='hover:text-default-100 active:translate-y-px'
      >
        Marca
      </a>
      <a
        href='#form'
        onClick={closeMenu}
        className='default-button !py-1 !px-3 !text-default-900'
      >
        Encomendar!
      </a>
    </div>
  )
}
