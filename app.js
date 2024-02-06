

const navbarlinks = document.querySelectorAll('.nav-item')

navbarlinks.forEach(links => {
  // console.log(links);
  links.addEventListener('click', () => toggleActive(links))
})

function toggleActive(clickedLink) {
  navbarlinks.forEach(links => {
    if (links !== clickedLink) {
      links.classList.remove('active')
    }

  })

  clickedLink.classList.toggle('active')
}




function ItemBtnClick() {

  const countBtn = document.querySelectorAll('.countbtn')
  const badge = document.querySelector('.badge')
  const count = document.querySelector('.count')
  const numberOfItems = document.querySelector('.numberOfItems')


  const cartIcon = document.querySelector('.cartIcon')
  const cartempty = document.querySelector('.cartempty')
  const popCardPrice = document.querySelector('.popCardPrice')
  const filledCart = document.querySelector('.filledCart')
  const totalPriceOfItems = document.querySelector('.totalPriceOfItems')
  const deletecart = document.querySelector('.deletecart')

  let increase = 0

  countBtn.forEach((btns) => {
    btns.addEventListener('click', e => {
      btns.style.border = 'none'
      const style = e.currentTarget.classList

      if (style.contains('plus')) {
        increase++
        badge.style.display = 'block'
        filledCart.classList.add('show')
        cartempty.style.display = 'none'
      }
      else if (style.contains('minus')) {
        if (increase === 0) {
          increase = 0
        }
        else {
          increase--
        }
      }

      if (increase === 0) {
        badge.style.display = 'none'
        filledCart.classList.remove('show')
        cartempty.style.display = 'block'
      }

      count.textContent = increase
      badge.textContent = increase
      numberOfItems.textContent = increase

      const cartProduct = [
        {
          price: 125,
          amount: increase,
        }
      ]

      let total = cartProduct.reduce((total, cartPrice) => {
        const { price, amount } = cartPrice

        total.cartTotal += price * amount
        return total
      }, {
        cartTotal: 0,
      })

      totalPriceOfItems.innerHTML = total.cartTotal

      deletecart.addEventListener('click', () => {
        totalPriceOfItems.innerHTML = 0
        increase = 0

        if (increase === 0) {
          badge.style.display = 'none'
          filledCart.classList.remove('show')
          cartempty.style.display = 'block'
          count.textContent = increase
        }
      })
    })
  })



  cartIcon.addEventListener('click', () => {


    popCardPrice.classList.toggle('show')

    if (increase === 0) {
      cartempty.style.display = 'block'
    } else {
      filledCart.classList.add('show')
      cartempty.style.display = 'none'
    }
  })





  const allthumbnail = document.querySelectorAll('.ThumbnailLinks a')

  const productbanner = document.querySelector('.productbanner>img')
  const LightWeightbanner = document.querySelector('.LightWeightbanner>img')
  
  const cartImage = document.querySelector('.cartImage>img')
  // console.log(LightWeightbanner);



  allthumbnail.forEach(items => {
    items.addEventListener('mouseover', () => {
      productbanner.src = items.href
      LightWeightbanner.src = items.href
      cartImage.src = items.href
    })
  })



  const toastTrigger = document.getElementById('liveToastBtn')
  const liveToast = document.getElementById('liveToast')
  const toastcontainer = document.querySelector('.toast-container')
  // console.log(toastcontainer);

  if (toastTrigger) {
    const toastBoot = bootstrap.Toast.getOrCreateInstance(liveToast);
    toastTrigger.addEventListener('click', () => {
      toastBoot.show()
      toastcontainer.classList.add("active")
    })
    
  }

  const lightWeightBtn = document.querySelector('.lightWeightBtn')

  // console.log(lightWeightBtn);

  lightWeightBtn.addEventListener('click', () => {
    toastcontainer.classList.remove("active")
  })


}

ItemBtnClick()





