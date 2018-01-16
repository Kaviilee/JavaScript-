var cuf = {
  // 字符串操作
  // 去除空格 type-all:全部空格，between:前后空格，after:后空格，before:前空格
  trim: function (str, type) {
    switch (type) {
      case 'all':
        return str.replace(/\s+/g, '');
      case 'between':
        return str.replace(/(^\s*)|(\s$)/g, '');
      case 'before':
        return str.replace(/(^\s*)/g, '');
      case 'after':
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  },
  /* 字母大小写切换
     type-1： 首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
  */
  changeCase: function (str, type) {
    function toggleCase(str) {
      var itemText = ""
      str.split("").forEach(
        function (item) {
          if (/^([a-z]+)/.test(item)) {
            itemText += item.toUpperCase();
          } else if (/^([A-Z]+)/.test(item)) {
            itemText += item.toLowerCase();
          } else {
            itemText += item;
          }
        });
      return itemText;
    }
    switch (type) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
        });
      case 3:
        return toggleCase(str);
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  },
  // 字符串替换 
  replaceStr: function (str, source, target) {
    sRegExp = new RegExp(source, 'g');
    return str.replace(sRegExp, target);
  },
  // 检测字符串性质
  checkType: function (str, type) {
    switch (type) {
      case 'email':
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'phone':
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      case 'tel':
        return /^(0\d{2, 3}-\d{7, 8})(-\d{1, 4})?$/.test(str);
      case 'number':
        return /^[0-9]$/.test(str);
      case 'english':
        return /^[a-zA-Z]+$/.test(str);
      case 'text':
        return /^\w+$/.test(str);
      case 'chinese':
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower':
        return /^[a-z]+$/.test(str);
      case 'upper':
        return /^[A-Z]+$/.test(str);
      default:
        return true;
    }
  },
  // 检测密码强度
  checkPassword: function (str) {
    let level = 0;
    if (str.length < 6) {
      return level;
    }
    if (/[0-9]/.test(str)) {
      level++;
    }
    if (/[a-z]/.test(str)) {
      level++;
    }
    if (/[A-Z]/.test(str)) {
      level++;
    }
    if (/[\.|-|_]/.test(str)) {
      level++;
    }

    return level;
  },
  // 生成随机码 count
  randomWord: function (count) {
    return Math.random().toString(count).substring(2);
  },
  // 字符串出现次数
  countStr: function (str, target) {
    return str.split(target).length - 1;
  },
  // 格式化字符串 size:分割为多少
  formatText: function (str, size, symbol) {
    let _size = size || 3, _symbol = symbol || ',';
    let regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
    let reg = new RegExp(regText, 'g');
    return str.replace(reg, _symbol);
  },
  // 数组操作
  // 数组去重
  // unique: function (arr) {
  //   return arr.filter(function(item, index){
  //     return arr.indexOf(item) === index;
  //   });
  // }
  unique: function (arr) {
    let _set = new Set(arr);
    return Array.from(_set);
  },
  
}
