'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 hover:bg-primary/10 hover:scale-110 transition-all"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-primary rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-primary rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
