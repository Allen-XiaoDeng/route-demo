const app = document.querySelector('#app')
const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

//路由表
const routeTable = {
  '/1': div1,
  '/2': div2,
  '/3': div3,
  '/4': div4
}

function route(container) {
  // 获取用户想去哪里
  let number = window.location.pathname
  console.log('number' + number)

  if (number === '/') {
    number = '/1'
  }
//默认路由
  number = number || '/1'
// 获取界面
  let div = routeTable[number.toString()]
  if (!div) {
    //保底路由
    div = document.querySelector('#div404')
  }
  // 渲染界面
  div.style.display = 'block'

// 展示界面
  container.innerHTML = ''
  container.appendChild(div)
}

const allA = document.querySelectorAll('a.link')

for (let a of allA) {
  a.addEventListener('click', () => {
    e.preventDefault()
    const href = a.getAttribute('href')
    window.history.pushState(null, 'page ${href}', 'href')
    // 通知
    onStateChange(href)
  })
}

route(app)

function onStateChange() {
  console.log('state 变了')
  route(app)
}
