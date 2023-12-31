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
      <div className='max-container flex justify-between  items-center py-4'>
        <div>
          <p className='font-bold tracking-wider cursor-default'>
            Biscoitos da Lu
          </p>
        </div>

        {mobile ? (
          <List
            onClick={() => setOpenMenu(prevState => !prevState)}
            className='w-auto h-6'
          />
        ) : (
          <div className='flex gap-4  items-center'>
            <a
              href='#biscuits'
              className='hover:text-default-100 active:translate-y-px'
            >
              Biscoitos
            </a>
            <a
              href='#about'
              className='hover:text-default-100 active:translate-y-px'
            >
              Marca
            </a>
            <a
              href='#form'
              className='default-button !py-1 !px-3 !text-default-900'
            >
              Encomendar!
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
