const categoriesEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesEl.length}`)
categoriesEl.forEach(item =>  {
    const categoryName = item.querySelector('h2').textContent
    const categoryCount = item.querySelectorAll('li').length
console.log(`Category: ${categoryName}
Elements: ${categoryCount}`)
})