import { X } from '@phosphor-icons/react'
import { type Dispatch, type SetStateAction } from 'react'

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
      <X onClick={closeMenu} className='self-end w-auto h-6' />
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
