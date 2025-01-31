import React from 'react'
import { Container } from '../Components';

function Calendars() {
  return (
    <Container>
      <h1>Free calendars</h1>
      <h2>Add this calendar for IOS/ Apple</h2>
      <iframe className='w-[100%]' src="https://calendar.google.com/calendar/embed?src=a7a3a82a3787ee6daed6806a3da4eda708fdedd9f8be1ecf799ae8531f5fda96%40group.calendar.google.com&ctz=America%2FToronto" frameborder="0" scrolling="no" height="900px"></iframe>
      <h2>Add this calendar for Android</h2>
      <iframe className='w-[100%]' src="https://calendar.google.com/calendar/embed?src=5a0ef1c73d64bcd73c6e7ad053e236ccf23e7d531393fa9397595da5a5a51c4d%40group.calendar.google.com&ctz=America%2FToronto" width="800" height="600" frameborder="0" scrolling="no"></iframe>

    </Container>
  )
}

export default Calendars
