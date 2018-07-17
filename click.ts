interface ClickListener {
  (this: Window, e: MouseEvent): void
}

const myListener:ClickListener = e => {
  console.log("I was clicked")
}

addEventListener("click", myListener)