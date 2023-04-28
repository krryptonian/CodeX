import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { Listbox } from '@headlessui/react'
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Fragment, useEffect, useRef } from 'react'
import { create } from 'zustand'

const useSetting = create((set) => ({
  setting: null,
  setSetting: (setting) => set({ setting }),
}))

function update() {
  document.documentElement.classList.add('changing-theme')
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    // document
    //   .querySelector('meta[name="theme-color"]')
    //   .setAttribute('content', '#0B1120')
  } else {
    document.documentElement.classList.remove('dark')
    // document
    //   .querySelector('meta[name="theme-color"]')
    //   .setAttribute('content', '#f8fafc')
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme')
  })
}

let settings = [
  {
    value: 'light',
    label: 'Light',
    icon: ({ selected, ...props }) => (
      <SunIcon
        className={clsx(
          props.className,
          selected ? 'text-blue-500' : 'text-neutral-500'
        )}
      />
    ),
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: ({ selected, ...props }) => (
      <MoonIcon
        className={clsx(
          props.className,
          selected ? 'text-blue-500' : 'text-neutral-500'
        )}
      />
    ),
  },
  {
    value: 'system',
    label: 'System',
    icon: ({ selected, ...props }) => (
      <ComputerDesktopIcon
        className={clsx(
          props.className,
          selected ? 'text-blue-500' : 'text-neutral-500'
        )}
      />
    ),
  },
]

function useTheme() {
  let { setting, setSetting } = useSetting()
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    } else {
      setSetting('system')
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme')
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting
    }
    if (initial.current) {
      initial.current = false
    } else {
      update()
    }
  }, [setting])

  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    function onStorage() {
      update()
      let theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme)
      } else {
        setSetting('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return [setting, setSetting]
}

const ToggleTheme = () => {
  let [setting, setSetting] = useTheme()

  return (
    <Listbox value={setting} onChange={setSetting}>
      <Listbox.Label className='sr-only'>Theme</Listbox.Label>
      <Listbox.Button type='button'>
        <span className='dark:hidden'>
          <SunIcon className='w-6 h-6' selected={setting !== 'system'} />
        </span>
        <span className='hidden dark:inline'>
          <MoonIcon className='w-6 h-6' selected={setting !== 'system'} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'mt-4 absolute outline-none z-50 top-full right-20 bg-white rounded-lg border border-color shadow-md overflow-hidden w-40 py-1 text-sm font-medium dark:bg-black'
        )}
      >
        {settings.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'py-1 px-2 flex items-center cursor-pointer',
                  selected && 'text-blue-500',
                  active && 'bg-neutral-50 dark:bg-neutral-900'
                )}
              >
                <Icon selected={selected} className='w-5 h-5 mr-2' />
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default ToggleTheme
