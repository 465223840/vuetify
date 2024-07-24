import { useDraggable } from 'vue-draggable-plus'


function filterAndFlattenTreeData(treedata, searchText) {
  const result = [];

  function searchAndScore(node, depth = 1, parentLabel = '') {
    if (node.label.includes(searchText)) {
      result.push({
        display: parentLabel ? `${parentLabel}-${node.label}` : node.label,
        label: node.value,
        id: node.id,
        score: Math.pow(10, depth - 1)
      });
    }
    if (node.children) {
      for (const child of node.children) {
        searchAndScore(child, depth + 1, parentLabel ? `${parentLabel}-${node.label}` : node.label);
      }
    }
  }

  for (const node of treedata) {
    searchAndScore(node);
  }

  result.sort((a, b) => b.score - a.score);

  const items = result.slice(0, 10).map(item => ({
    display: item.display,
    label: item.display.split('-').pop(),
    id: item.id
  }));

  return items;
}
function isValidExpression(expression) {
  const operators = new Set(['&', '|', '!']);
  const stack = [];
  let lastTokenWasOperator = true;  // 初始状态为 true 以处理前导符号

  for (let i = 0; i < expression.length; i++) {
    const token = expression[i];

    if (token === '(') {
      stack.push(token);
      lastTokenWasOperator = true;  // 左括号后面应该是操作数或前导符号
    } else if (token === ')') {
      if (stack.length === 0) {
        return false;  // 没有匹配的左括号
      }
      stack.pop();
      lastTokenWasOperator = false;  // 右括号后面应该是操作符或结束
    } else if (operators.has(token)) {
      if (token === '!' && !lastTokenWasOperator) {
        return false;  // ！符号只能在操作符后面
      }
      if (token !== '!' && lastTokenWasOperator) {
        return false;  // 非！符号不能在前导符号位置
      }
      lastTokenWasOperator = true;  // 操作符后面应该是操作数
    } else {
      if (!lastTokenWasOperator) {
        return false;  // 连续的操作数
      }
      lastTokenWasOperator = false;  // 操作数后面应该是操作符或右括号
    }
  }

  return stack.length === 0 && !lastTokenWasOperator;  // 检查是否所有括号都匹配且最后一个不是操作符
}
export default function ({ treeData }) {
  const el1 = ref()
  const el2 = ref()
  const el3 = ref()

  const searchText = ref('')
  const list1 = ref([
    { id: '4', label: '4444', display: '4444' }
  ])
  const list2 = ref([
    { id: 'a', label: 'aaaa', display: 'aaaa' },
    { id: 'b', label: 'bbbb', display: 'bbbb' },
    { id: 'c', label: 'cccc', display: 'cccc' },
    { id: 'd', label: 'dddd', display: 'dddd' }
  ])

  watch(() => list2.value, () => {
    const expression = list2.value.map(item => item.label)
    const isValid = isValidExpression(expression);
    console.log(isValid);
  }, { deep: true })

  const list3 = ref([
    { id: '-1', label: '&', display: '&', color: 'blue', type: 3 },
    { id: '-2', label: '|', display: '|', color: 'green', type: 3 },
    { id: '-3', label: '!', display: '!', color: 'red', type: 3 },
    { id: '-4', label: '()', display: '()', color: 'black', type: 3 },
  ])

  const items = computed(() => filterAndFlattenTreeData(treeData, searchText.value))

  const onClickSelect = (item) => {
    searchText.value = ''
    list1.value.push(item.id)
    console.log(item)
  }
  // 清空
  const onClearTags = () => list2.value = []
  // 快捷操作
  const onQuickGenerate = (val) => {
    if (list1.value.length <= 0) return
    const target = list3.value.find(item => item.id === val)
    if (!target) {
      console.warn(`Item with id ${val} not found in list3`)
      return
    }
    let timestamp = Date.now()
    list2.value = [...list2.value, ...list1.value.flatMap(item => [{ ...target, timestamp: timestamp += 1 }, item])]
    list1.value = []
  }
  const onRemoveTag = () => {
    console.log(1)
    // list1.value = list1.value
  }

  const handleRightClick = (item, event) => {
    event.preventDefault()
    if (item.type !== 3) {
      list1.value.push(item)
      list2.value = list2.value.filter(_item => _item.id !== item.id)
    } else {
      handleSpecialItemRightClick(item)
    }
  }

  const handleSpecialItemRightClick = (item) => {
    if (item.name === '(' || item.name === ')') {
      const item1 = list2.value.find(_item => _item.id === item.id)
      const item2 = list2.value.find(_item => _item.timestamp === item1.timestamp)
      if (item1 && item2) {
        list2.value = list2.value.filter(_item => _item.timestamp !== item1.timestamp)
        list2.value = list2.value.filter(_item => _item.timestamp !== item2.timestamp)
      }
    } else {
      list2.value = list2.value.filter(_item => _item.timestamp !== item.timestamp)
    }
  }

  useDraggable(el1, list1, {
    animation: 250,
    ghostClass: 'ghost',
    group: { name: 'people', pull: true, put: ['people'] },
    onUpdate: () => console.log('更新 list1'),
    onAdd: (event) => {
      const newItem = list1.value[event.newIndex]
      if (newItem && newItem.type === 3) {
        list1.value.splice(event.newIndex, 1)
      }
    }
  })

  useDraggable(el2, list2, {
    animation: 250,
    ghostClass: 'ghost',
    group: { name: 'people', pull: true, put: ['people', 'operators'] },
    onUpdate: () => console.log('更新 list2'),
    onAdd: (event) => {
      if (event.data.type === 3) {
        const timestamp = Date.now()
        if (event.data.id === '-4') {
          list2.value.splice(event.newIndex, 1)
          list2.value.splice(event.newIndex, 0, { id: '(', label: '(', type: 3, timestamp })
          list2.value.splice(event.newIndex + 1, 0, { id: ')', label: ')', type: 3, timestamp })
        } else {
          list2.value.splice(event.newIndex, 1)
          list2.value.splice(event.newIndex, 0, { ...event.data, timestamp })
        }
      }
    }
  })

  useDraggable(el3, list3, {
    animation: 250,
    ghostClass: 'ghost',
    group: { name: 'operators', pull: 'clone', put: false },
    sort: false
  })

  return {
    el1,
    el2,
    el3,
    searchText, items, list1, list2, list3,
    onClickSelect, onClearTags, onQuickGenerate, onRemoveTag, handleRightClick
  }
}


// 帮我写一个过滤数据的js函数
// 源数据treedata简称td是一个树形数据 ，其中一项的结构是{label:'',value:'',id:''}
// searchText简称txt是关键字
// items是过滤后的数据
//  要求通过txt筛选出十条td的数据，得分最高的数据在上方。在td中第一级一分，第二级十分，第三级一百分以此类推。
//  然后将数据扁平化，返回的数据格式是{label:'',value:'',id:''}
//  其中label是td中label的拼接(“一级-二级-三级”)，value是td中value，id是td中id
