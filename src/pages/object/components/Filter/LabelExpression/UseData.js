export default function () {
  const flattenTags = (data, parentTitle = '') => {
    return data.flatMap(item => {
      const currentTitle = parentTitle ? `${parentTitle}-${item.title}` : item.title
      return item.children && item.children.length > 0
        ? flattenTags(item.children, currentTitle)
        : currentTitle
    })
  }
  return {
    flattenTags
  }
}
