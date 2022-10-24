const debounce = (func, delay) => {
  let debounceTimer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func.apply(context, args), delay)
  }
}

function paginationLogic(pageNo, setPageData, fltData) {
  let limit = 15
  let startIndex = (pageNo - 1) * limit
  let endIndex = startIndex + limit
  setPageData(fltData.slice(startIndex, endIndex))
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}

function onChangeLogic(e, data, setFltData, setPageData, searchField) {
  console.log("key press", e.target.value)
  if (e.target.value) {
    let filteredData = data.filter((dataItem) => {
      if (
        dataItem[searchField]
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return true
      } else {
        return false
      }
    })
    console.log("filtered Data", filteredData)
    setFltData(filteredData)
    setPageData(filteredData.slice(0, 14))
  } else {
    console.log("default filtered Data", data)
    setFltData(data)
    setPageData(data.slice(0, 14))
  }
}

export { debounce, paginationLogic, onChangeLogic }
