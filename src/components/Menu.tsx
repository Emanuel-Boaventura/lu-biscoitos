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
      className={`fixed right-0 flex h-screen w-[200px] flex-col items-center gap-4 bg-default-800 p-4 transition-transform duration-300 ${
        openMenu ? '' : 'translate-x-[100%]'
      }`}
    >
      <X onClick={closeMenu} className='h-6 w-auto self-end' />
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
        className='default-button !px-3 !py-1 !text-default-900'
      >
        Encomendar!
      </a>
    </div>
  )
}
