import useMediaQuery from '@/hooks/useMediaQuery'
import { List } from '@phosphor-icons/react'
import { type Dispatch, type SetStateAction } from 'react'

interface IHeader {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export default function Header({ setOpenMenu }: IHeader) {
  const mobile = useMediaQuery('(max-width: 520px)')

  return (
    <section className='flex bg-default-800'>
      <div className='max-container flex items-center  justify-between py-4'>
        <div>
          <p className='cursor-default font-bold tracking-wider'>
            Biscoitos da Lu
          </p>
        </div>

        {mobile ? (
          <List
            onClick={() => setOpenMenu(prevState => !prevState)}
            className='h-6 w-auto'
          />
        ) : (
          <div className='flex items-center  gap-4'>
            <a
              href='#biscuits'
              className='hover:text-default-100 active:translate-y-px'
            >
              Biscoitos
            </a>
            <a
              href='#contact'
              className='default-button !px-3 !py-1 !text-default-900'
            >
              Encomendar!
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
