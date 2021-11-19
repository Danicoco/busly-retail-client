import { ref, computed } from 'vue'
const nth = function (d: any) {
  if (d > 3 && d < 21) return 'th'
  switch (d % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
export const formatCurrency = (locale: string, num: number, currency: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(num)
}
export const formattedDate = (date: string | Date) => {
  const newDate = new Intl.DateTimeFormat('en-ng', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))

  const suffix = nth(newDate.split(' ')[0])

  return `${newDate.split(' ')[0]}${suffix} ${newDate.split(' ')[1]} ${newDate.split(' ')[2]}`
}


export const formatDate = (date: Date) => {
  const newDate = new Intl.DateTimeFormat('en-us').format(new Date(date))

  const suffix = nth(newDate.split(' ')[0])

  return newDate
}

export const formatTime = (date: Date) => {
  const newDate = new Intl.DateTimeFormat('en-us', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date(date))

  const suffix = nth(newDate.split(' ')[0])

  return newDate
}

export const collapsed = ref(false)
export const toggleNavbar = () => (collapsed.value = !collapsed.value)
export const NAVBAR_WIDTH = 200

export const NAVBAR_WIDTH_COLLAPSED = 38

export const navbarWidth = computed (() => `${ collapsed.value ? NAVBAR_WIDTH_COLLAPSED : NAVBAR_WIDTH}px`)
