// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `Count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0

  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`

  }
  const setColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    element.style.color           = `rgb(${255 - r}, ${255 - g}, ${255 -b})`

  }

  element.addEventListener('click', () => { setCounter(counter + 1) })
  setInterval(setColor,5000)
  setCounter(0)
}