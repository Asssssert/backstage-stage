export default {
  toPageByName(name, query) {
    router.push({name: name, query: query});
  },
  toPageByPath(path, query) {
    router.push({path: path, query: query});
  },
  message(type, msg, showClose) {
    if (showClose == undefined) showClose = false;
    bus.$message({
      showClose: showClose,
      message: msg,
      type: type
    })
  },
  notification(type, msg) {
    bus.$notify({
      message: msg,
      type: type
    })
  },
  changeTree(data, parentId) {
    let itemArr = [];
    for (let i = 0; i < data.length; i++) {
      let node = data[i];
      if (node.parentId === parentId) {
        let newNode = {};
        newNode.id = node.id;
        newNode.name = node.name;
        newNode.desc = node.describes;
        newNode.parentId = node.parentId;
        newNode.children = _g.changeTree(data, node.id);
        itemArr.push(newNode);
      }
    }
    return itemArr;
  },
  menuTree(data, parentId) {
    let itemArr = [];
    for (let i = 0; i < data.length; i++) {
      let node = data[i];
      if (node.pid === parentId) {
        let newNode = {};
        newNode.id = node.id;
        newNode.title = node.title;
        newNode.pid = node.pid;
        newNode.path = node.path;
        newNode.disabled = node.disabled;
        newNode.children = _g.menuTree(data, node.id);
        itemArr.push(newNode);
      }
    }
    return itemArr;
  }
}
